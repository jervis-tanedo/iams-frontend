<template>
    <div class="relative">
        <div class="block px-64 py-20 overflow-auto">
            <div class="card h-screen">
                <div class="card-header bg-white rounded p-2 m-1 h-screen">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="role">
                            Role
                            </label>
                            <select tabindex="1" v-model="role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option disabled selected>Please select...</option>
                                <option value="amis-student">AMIS - Student</option>
                                <option value="amis-faculty">AMIS - Faculty</option>
                                <option value="iams-admin">IAMS - Admin</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="form-group mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                            First Name
                            </label>
                            <input 
                            tabindex="2"
                            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="firstname"
                            type="text"
                            >
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                            Middle Name
                            </label>
                            <input 
                            tabindex="3"
                            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="middlename"
                            type="text"
                            >
                        </div>
                        <div class="mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="lastname">
                            Last Name
                            </label>
                            <input 
                            tabindex="4"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="lastname"
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
                            tabindex="5"
                            class="datepicker shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="birthdate"
                            type="date"
                            >
                        </div>
                        <div class="mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="phone">
                            Phone Number
                            </label>
                            <input 
                            tabindex="6"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="phone"
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
                            tabindex="7"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="email"
                            type="email"
                            >
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        
                        <div class="mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="sex">
                            Sex
                            </label>
                            <select 
                            tabindex="8"
                            v-model="sex" 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="civilStatus">
                            Civil Status
                            </label>
                            <select 
                            tabindex="9"
                            v-model="civilStatus" 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
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
                            <select 
                            tabindex="10"
                            @change="handleProvince" 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option disabled selected>Select Region</option>
                                <option v-for="region in regions" :value="region.region_code" :key="region.region_code">{{
                                    region.region_name
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleCity">
                            Province
                            </label>
                            <select 
                            tabindex="11"
                            @change="handleCity" 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option disabled selected>Select Province</option>
                                <option v-for="province in provinces" :value="province.province_code" :key="province.province_code">
                                    {{ province.province_name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleBarangay">
                            City
                            </label>
                            <select 
                            tabindex="12"
                            @change="handleBarangay" 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option disabled selected>Select City</option>
                                <option v-for="city in cities" :value="city.city_code" :key="city.city_code">{{ city.city_name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="form-group mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="barangaysChange">
                            Barangay
                            </label>
                            <select 
                            tabindex="13"
                            @change="barangaysChange" 
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option disabled selected>Select Barangay</option>
                                <option v-for="barangay in barangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{
                                    barangay.brgy_name
                                    }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="house">
                            House/Lot #/Village or Subdivision
                            </label>
                            <input 
                            tabindex="14"
                            class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                            v-model="house"
                            type="text"
                            >
                        </div>
                    </div>
                    <div class="form-group mb-4">
                        <button 
                        tabindex="15"
                        class="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                        @click.prevent="save()">Save</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
        
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
import { regions, provinces, cities, barangays } from "select-philippines-address";

export default {
    layout: 'default',
    data() {
        return {
            regions: [],
            provinces: [],
            cities: [],
            barangays: [],
        }
    },
    computed: {
        ...mapState({
            createUser: state => state.userManagement.createUser.userDetails,
            filter: state => state.userManagement.createUser.filters
        }),

        ...mapGetters({
            getFirstname: "userManagement/createUser/getFirstname",
            getLastname: "userManagement/createUser/getLastname",
            getMiddlename: "userManagement/createUser/getMiddlename",
            getBirthdate: "userManagement/createUser/getBirthdate",
            getPhone: "userManagement/createUser/getPhone",
            getCivilStatus: "userManagement/createUser/getCivilStatus",
            getRegion: "userManagement/createUser/getRegion",
            getProvince: "userManagement/createUser/getProvince",
            getCity: "userManagement/createUser/getCity",
            getBarangay: "userManagement/createUser/getBarangay",
            getHouse: "userManagement/createUser/getHouse",
            getSex: "userManagement/createUser/getSex",
            getEmail: "userManagement/createUser/getEmail",
            getToken: "userManagement/createUser/getToken",
            getRole: "userManagement/createUser/getRole",
        }),

        firstname :{
            get() {
                return this.getFirstname
            },
            set(value){
                this.setFirstname(value)
            }
        },
        lastname :{
            get() {
                return this.getLastname
            },
            set(value){
                this.setLastname(value)
            }
        },
        middlename :{
            get() {
                return this.getMiddlename
            },
            set(value){
                this.setMiddlename(value)
            }
        },
        birthdate :{
            get() {
                return this.getBirthdate
            },
            set(value){
                this.setBirthdate(value)
            }
        },
        phone :{
            get() {
                return this.getPhone
            },
            set(value){
                this.setPhone(value)
            }
        },
        civilStatus :{
            get() {
                return this.getCivilStatus
            },
            set(value){
                this.setCivilStatus(value)
            }
        },
        region :{
            get() {
                return this.getRegion
            },
            set(value){
                this.setRegion(value)
            }
        },
        province :{
            get() {
                return this.getProvince
            },
            set(value){
                this.setProvince(value)
            }
        },
        city :{
            get() {
                return this.getCity
            },
            set(value){
                this.setCity(value)
            }
        },
        barangay :{
            get() {
                return this.getBarangay
            },
            set(value){
                this.setBarangay(value)
            }
        },
        house :{
            get() {
                return this.getHouse
            },
            set(value){
                this.setHouse(value)
            }
        },
        sex :{
            get() {
                return this.getSex
            },
            set(value){
                this.setSex(value)
            }
        },
        email :{
            get() {
                return this.getEmail
            },
            set(value){
                this.setEmail(value)
            }
        },
        token: {
            get(){
                return this.getToken
            },
            set(value){
                this.setToken(value)
            }
        },
        role: {
            get(){
                return this.getRole
            },
            set(value){
                this.setRole(value)
            }
        },

    },
    methods: {
        ...mapActions({
            addUser: 'userManagement/createUser/addUser',
            setDetails: 'userManagement/createUser/setDetails',
            getUserUuid: 'userManagement/createUser/getUserUuid',
            toMasterData: 'userManagement/createUser/toMasterData',
            getMasterDataUser: 'userManagement/createUser/getMasterDataUser',
            detectExistingUser: 'userManagement/createUser/detectUser',
        }),
        ...mapMutations({
            setFirstname: 'userManagement/createUser/SET_USER_FIRSTNAME',
            setLastname: 'userManagement/createUser/SET_USER_LASTNAME',
            setMiddlename: 'userManagement/createUser/SET_USER_MIDDLENAME',
            setBirthdate: 'userManagement/createUser/SET_USER_BIRTHDATE',
            setPhone: 'userManagement/createUser/SET_USER_PHONE',
            setCivilStatus: 'userManagement/createUser/SET_USER_CIVIL_STATUS',
            setRegion: 'userManagement/createUser/SET_USER_REGION',
            setProvince: 'userManagement/createUser/SET_USER_PROVINCE',
            setCity: 'userManagement/createUser/SET_USER_CITY',
            setBarangay: 'userManagement/createUser/SET_USER_BARANGAY',
            setHouse: 'userManagement/createUser/SET_USER_HOUSE',
            setSex: 'userManagement/createUser/SET_USER_SEX',
            setEmail: 'userManagement/createUser/SET_USER_EMAIL',
            setToken: 'userManagement/createUser/SET_USER_TOKEN',
            setRole: 'userManagement/createUser/SET_CLIENT_ROLE',
        }),
        handleProvince(e) {
        this.region = e.target.selectedOptions[0].text;
        provinces(e.target.value).then(response => {
            this.provinces = response;
        });
        },
        handleCity(e) {
        this.province = e.target.selectedOptions[0].text;
        cities(e.target.value).then(response => {
            this.cities = response;
        });
        },
        handleBarangay(e) {
        this.city = e.target.selectedOptions[0].text;
        barangays(e.target.value).then(response => {
            this.barangays = response;
        });
        },
        barangaysChange(e) {
        this.barangay = e.target.selectedOptions[0].text;
        },    
        save(){
            this.detectExistingUser()
            // await this.getMasterDataUser()
            // this.addUser()
            // this.getUserUuid()
            // this.toMasterData()
        }
    },
    created() {
        regions().then(response => {
        this.regions = response;
        });
    },
}
</script>