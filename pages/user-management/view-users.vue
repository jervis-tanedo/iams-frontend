<template>
    <div class="relative">
        <div class="block px-64 py-20 overflow-auto">
            <div class="card h-screen">
                <div class="card-header bg-white rounded p-2 m-1 h-screen">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="form-group mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                            Search
                            </label>
                            <input 
                            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            v-model="search"
                            type="text"
                            >
                        </div>
                    </div>
                    <div class="">
                        <table class="min-w-full text-left text-md font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">First Name</th>
                                    <th scope="col" class="px-6 py-4">Middle Name</th>
                                    <th scope="col" class="px-6 py-4">Last Name</th>
                                    <th scope="col" class="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in userLists" :key="user.id" class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4">{{ user.first_name }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ user.middle_name }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ user.last_name }}</td>
                                    <td class="whitespace-nowrap px-6 py-4"><button class="bg-green-500 text-white p-2 rounded" @click="openDrawer(user)">View</button></td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <GenericDrawer :isOpen="showDrawer">
                <template v-slot:content>
                    <div class="relative overflow-x-hidden items-top justify-center min-h-screen h-full bg-gray-100 pt-10">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <UserView 
                        ref="userViewComponent"
                        :userData="drawerData">
                            
                        </UserView>
                    </div>
                    </div>
                </template>
            </GenericDrawer>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
import UserView from '@/components/UserManagement/UserView.vue'
export default {
    layout: 'default',
    components: { UserView },
    data() {
        return {
            showDrawer: false,
            uuid: null,
            drawerData: {},
        }
    },
    computed: {
        ...mapState({
            search: state => state.userManagement.viewUsers.search,
            filter: state => state.filter.filterValues,
            userLists: state => state.userManagement.viewUsers.userLists
        }),
        
        ...mapGetters({
            getSearch: "userManagement/viewUsers/getSearch",
            getUserLists: "userManagement/viewUsers/getUserLists",
        }),

        search: {
            get() {
                return this.getSearch
            },
            set(value){
                this.setSearch(value)
            }
        },
        userLists: {
            get() {
                return this.getUserLists
            },
            set(value) {
                this.setSearch(value)
            }
        },
    },
    methods: {
        ...mapActions({
            userList: 'userManagement/viewUsers/userList',
            // userList: 'userManagement/viewUsers/userList',
        }),
        ...mapMutations({
            setUserLists: 'userManagement/viewUsers/SET_USER_LISTS',
            setSearch: 'userManagement/viewUsers/SET_SEARCH'
        }),

        openDrawer(user) {
            this.$refs.userViewComponent.getUserUuid(user)
            this.showDrawer = !this.showDrawer
            console.log(user)
            this.drawerData = user
        },
    },
    mounted() {
        this.userList()
    }
}
</script>