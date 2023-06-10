export const state = () => ({
    search: null,
    userLists: {},
    kcUserList: {},
    users:{},
    uuid: null,
    roles: [],
    filters: {},
    filterValues: [],
})

export const getters = {
    getSearch (state) {
        return state.search
    },
    getUserLists (state) {
        return state.userLists
    }
}

export const actions = {
    async userList ({state, commit}, payload) {
        
        let keycloakApi = `http://localhost/api/users`
        try {
            // let tableParams = Object.assign(payload.data)
            let tableParams = Object.assign(payload.data, state.filterValues)
            const res = await this.$axios.$get(keycloakApi,{params: tableParams}, {headers:{
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
              }})
            .then(response => {
                const users = response.userLists
                // const myArr = Object.values(users)
                commit('SET_USER_LISTS', users)
            })
        } catch(error) {

        }
    },

    async kcUserList({state, commit}){
        let keycloakApi = `${process.env.KEYCLOAK_REST_API}${process.env.KEYCLOAK_REALM}/users`
        try {
            const res = await this.$axios.$get(keycloakApi, {headers: {
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
            }})
            const array = Object.values(res)
            await commit('SET_KC_USER_LIST', array)
        } catch(error) {
            console.log(error)
        }
    },
    async getFilters({ commit }, payload) {
        // commit('GET_DATA_REQUEST')
        try {
            const data = await this.$axios.$get(`http://localhost/api/users`, {params: payload.data})
            await commit('GET_FILTER_SUCCESS', {key: payload.data.column_name, filter:data.userLists})
        } catch (error) {
            if(error.response.status===422){  
                let errList = ``;
                let fields = Object.keys(error.response.data.errors)
                fields.forEach((field) => {
                let errorArr = error.response.data.errors[field]
                errorArr.forEach((errMess) => {
                    errList += `<li>${errMess}</li>`
                })
            })
                let errMessage = `Validation Error: ${errList}`
                await commit('alert/ERROR', errMessage, { root: true })
            }else{
                let errMessage = `Something went wrong while performing your request. Please contact administrator`
                await commit('alert/ERROR', errMessage, { root: true })
            }
            // commit('GET_DATA_FAILED', error)
        }
    },

    async setUuid({state, commit, dispatch}, uuid){
        // console.log(uuid)
        await commit('SET_USER_UUID', uuid)
    },

    async getRoles({state, commit}){
        let keycloakApi = `${process.env.KEYCLOAK_REST_API}${process.env.KEYCLOAK_REALM}/users/${state.uuid}/groups`
        try {
            const res = await this.$axios.$get(keycloakApi, {headers: {
                'Authorization' : this.$auth.strategy.token.get(),
                'Content-Type' : 'application/json',
            }})
            commit('SET_ROLES', res) 
        } catch (error) {
            console.log(error)
        }
    },


}

export const mutations = {
    SET_SEARCH (state, search){
        state.search = search
    },

    SET_USER_LISTS(state, userLists) {
        state.userLists = userLists
    },

    GET_USER_UUID(state, uuid){
        state.uuid = uuid
    },

    SET_USER_FIRSTNAME(state, firstname){
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

    SET_USER_UUID(state, uuid){
        state.uuid = uuid
    },

    SET_USER_ROLES(state, roles){
        state.roles = roles
    },

    SET_ROLES(state, roles){
        state.roles = roles
    },

    SET_KC_USER_LIST(state, list){
        state.kcUserList = list
    },
    
    UPDATE_FILTER_VALUES(state, data) {
        state.filterValues = data
    },

    GET_FILTER_SUCCESS (state, data) {
        Vue.set(state.filters, data.key, data.filter)
        // state.loading = false
    },
}