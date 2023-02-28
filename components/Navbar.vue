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
          <img src="@/assets/images/uplb-logo.png" class="h-12 w-auto" alt="UPLB Logo" />
        </div>
        <h1 class="font-semibold text-xl hidden md:flex items-center">
          IAMS ADMIN
        </h1>
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
              <!-- <img
                src="@/assets/images/default.jpg"
                class="h-12 w-auto"
                alt="User Picture" /> -->
            </div>
  
            <div class="inline-block w-2/3">
              <!-- <img v-if="keycloakUser.picture" :src="keycloakUser.picture" :alt="keycloakUser.name" class="w-100 h-100 rounded-full"> -->
              <!-- <img src="@/assets/images/default.jpg" alt="z" class="w-100 h-100 rounded-full"> -->
              <img :src="this.$auth.user.picture" alt="z" class="w-100 h-100 rounded-full">
              <p class="font-bold text-xl">{{ this.$auth.user.given_name }}  {{ this.$auth.user.family_name }}</p>
              <p class="break-words text-sm">{{ this.$auth.user.email }}</p>
            </div>
          </div>
        </span>
        <!-- AMIS LINK -->
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
          <!-- END AMIS LINK -->
                
        
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
    </nav>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      name: 'Navbar',
      data() {
        return {
            isOpen: true,
        }
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
      },
  }
  </script>