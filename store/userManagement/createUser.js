import { data } from "autoprefixer"

export const state = () => ({
    userDetails: {
        firstname: '',
        lastname: '',
        middlename: '',
        birthdate: '',
        phone: '',
        civilStatus: '',
        regions: [],
        provinces: [],
        cities: [],
        barangays: [],
        region: null,
        province: null,
        city: null,
        barangay: null,
        house: null,
        sex: '',
        email: '',
        uuid: null,
        token: null,
        role: [],
    },
    errorMsg: [],
    masterDataUser: [],
})

export const getters = {
    getFirstname(state) {
        return state.userDetails.firstname
    },
    getMiddlename(state) {
        return state.userDetails.middlename
    },
    getLastname(state) {
        return state.userDetails.lastname
    },
    getBirthdate(state) {
        return state.userDetails.birthdate
    },
    getPhone(state){
        return state.userDetails.phone
    },
    getCivilStatus(state){
        return state.userDetails.civilStatus
    },
    getRegion(state){
        return state.userDetails.region
    },
    getProvince(state){
        return state.userDetails.province
    },
    getCity(state){
        return state.userDetails.city
    },
    getBarangay(state){
        return state.userDetails.barangay
    },
    getHouse(state){
        return state.userDetails.house
    },
    getSex(state) {
        return state.userDetails.sex
    },
    getEmail(state) {
        return state.userDetails.email
    },
    getToken(state) {
        return state.userDetails.token
    },
    getUuid(state) {
        return state.userDetails.uuid
    },
    getRole(state){
        return state.userDetails.role
    }
}

export const actions = {
    async detectUser({dispatch, state, commit}){
        let params = {
            "firstName": state.userDetails.firstname,
            "lastName": state.userDetails.lastname,
            "middleName": state.userDetails.middlename,
            "birthdate": state.userDetails.birthdate
        }
        try {
            const res = await this.$axios.$post('http://localhost/api/users/finduser', params, {headers:{
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
            }})
            .then(response => {
                if(response.userFound != 0) {
                    console.log(response.userFound)
                    let errMessage = "Oops! There is a record matching:<br> First Name: " + response.userFound[0].first_name + "<br> Last Name: " + response.userFound[0].last_name + "."
                    commit('alert/ERROR', errMessage, { root: true })
                } else {
                    dispatch('addUser')
                }
            })
        } catch (error) {
            console.log(error)
        }
    },

    async addUser({dispatch, commit, state}) {
        // let keycloakApi = `https://dev.iams.uplb.edu.ph/auth/admin/realms/UPLB_APP_REALM/users`
        let keycloakApi = `http://localhost:8282/admin/realms/UPLB_APP_REALM/users`
        // program to generate random strings

        // declare all characters
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        let apiData = {
            "enabled" :true,
            "username" : state.userDetails.email,
            "email" : state.userDetails.email,
            "firstName" : state.userDetails.firstname,
            "lastName" : state.userDetails.lastname,
            "credentials" : [
                {
                    "type" : "password",
                    "value" : generateString(10),
                    "temporary" : false
                }
            ],
            "attributes" : {
                "middleName" : [
                    state.userDetails.middlename
                ],
                "birthdate" : [
                    state.userDetails.birthdate
                ]
            },
            "groups" : [state.userDetails.role]
        }

        try {
            const res = await this.$axios.$post(keycloakApi, apiData,
            {headers: {
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
            }}).then(response => {
                console.log(response)
                setTimeout(() => {dispatch('getUserUuid'), 1000})
            })
        } catch (error) {
            console.log(error)
            if (error.response.status === 409){
                console.log('User already exist in keycloak')
            }
        }
    },

    async getUserUuid({commit, state, dispatch}, payload){
        //get newly created user
        let keycloakApi = `http://localhost:8282/admin/realms/UPLB_APP_REALM/users`
        try {
            const res = await this.$axios.$get(keycloakApi + '/?email=' + state.userDetails.email, {
                headers: {
                    'Authorization' : this.$auth.strategy.token.get(),
                    'Content-Type' : 'application/json',
            }})
            console.log(res)
            await commit('SET_USER_UUID', res[0].id)
            console.log(state.userDetails.uuid)
            setTimeout(() => {dispatch('toMasterData'), 1000})

        } catch (error) {
            console.log(error)
            commit('SET_ERROR_MSG', error)
        }
    },

    toMasterData({state, commit}, payload) {
         try {
            const data = this.$axios.$post('http://localhost/api/users', state.userDetails, {headers:{
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
              }})
            .then(response => {
                console.log(response)
                let successMsg = "User created"
                commit('alert/SUCCESS', successMsg, { root: true })
                commit('CLEAR')
            })
        } catch(error) {
            console.log(error)
        }
    },

    async setDetails({dispatch, commit}, payload) {
        await commit('SET_USER_FIRSTNAME', payload.firstname)
        await commit('SET_USER_LASTNAME', payload.lastname)
        await commit('SET_USER_MIDDLENAME', payload.middlename)
        await commit('SET_USER_BIRTHDATE', payload.birthdate)
        await commit('SET_USER_PHONE', payload.phone)
        await commit('SET_USER_CIVIL_STATUS', payload.civilStatus)
        await commit('SET_USER_REGION', payload.region)
        await commit('SET_USER_PROVINCE', payload.province)
        await commit('SET_USER_CITY', payload.city)
        await commit('SET_USER_BARANGAY', payload.barangay)
        await commit('SET_USER_HOUSE', payload.house)
        await commit('SET_USER_SEX', payload.sex)
        await commit('SET_USER_EMAIL', payload.email)
        await commit('SET_USER_UUID', payload.uuid)
        await commit('SET_CLIENT_ROLE', payload.role)
    },

    async getMasterDataUser({commit}, payload){
        // let tableParams = Object.assign(payload.data, state.userDetails)
        let tableParams = {
            firstname: state.userDetails.firstname,
            lastname: state.userDetails.lastname,
            middlename: state.userDetails.middlename,
        }
        try {
            const mdUser = await this.$axios.$get('/users', {params: {tableParams}})
            .then(response =>{
                console.log(response)
                // commit('SET_MASTER_DATA_USER', response[0])
            })
        } catch(error){

        }
    },

    userCheck() {
        
    }
}

export const mutations = {
    SET_USER_DATA(state, payload) {
        state.userDetails = payload;
    },

    SET_USER_FIRSTNAME (state, firstname) {
        state.userDetails.firstname = firstname
    },

    SET_USER_LASTNAME (state, lastname) {
        state.userDetails.lastname = lastname
    },

    SET_USER_MIDDLENAME (state, middlename){
        state.userDetails.middlename = middlename
    },

    SET_USER_BIRTHDATE (state, birthdate) {
        state.userDetails.birthdate = birthdate
    },

    SET_USER_PHONE(state, phone) {
        state.userDetails.phone = phone
    },

    SET_USER_CIVIL_STATUS(state, civilStatus){
        state.userDetails.civilStatus = civilStatus
    },
        
    SET_USER_REGION(state, region){
        state.userDetails.region = region
    },
    
    SET_USER_PROVINCE(state, province){
        state.userDetails.province = province
    },
    
    SET_USER_CITY(state, city){
        state.userDetails.city = city
    },
    
    SET_USER_BARANGAY(state, barangay){
        state.userDetails.barangay = barangay
    },

    SET_USER_HOUSE(state, house){
        state.userDetails.house = house
    },

    SET_USER_SEX(state, sex){
        state.userDetails.sex = sex
    },

    SET_USER_EMAIL(state, email){
        state.userDetails.email = email
    },

    SET_ERROR_MSG(state, error){
        state.errorMsg = error
    },

    GET_FILTER_SUCCESS (state, data) {
        // console.log(data)
        Vue.set(state.filters, data.key, data.filter)
        state.loading = false
    },

    SET_MASTER_DATA_USER(state, masterDataUser){
        state.masterDataUser = masterDataUser
    },

    SET_CLIENT_ROLE(state, role) {
        state.userDetails.role = role
    },

    SET_USER_UUID(state, uuid){
        state.userDetails.uuid = uuid
    },

    CLEAR(state){
        state.userDetails = null
    },
}