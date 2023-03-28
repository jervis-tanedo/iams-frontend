<template>
    <div class="w-full p-4">
    <main role="main" class="w-full flex flex-col h-screen content-center justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
            <div class="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="py-2 place-content-center">
                  <h3>Login to UPLB IAMs</h3>
                  <p class="mt-3 text-gray-600">
                    Welcome to Identity and Access Management System (IAMs).
                  </p>
                  <p></p>
                </div>
                <div class="py-2"><button @click.prevent="login()" class="w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Login</button></div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    layout: 'noLayout',
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