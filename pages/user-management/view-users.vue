<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
                <div class="grid grid-cols-3 gap-4">
                        <div class="form-group mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="search">
                            Search
                            </label>
                            <input 
                            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            v-model="search"
                            type="text"
                            >
                            <Filters :filter_headers="filters" :filters="filter" @applyFilter="applyFilter"/>
                        </div>
                    </div>
                    <div class="">
                        <table v-show="userLists.data" class="min-w-full text-left text-md font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">First Name</th>
                                    <th scope="col" class="px-6 py-4">Middle Name</th>
                                    <th scope="col" class="px-6 py-4">Last Name</th>
                                    <th scope="col" class="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in userLists.data" :key="user.id" class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4">{{ user.firstName }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ user.middleName }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ user.lastName }}</td>
                                    <td class="whitespace-nowrap px-6 py-4"><button class="bg-green-500 text-white p-2 rounded" @click="openDrawer(user)">View</button></td>
                                </tr>
                            </tbody>  
                        </table>
                        <vs-pagination :total-pages="totalPages" :current-page="currentPage" @change="changePage"></vs-pagination>
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
import UserView from '@/components/UserManagement/UserView.vue';
export default {
    layout: 'default',
    components: { UserView },
    data() {
        return {
            showDrawer: false,
            uuid: null,
            drawerData: {},
            filters: [ //field -> db field/column; name -> name of key returned; type -> what type of filter; label -> label to be used
                {field: 'first_name', name: 'first_name', type: 'input', label: 'First Name'},
                {field: 'last_name', name: 'last_name', type: 'input', label: 'Last Name'},
            ],
        }
    },
    computed: {
        ...mapState({
            search: state => state.userManagement.viewUsers.search,
            filter: state => state.userManagement.viewUsers.filters,
            userLists: state => state.userManagement.viewUsers.userLists,
            kcUserLists: state => state.userManagement.viewUsers.kcUserList,
            totalPages: state => state.userManagement.viewUsers.userLists.last_page,
            currentPage: state => state.userManagement.viewUsers.userLists.current_page,
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
    async fetch(){
        this.getUserList(1)
        await this.updateFilterValues({})
        await this.filters.forEach(filter => { 
        this.getFilters({
            data: {
            column_name: filter.field,
            distinct: 'true',
            }
        })
        });
    },
    methods: {
        ...mapActions({
            userList: 'userManagement/viewUsers/userList',
            kcUserList: 'userManagement/viewUsers/kcUserList',
            getFilters: 'userManagement/viewUsers/getFilters',
        }),
        ...mapMutations({
            setUserLists: 'userManagement/viewUsers/SET_USER_LISTS',
            setSearch: 'userManagement/viewUsers/SET_SEARCH',
            updateFilterValues: 'userManagement/viewUsers/UPDATE_FILTER_VALUES',
        }),

        openDrawer(user) {
            this.$refs.userViewComponent.getUserUuid(user)
            this.showDrawer = !this.showDrawer
            console.log(user)
            this.drawerData = user
        },

        changePage(page) {
            this.getUserList(page)
        },

        getUserList(page){
            this.userList({
                data: {
                    page: page
                }
            })
        },

        applyFilter(data) { // apply the filter from the filters component
            console.log(data)
            this.updateFilterValues(data)
            this.getUserList(1)
        },
    },
    watch:{
        update(newVal, oldVal){
            this.changePage(1)
        }
    },
    mounted() {
        this.userList()
        // this.kcUserList()
    }
}
</script>