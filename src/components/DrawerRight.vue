<script setup>
import Nav from "@/components/Nav.vue";
</script>

<template>

  <!-- Button om drawer te tonen, button kan in elk bestand geplaatst worden. -->
  <button aria-controls="navRight"
        class="bg-white p-2 rounded-full"
        data-drawer-placement="right"
        data-drawer-show="navRight"
        data-drawer-target="navRight"
        type="button">
    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
  </button>

  <!-- drawer die verschijnt, hij komt nu van rechts het scherm binnen -->
  <div id="navRight"
       aria-labelledby="drawer-label"
       class="drawer drawer--right translate-x-full w-2/3 md:w-1/2 2xl:w-1/3 z-40"
       tabindex="-1">
    <Nav drawer-id="navRight"></Nav>

    <button type="button" 
        data-drawer-hide="navRight" 
        aria-controls="navRight" 
        class="rotate-90 fixed right-0 top-0 mt-8 md:mt-16 2xl:mt-24 mx-8 md:mx-16 2xl:mx-24 mb-8 md:mb-12 bg-white p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
    </button>

  </div>

</template>

<style scoped>
/* fixed right-0 top-0 mt-8 md:mt-16 2xl:mt-24 mx-8 md:mx-16 2xl:mx-24 mb-8 md:mb-12 */
</style>