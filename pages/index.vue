<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Hello, {{ this.$auth.user.given_name }}!
        </h2>
        <p class="mt-3 text-gray-600">
          Welcome to the new Identity and Access Management System of UPLB! 
          Please be informed that this system is still under continuous development. 
          So if you encounter any problems, errors, or bugs please send us an email at dx.uplb@up.edu.ph to alert us about its existence. 
          The following are the modules that are currently working:
        </p>
        <p class="mt-3 text-gray-600">
          <ol class="ml-8">
            <li class="list-disc">
              LDAPS
            </li>
            <li class="list-disc">
              Facebook Integration
            </li>
          </ol>
        </p>
        <p class="mt-3 text-gray-600">
          This system is currently being co-created with the UPLB ITC.
          <button @click="test">TEST</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import axios from 'axios';
export default {
  name: 'IndexPage',
  data() {
    return {
      token: this.$auth.strategy.token.get()
    }
  },
  methods:{
    async test(){
      try{
        let params = {
            "firstName": "Jervis",
            "lastName": "Tanedo",
            "middleName": "Basto",
            "birthdate": "march 17 1992"
        }
        const res = await axios.post('http://localhost/api/test', params, {headers:{
          'Authorization' : this.$auth.strategy.token.get(),
          'Content-Type' : 'application/json',
        }})
        console.log(res)
      } catch(e){
        console.log(e)
      }
    }
  },
}
</script>
