<template>
        <!-- <div class="relative">
            <div class="block px-64 py-20 overflow-auto">
                <div class="card h-screen">
                    <div class="card-header bg-white rounded p-2 m-1 h-screen">
                        
                        <div class="grid grid-cols-3 gap-4">
                            <div class="form-group mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                                    First Name
                                </label>
                                <input 
                                class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                :placeholder="userData.first_name"
                                type="text"
                                >
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                                Middle Name
                                </label>
                                <input 
                                class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                :placeholder="userData.middle_name"
                                type="text"
                                >
                            </div>
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="lastname">
                                Last Name
                                </label>
                                <input 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                :placeholder="userData.last_name"
                                type="text"
                                >
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="birthdate">
                                Birthdate
                                </label>
                                <input 
                                class="datepicker shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                :placeholder="userData.date_of_birth"
                                type="date"
                                :value="userData.date_of_birth"
                                >
                            </div>
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="phone">
                                Phone Number
                                </label>
                                <input 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                
                                type="tel"
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                                >
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="phone">
                                Email
                                </label>
                                <input 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                
                                type="email"
                                >
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="sex">
                                Sex
                                </label>
                                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="civilStatus">
                                Civil Status
                                </label>
                                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="widow">Widow</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h1 class="form-control block text-gray-700 text-m font-bold mb-2">Address</h1>
                        </div>
                        <hr>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="regions">
                                Region
                                </label>
                                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option disabled selected>Select Region</option>
                                    <option >
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleCity">
                                Province
                                </label>
                                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option disabled selected>Select Province</option>
                                    <option>
                                        
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleBarangay">
                                City
                                </label>
                                <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option disabled selected>Select City</option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="barangaysChange">
                                Barangay
                                </label>
                                <select  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option disabled selected>Select Barangay</option>
                                    <option ></option>
                                </select>
                            </div>
                            <div class="form-group mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="house">
                                House/Lot #/Village or Subdivision
                                </label>
                                <input 
                                class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                
                                type="text"
                                >
                            </div>
                            <div class="mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="role">
                                Role
                                </label>
                                <ul v-for="role in userRole" :key="role.id" name="role">
                                    <li>{{ role.name }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            
                        </div>
                        <div class="form-group mb-4">
                            <button class="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Save</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div> -->
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