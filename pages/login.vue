<template>
    <div class="font-sans text-gray-900 antialiased">
    <div class="h-screen grid justify-items-center items-center">
      <div
        class="w-auto md:w-1/2 lg:w-1/3 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center -mt-16">
          <img src="@/assets/images/uplb-logo.png" class="object-center" />
        </div>
        <div class="mt-5">
          <h2 class="text-gray-800 text-3xl font-semibold text-center">
            Welcome to the UPLB Identity and Access Management System
          </h2>
          <p class="mt-5 text-gray-600 text-center">
            This app is currently in alpha phase.
          </p>
        </div>
        <div class="flex justify-center mt-4">
          <button class="text-white py-2 px-4" style="background-color:#8D1436"
            @click="login">
            Login
          </button>
        </div>
        <div v-if="this.error" class="flex justify-center mt-4">
          <div class="items-center justify-center align-middle font-bold text-xl text-yellow-400">
            <div v-if="this.error == 'not_found'">
              Please use your UP Mail
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    layout: 'noLayout',
    data() {
        return {
        error: this.$route.query.error ? this.$route.query.error : null,
        };
    },
    methods: {
        async login() {
            try {
                const response = await this.$auth.loginWith("keycloak")
                .then(() => {this.$router.push('/')})
                .catch(error => {console.log(error)});
                // eslint-ignore-next-line
                console.log(response);
            } catch (err) {
                // eslint-ignore-next-line
                console.log(err);
            }
            },
        }
}
</script>