<script setup>
const props = defineProps(['drawerId'])

</script>

<template>
<nav>
  <ul class="mt-8 md:mt-16 2xl:mt-24 mx-8 md:mx-16 2xl:mx-24">
    <li :data-drawer-hide="drawerId" class="link font-sans font-medium text-2xl md:text-3xl 2xl:text-4xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/">HOME</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-medium text-2xl md:text-3xl 2xl:text-4xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/about">ABOUT</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-medium text-2xl md:text-3xl 2xl:text-4xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/projects">PROJECTS</router-link></li>
  </ul>

  <ul class="mt-8 md:mt-16 2xl:mt-24 mx-8 md:mx-16 2xl:mx-24">
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/cc">Collected Collections</router-link></li> -->
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/cd">Collective Data</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/c">Connect</router-link></li>
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/cww">Cooking Without Words</router-link></li> -->
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/df">Design Fiction</router-link></li> -->
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/dd">Drawing Data</router-link></li>
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/eos">Elektrodata Objects: Solar</router-link></li> -->
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/ep">Extinct Plants</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/j">Joined</router-link></li>
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/mc">Mass Connections</router-link></li> -->
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/sp">Studio Phi</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/otg">On The Grid</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/tswne">To See With Naked eyes</router-link></li>
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/td">TouchDesigner</router-link></li> -->
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/tcd">The Cosmic Dance</router-link></li> -->
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/teotb">The Eye of The Beholder</router-link></li>    
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/teotb">The Twice-Burned Library</router-link></li>
    <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/uv">Unedited Views</router-link></li>
    <!-- <li :data-drawer-hide="drawerId" class="link font-sans font-light text-sm md:text-base 2xl:text-xl mb-3 md:mb-4 2xl:mb-5"><router-link to="/vq">Visual Quest</router-link></li> -->
  </ul>
</nav>
</template>

<style scoped>
</style>