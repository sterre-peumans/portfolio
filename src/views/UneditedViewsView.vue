<script setup>
import Footer from "@/components/Footer.vue";

import v from '/images/uv/v.jpg';
import v2 from '/images/uv/v2.jpg';
import v3 from '/images/uv/v3.jpg';
import v4 from '/images/uv/v4.jpg';
import v5 from '/images/uv/v5.jpg';
import v6 from '/images/uv/v6.jpg';
import v8 from '/images/uv/v8.jpg';
import v9 from '/images/uv/v9.jpg';
import v10 from '/images/uv/v10.jpg';
import v11 from '/images/uv/v11.jpg';
import v12 from '/images/uv/v12.jpg';
import v13 from '/images/uv/v13.jpg';
import v14 from '/images/uv/v14.jpg';
import v15 from '/images/uv/v15.jpg';
import v16 from '/images/uv/v16.jpg';
import v17 from '/images/uv/v17.jpg';

</script>

<template>
  <div class="grid grid-flow-row
              grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-5
              mx-8 md:mx-16 2xl:mx-24
              mb-8 md:mb-16 2xl:mb-24">
    <div class="col-span-2 2xl:aspect-square
                my-8 md:my-16 2xl:my-24">
      <p class="font-serif 
                mb-3 md:mb-6
                text-3xl md:text-4xl 2xl:text-6xl">Unedited Views</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">USA Road Trip 2023
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Visual Storytelling, Photography, Travel, Observing,
        International]</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="v4" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Not edited, just observed.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">During the summer of 2023, I had the opportunity to embark on a road trip across the United
        States. Through extensive car rides, challenging hikes, and leisurely strolls, I captured an impressive series of
        photos showcasing the breathtaking nature I encountered. The images encapsulate the pristine landscapes, ranging
        from imposing mountains to vast deserts, all presented in their unaltered, untouched state. These photos serve as
        poignant reflections, revealing the beauty of nature without any filters. Each image is a memory that I will
        cherish forever.</p>
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v" alt="">
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v2" alt="">
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v3" alt="">
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v5" alt="">
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v8" alt="">
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v9" alt="">
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v10" alt="">
    </div>
    
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v11" alt="">
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v12" alt="">
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v13" alt="">
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v17" alt="">
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v14" alt="">
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v15" alt="">
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="v16" alt="">
    </div>

  </div>

  <div class="flex justify-center">
    <router-link to="/uv">
      <button type="button" class="flex flex-col items-center m-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="-rotate-90" height="1.5em" viewBox="0 0 448 512">
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
        <p class="font-sans font-thin
                  mt-2 md:mt-4
                  text-xs md:text-base">Back to top.</p>
      </button>
    </router-link>
    <router-link to="/projects">
      <button type="button" class="flex flex-col items-center m-8">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
          <path
            d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" />
        </svg>
      <p class="font-sans font-thin
                  mt-2 md:mt-4
                  text-xs md:text-base">All projects.</p>
    </button>
  </router-link>
</div>

<Footer></Footer></template>