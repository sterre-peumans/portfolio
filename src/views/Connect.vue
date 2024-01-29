<script setup>
import Footer from "@/components/Footer.vue";

import plexi from '/images/c/plexi.jpg';

import chart from '/images/c/chart.jpg';
import chart2 from '/images/c/chart2.jpg';
import chart3 from '/images/c/chart3.jpg';
import chart4 from '/images/c/chart4.jpg';
import chart5 from '/images/c/chart5.jpg';

import schets from '/images/c/schets.jpg';

import t from '/images/c/try.jpg';
import t2 from '/images/c/try2.jpg';

import res from '/images/c/res.jpg';

import plexi3 from '/images/c/plexi3.jpg';
import plexi4 from '/images/c/plexi4.jpg';
import plexi5 from '/images/c/plexi5.jpg';
import plexi2 from '/images/c/plexi2.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      chartImageList: [
        chart,
        chart2,
        chart3,
        chart4,
        chart5,
      ],
      tryImageList: [
        t,
        t2,
      ],
      plexiImageList: [
        plexi3,
        plexi4,
        plexi5,
      ],
    };
  },
};
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
                text-3xl md:text-4xl 2xl:text-6xl">Connect</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">Where was 2BA MIND*?
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Adobe Illustrator, Datavisualization, Infographic,
        International, Lasercutting, Organization, Travel, UV Printing]</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="plexi" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ The end result of this datavisualization.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">In contemporary society, people, technologies, online services, organizations, and companies are
        more interconnected than ever at various levels: both locally and globally, physically and virtually, temporarily
        and permanently. To make this complex web of connections understandable, we can map it out using network diagrams.
        These visually simplified diagrams remain meaningful visual representations.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">My task was to visualize the connections among the students of the 2nd Bachelor Media &
        Information Design and demonstrate in a clear way that we share more common ground than initially apparent.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The process began with a question. Initially, I had to identify common characteristics,
        similarities, or connections between myself and my fellow students. I focused on topics or affinities that
        interested me, quickly settling on the theme of 'travel.'</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The questions I posed to my fellow students were as follows: Which countries have you visited?
        Which languages do you speak? What is your favorite country?</p>
    </div>

    <div class="col-span-2 md:col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="chartImageList" />
        </div>
      </div>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="schets" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Some first try-outs in Excel with & sketches from the data I collected.</p>
    </div>

    <div class="hidden xl:block"></div>
    <div class="hidden xl:block"></div>
    <div class="hidden xl:block"></div>
    <div class="hidden xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">While other options, such as allergies or daily water intake, were considered, I chose to
        concentrate on countries and languages. The collected data was analyzed, and I sought relevance between the
        various responses. For instance, it was fascinating to discover which individuals spoke specific languages and
        could effectively use them in the countries they had visited.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">When brainstorming concepts for my visualization, I deliberated between various options such as
        an animated video with connecting nodes, a circular data visualization, or even a world map. However, I realized I
        was too focused on the end product too quickly and needed to take a step back. I concentrated on sketching and
        brainstorming to later arrive at a finalized design. After conceiving concepts and working on several ideas, my
        ultimate visualization took the form of a circular image. This was printed using a UV printer on a white
        plexiglass, providing thickness to the visualization. This allowed the viewer to grasp, rotate, and explore where
        we, as 2BA MIND*, have all been.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="tryImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ More try-outs with the dataset.</p>
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="plexi2" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="plexiImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="res" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ The result. Every ring represents a student, every dot shows if the student has been there / can communicate in an official language.</p>
    </div>

  </div>

  <div class="flex justify-center">
    <router-link to="/c">
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