<template>
        <div>
            <div>
                <h1>First Name:</h1>
                <h1>{{ userData.first_name }}</h1>
            </div>
            <div>
                <h1>Middle Name:</h1>
                <h3>{{ userData.middle_name }}</h3>
            </div>
            <div>
                <h1>Last Name:</h1>
                <h3>{{ userData.last_name }}</h3>
            </div>
        </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
    export default{
        props: {
            id: {
                type: String,
            },
            userData: {
                type: Object
            }
        },
        computed: {
            ...mapState({
                userDetails: state => state.userManagement.viewUsers.userDetails,
                userRole: state => state.userManagement.viewUsers.roles
            }),

        },
        methods: {
            ...mapActions({
                setUuid: 'userManagement/viewUsers/setUuid',
                getRoles: 'userManagement/viewUsers/getRoles'
            }),

            ...mapMutations({
                setUserUuid: 'userManagement/viewUsers/SET_USER_UUID',
                setFirstname: 'userManagement/viewUsers/SET_USER_FIRSTNAME',
                setUserDetails: 'userManagement/viewUsers/SET_USER_DETAILS',
            }),

            async getUserUuid(user){
                await this.setUuid(user.id)
                await this.getRoles()
            }
        },
    }
</script>