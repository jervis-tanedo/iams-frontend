<template>
  <div class="relative">
        <div class="block px-64 py-20 overflow-auto">
            <div class="card h-screen">
                <div class="card-header bg-white rounded p-2 m-1 border-b-4 h-5/6">
                    <div class="justify-center">
                        <p>Hello {{this.$auth.user.name}}, and welcome to IAMs ADMIN!!! </p>
                    </div>
                    <div>
                        <p>Test paragraph</p>
                    </div>                     
                    <!-- {{keycloakUser}} -->
                </div>
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
  }
}
</script>
