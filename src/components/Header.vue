<script setup>
import { RouterView } from 'vue-router'
import DrawerRight from "@/components/DrawerRight.vue";
</script>

<template>
  <div class="flex justify-between 
              mt-8 md:mt-16 2xl:mt-24 
              mx-8 md:mx-16 2xl:mx-24 
              mb-8 md:mb-12">
    <div>
      <p class="font-normal font-serif 
                text-4xl md:text-5xl 2xl:text-6xl"><router-link to="/">STERRE</router-link></p>
      <p class="font-normal font-serif pl-8 
                text-4xl md:text-5xl 2xl:text-6xl"><router-link to="/">PEUMANS</router-link></p>
    </div>
    <div>
      <DrawerRight></DrawerRight> 
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
</style>