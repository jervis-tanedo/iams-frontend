<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-12">
                <div class="grid grid-cols-3 gap-4">
                        <div class="mb-4">
                            <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="role">
                            Role
                            </label>
                            <select tabindex="1" v-model="role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                <option disabled selected>Please select...</option>
                                <option value="student-amis">AMIS - Student</option>
                                <option value="faculty-amis">AMIS - Faculty</option>
                                <option value="admin-iams">IAMS - Admin</option>
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
                                id="presentRegion"
                                tabindex="10"
                                @change="handlePresentProvince" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select Region</option>
                                    <option v-for="region in presentRegions" :value="region.region_code" :key="region.region_code">{{
                                        region.region_name
                                        }}
                                    </option>
                                </select>
                                <div v-if="errors.region">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleCity">
                                Province
                                </label>
                                <select 
                                id="presentProvince"
                                tabindex="11"
                                @change="handlePresentCity" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select Province</option>
                                    <option v-for="province in presentProvinces" :value="province.province_code" :key="province.province_code">
                                        {{ province.province_name }}
                                    </option>
                                </select>
                                <div v-if="errors.province">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleBarangay">
                                City
                                </label>
                                <select 
                                id="presentCity"
                                tabindex="12"
                                @change="handlePresentBarangay" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select City</option>
                                    <option v-for="city in presentCities" :value="city.city_code" :key="city.city_code">{{ city.city_name }}</option>
                                </select>
                                <div v-if="errors.city">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="barangaysChange">
                                Barangay
                                </label>
                                <select 
                                id="presentBarangay"
                                tabindex="13"
                                @change="barangaysPresentChange" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select Barangay</option>
                                    <option v-for="barangay in presentBarangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{
                                        barangay.brgy_name
                                        }}
                                    </option>
                                </select>
                                <div v-if="errors.barangay">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                            <div class="form-group mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="house">
                                House/Lot #/Village or Subdivision
                                </label>
                                <input 
                                id="presentHouse"
                                tabindex="14"
                                class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                                v-model="presentHouse"
                                type="text"
                                >
                                <div v-if="errors.house">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                        </div>
                        <div>
                            <span class="block text-gray-700 text-xl font-bold mb-2">Permanent Address</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="isChecked" @click="fillSameAddress">
                            <label for="isChecked">Same as Present Address</label>
                        </div>
                        <div class="grid grid-cols-3 gap-4" v-show="isNotDisabled">
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handlePermanentProvince">
                                Region
                                </label>
                                <select 
                                id="permanentRegion"
                                tabindex="10"
                                @change="handlePermanentProvince" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select Region</option>
                                    <option v-for="region in permanentRegions" :value="region.region_code" :key="region.region_code">{{
                                        region.region_name
                                        }}
                                    </option>
                                </select>
                                <div v-if="errors.region">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleCity">
                                Province
                                </label>
                                <select 
                                id="permanentProvince"
                                tabindex="11"
                                @change="handlePermanentCity" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select Province</option>
                                    <option v-for="province in permanentProvinces" :value="province.province_code" :key="province.province_code">
                                        {{ province.province_name }}
                                    </option>
                                </select>
                                <div v-if="errors.province">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="handleBarangay">
                                City
                                </label>
                                <select 
                                id="permanentCity"
                                tabindex="12"
                                @change="handlePermanentBarangay" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select City</option>
                                    <option v-for="city in permanentCities" :value="city.city_code" :key="city.city_code">{{ city.city_name }}</option>
                                </select>
                                <div v-if="errors.city">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4" v-show="isNotDisabled">
                            <div class="form-group mb-4">
                                <label class="form-control block text-gray-700 text-sm font-bold mb-2" for="barangaysChange">
                                Barangay
                                </label>
                                <select 
                                id="permanentBarangay"
                                tabindex="13"
                                @change="barangaysPermanentChange" 
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline">
                                    <option disabled selected>Select Barangay</option>
                                    <option v-for="barangay in permanentBarangays" :value="barangay.brgy_code" :key="barangay.brgy_code">{{
                                        barangay.brgy_name
                                        }}
                                    </option>
                                </select>
                                <div v-if="errors.barangay">
                                    <span class="text-red-500">Required</span>
                                </div> 
                            </div>
                            <div class="form-group mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="house">
                                House/Lot #/Village or Subdivision
                                </label>
                                <input 
                                id="permanentHouse"
                                tabindex="14"
                                class="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline" 
                                v-model="permanentHouse"
                                type="text"
                                >
                                <div v-if="errors.house">
                                    <span class="text-red-500">Required</span>
                            </div> 
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
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';
import { regions, provinces, cities, barangays } from "select-philippines-address";

export default {
    layout: 'default',
    data() {
        return {
            errors: {
                firstname: false,
                middlename: false,
                lastname: false,
                birthdate: '',
                phone: null,
                civilStatus: null,
                region: null,
                province: null,
                city: null,
                barangay: null,
                house: null,
                sex: null,
                email: null,
                uuid: null,
                token: null,
                idNumber: null,
                idType: null,
            },
            regions: [],
            provinces: [],
            cities: [],
            barangays: [],
            isNotDisabled: true,
            presentRegions: [],
            presentProvinces: [],
            presentCities: [],
            presentBarangays: [],
            permanentRegions: [],
            permanentProvinces: [],
            permanentCities: [],
            permanentBarangays: [],
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
            getPresentRegion: "userManagement/createUser/getPresentRegion",
            getPresentProvince: "userManagement/createUser/getPresentProvince",
            getPresentCity: "userManagement/createUser/getPresentCity",
            getPresentBarangay: "userManagement/createUser/getPresentBarangay",
            getPresentHouse: "userManagement/createUser/getPresentHouse",
            getPermRegion: "userManagement/createUser/getPermanentRegion",
            getPermProvince: "userManagement/createUser/getPermanentProvince",
            getPermCity: "userManagement/createUser/getPermanentCity",
            getPermBarangay: "userManagement/createUser/getPermanentBarangay",
            getPermHouse: "userManagement/createUser/getPermanentHouse",
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
        presentRegion :{
            get() {
                return this.getPresentRegion
            },
            set(value){
                this.setPresentRegion(value)
            }
        },
        presentProvince :{
            get() {
                return this.getPresentProvince
            },
            set(value){
                this.setPresentProvince(value)
            }
        },
        presentCity :{
            get() {
                return this.getPresentCity
            },
            set(value){
                this.setPresentCity(value)
            }
        },
        presentBarangay :{
            get() {
                return this.getPresentBarangay
            },
            set(value){
                this.setPresentBarangay(value)
            }
        },
        presentHouse :{
            get() {
                return this.getPresentHouse
            },
            set(value){
                this.setPresentHouse(value)
            }
        },
        permanentRegion :{
            get() {
                return this.getPermRegion
            },
            set(value){
                this.setPermRegion(value)
            }
        },
        permanentProvince :{
            get() {
                return this.getPermProvince
            },
            set(value){
                this.setPermProvince(value)
            }
        },
        permanentCity :{
            get() {
                return this.getPermCity
            },
            set(value){
                this.setPermCity(value)
            }
        },
        permanentBarangay :{
            get() {
                return this.getPermBarangay
            },
            set(value){
                this.setPermBarangay(value)
            }
        },
        permanentHouse :{
            get() {
                return this.getPermHouse
            },
            set(value){
                this.setPermHouse(value)
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
            setPresentRegion: 'userManagement/createUser/SET_USER_PRESENT_REGION',
            setPresentProvince: 'userManagement/createUser/SET_USER_PRESENT_PROVINCE',
            setPresentCity: 'userManagement/createUser/SET_USER_PRESENT_CITY',
            setPresentBarangay: 'userManagement/createUser/SET_USER_PRESENT_BARANGAY',
            setPresentHouse: 'userManagement/createUser/SET_USER_PRESENT_HOUSE',
            setPermRegion: 'userManagement/createUser/SET_USER_PERMANENT_REGION',
            setPermProvince: 'userManagement/createUser/SET_USER_PERMANENT_PROVINCE',
            setPermCity: 'userManagement/createUser/SET_USER_PERMANENT_CITY',
            setPermBarangay: 'userManagement/createUser/SET_USER_PERMANENT_BARANGAY',
            setPermHouse: 'userManagement/createUser/SET_USER_PERMANENT_HOUSE',
            setSex: 'userManagement/createUser/SET_USER_SEX',
            setEmail: 'userManagement/createUser/SET_USER_EMAIL',
            setToken: 'userManagement/createUser/SET_USER_TOKEN',
            setRole: 'userManagement/createUser/SET_CLIENT_ROLE',
        }),
        handlePresentProvince(e) {
            this.presentRegion = e.target.selectedOptions[0].text;
            provinces(e.target.value).then(response => {
                this.presentProvinces = response;
            });
        },

        handlePresentCity(e) {
            this.presentProvince = e.target.selectedOptions[0].text;
            cities(e.target.value).then(response => {
                this.presentCities = response;
            });
        },

        handlePresentBarangay(e) {
            this.presentCity = e.target.selectedOptions[0].text;
            barangays(e.target.value).then(response => {
                this.presentBarangays = response;
            });
        },

        barangaysPresentChange(e) {
            this.presentBarangay = e.target.selectedOptions[0].text;
        },

        handlePermanentProvince(e) {
            this.permanentRegion = e.target.selectedOptions[0].text;
            provinces(e.target.value).then(response => {
                this.permanentProvinces = response;
            });
        },

        handlePermanentCity(e) {
            this.permanentProvince = e.target.selectedOptions[0].text;
            cities(e.target.value).then(response => {
                this.permanentCities = response;
            });
        },

        handlePermanentBarangay(e) {
            this.permanentCity = e.target.selectedOptions[0].text;
            barangays(e.target.value).then(response => {
                this.permanentBarangays = response;
            });
        },

        barangaysPermanentChange(e) {
            this.permanentBarangay = e.target.selectedOptions[0].text;
        },

        fillSameAddress(){
            let checkbox = document.getElementById('isChecked')
            if (checkbox.checked == true){
                this.isNotDisabled = false
                this.permanentRegion = this.presentRegion
                this.permanentProvince = this.presentProvince
                this.permanentCity = this.presentCity
                this.permanentBarangay = this.presentBarangay
                this.permanentHouse = this.presentHouse
            } else {
                this.isNotDisabled = true
                // this.presentRegion = null
                // this.presentProvince = null
                // this.presentCity = null
                // this.presentBarangay = null
                // this.presentHouse = null
                this.permanentRegion = null
                this.permanentProvince = null
                this.permanentCity = null
                this.permanentBarangay = null
                this.permanentHouse = null
            }
        },

        save(){
            this.detectExistingUser()
        }
    },
    created() {
        regions().then(response => {
        this.presentRegions = response;
        this.permanentRegions = response;
        console.log(response)
        });
    },
}
</script>