<template>
    <div>
      <nav
      class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
      <!-- START HEADER -->
      <div class="flex items-center">
        <button class="mr-2" aria-label="Open Menu" @click="drawer">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div class="m-auto md:mx-4">
          <img src="@/assets/images/uplb-official-logo.png" class="h-12 w-auto" alt="UPLB Logo" />
        </div>
        <div class="">
          <h1 class="font-semibold text-xl hidden md:flex items-center w-64">
            IAMS ADMIN
          </h1>
        </div>
      </div>
      <!-- END HEADER -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0">
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity">
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-0"
            tabindex="0"></div>
        </div>
      </transition>
      <aside
        class="transform top-16 left-0 w-64 bg-white fixed h-full shadow-md overflow-auto ease-in-out transition-all duration-300 z-10"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <!-- DASHBOARD -->
        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b">
          <div class="flex text-black">
            <div class="m-auto px-3">
            </div>
  
            <div class="inline-block w-2/3 justify-center">
              <img :src="this.$auth.user.picture" :alt="this.$auth.user.name" class="w-100 h-100 rounded-full">
              <p class="font-bold text-lg">{{ this.$auth.user.name }}</p>
              <p class="text-sm">{{ this.$auth.user.email }}</p>
            </div>
          </div>
        </span>
        <!-- DASHBOARD LINK -->
        <span
          class="flex items-center p-4 hover:bg-gray-300 hover:text-red-700"
          ><span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6">
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </span>
          <a href="/">Dashboard</a></span>
          <!-- END DASHBOARD LINK -->
          <!-- USER MANAGEMENT-->  
          <span v-show="isAdmin"
        @click="isUserManagementOpen = !isUserManagementOpen"
        
        class="flex items-center p-4 hover:bg-gray-300 hover:text-red-700"
        >
        <span class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </span>
        <span>User Management</span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="w-3 h-3 ml-auto transform"
          :class="isOpen ? 'rotate-0' : '-rotate-90'"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
       
      </span>
       <ul id="dropdown-student" class="py-2 space-y-2" v-show="isUserManagementOpen">
          <li class="flex items-center p-2 pl-11 w-full text-base font-normal hover:bg-gray-300 hover:text-red-700">
            <!-- <a href="">Create User</a> -->
            <nuxt-link to="/user-management/create-user">Create User</nuxt-link>
          </li>
          <li class="flex items-center p-2 pl-11 w-full text-base font-normal hover:bg-gray-300 hover:text-red-700">
            <a href="/user-management/view-users">Users</a>
          </li>
        </ul>    
          <!-- END USER MANAGEMENT-->      
        
        <hr class="py-2">
        <!-- LOGOUT -->
        <span class="flex-1 ml-3 whitespace-nowrap">
          <button 
            @click.prevent="logout()" 
            class="
              w-56 
              text-white 
              bg-red-700 
              hover:bg-red-600 
              font-medium 
              rounded-lg 
              text-sm 
              px-5 
              py-2.5 
              text-center 
              mr-3 mb-3">
            Logout
          </button>
        </span>
          
  
      </aside>
      <div class="relative w-32 items-right text-right ml-auto pr-32">
        <QuickLinks/>
      </div>
      <Alert/>
    </nav>
    <Unauthorized401 v-show="!isAdmin"/>
    </div>
  </template>
  
  <script>
  import Alert from './Alert.vue';
  import QuickLinks from './QuickLinks.vue'
  import Unauthorized401 from './Errors/401.vue'
  export default {
      components: { Alert, QuickLinks, Unauthorized401 },
      name: 'Navbar',
      data() {
        return {
            isOpen: false,
            isUserManagementOpen: false,
            error: null,
        }
      },
      computed: {
        isAdmin() {
          if(this.$auth.user.resource_access['uplb-iams']){
                const roles = this.$auth.user.resource_access['uplb-iams'].roles;
                return roles.find(el => el === "admin") ? true : false;
            } else {
                return false
            }
        },
      },
      methods: {
          drawer() {
              this.isOpen = !this.isOpen;
          },
          async logout() {
            try {
              const response = await this.$auth.logout("keycloak");
              // eslint-ignore-next-line
              console.log(response);
            } catch (err) {
              // eslint-ignore-next-line
              console.log(err);
            }
          },
      },
      watch: {
          isOpen: {
              immediate: true,
              handler(isOpen) {
                  if (process.client) {
                      if (isOpen)
                          document.body.style.setProperty("overflow", "hidden");
                      else
                          document.body.style.removeProperty("overflow");
                  }
              },
          },
      },
      mounted() {
          document.addEventListener("keydown", (e) => {
              if (e.keyCode == 27 && this.isOpen)
                  this.isOpen = false;
          });
          // this.isAdmin();
      },
  }
  </script>