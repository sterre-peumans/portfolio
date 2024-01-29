<script setup>
import Footer from "@/components/Footer.vue";

import col from '/images/cd/col.jpg';
import col7 from '/images/cd/col7.jpg';
import col2 from '/images/cd/col2.jpg';
import col3 from '/images/cd/col3.jpg';
import col4 from '/images/cd/col4.jpg';
import col8 from '/images/cd/col8.jpg';
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
                text-3xl md:text-4xl 2xl:text-6xl">Collective Data</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">What are the actual costs of an art education?</p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Datavisualization, Organisation, Spatial Thinking, Teamwork]
      </p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="col" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ The end result of our collective datavisualization.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">A collective data visualization is a collaborative creation in which both the data itself and its
        visualization are developed collectively. The data is released simultaneously with the development of the
        visualization. The goal of this assignment was to investigate, as a team, the ways in which a space can be
        visually utilized, the resources needed to capture a result, and how the actions of individuals can be used to
        create visualizations.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">In collaboration with my team, we sought out relevant and engaging topics to conceive a
        collective data visualization that we would later execute with our fellow students. We chose the theme of "school
        expenses," aiming to visualize the expenditures we, as students, incur. Given our focus on the arts, there are
        often costs that go beyond regular tuition fees, such as printing or project expenses. These expenditures are not
        equally feasible for every student and can result in projects being less well-executed, thereby impacting academic
        performance. As a team, we aimed to address this issue by conducting collaborative research.</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="col8" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ The start of the collective visualization.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="col2" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="col7" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Every color represents one student.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">After some preparations, we conducted the research with our fellow students. We placed several
        questions on the wall and provided everyone in our class with a set of stickers, each with its own color. Each
        person had the opportunity to enter the room and provide answers to the posed questions. Subsequently, we
        discussed the results as a team. From this, we could conclude that our study indeed requires more financial
        resources than many students initially estimated. This valuable information can be significant for our school. It
        allows us to convincingly demonstrate that creating a collective data visualization collectively is an extremely
        efficient and effective method.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="col4" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="col3" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ "Do you have to pay this yourself?"</p>
    </div>

  </div>

  <div class="flex justify-center">
    <router-link to="/cd">
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