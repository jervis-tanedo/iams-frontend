export const state = () => ({
    search: null,
    userLists: {},
    uuid: null,
    roles: [],
    userDetails: {
        // firstname: '',
        // lastname: '',
        // middlename: '',
        // birthdate: '',
        // phone: '',
        // civilStatus: '',
        // regions: [],
        // provinces: [],
        // cities: [],
        // barangays: [],
        // region: null,
        // province: null,
        // city: null,
        // barangay: null,
        // house: null,
        // sex: '',
        // email: '',
        // role: [],
    }
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
    async userList ({state, commit}) {
        let keycloakApi = `http://localhost/api/users`
        try {
            const res = await this.$axios.$get(keycloakApi)
            .then(response => {
                // console.log(response)
                console.table(response.userLists)
                const users = response.userLists
                const myArr = Object.values(users)
                // console.log(myArr)
                commit('SET_USER_LISTS', myArr)
                // console.log(state.userLists)
            })
        } catch(error) {

        }
    },
    async setUuid({state, commit, dispatch}, uuid){
        console.log(uuid)
        await commit('SET_USER_UUID', uuid)
        // await dispatch('getRoles')
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
    }
}