<script setup>
import Footer from "@/components/Footer.vue";

import res5 from '/images/ep/res5.jpg';

import data from '/images/ep/data.jpg';
import data2 from '/images/ep/data2.jpg';
import data3 from '/images/ep/data3.jpg';
import data4 from '/images/ep/data4.jpg';
import data5 from '/images/ep/data5.jpg';
import data6 from '/images/ep/data6.jpg';
import data7 from '/images/ep/data7.jpg';

import test from '/images/ep/test.jpg';
import test2 from '/images/ep/test2.jpg';
import test3 from '/images/ep/test3.jpg';
import test4 from '/images/ep/test4.jpg';
import test5 from '/images/ep/test5.jpg';

import cir from '/images/ep/cir.jpg';
import cir2 from '/images/ep/cir2.jpg';
import cir3 from '/images/ep/cir3.jpg';
import cir4 from '/images/ep/cir4.jpg';
import cir5 from '/images/ep/cir5.jpg';
import cir6 from '/images/ep/cir6.jpg';
import cir7 from '/images/ep/cir7.jpg';

import end from '/images/ep/end.jpg';
import end2 from '/images/ep/end2.jpg';
import end3 from '/images/ep/end3.jpg';
import end4 from '/images/ep/end4.jpg';
import end5 from '/images/ep/end5.jpg';
import end6 from '/images/ep/end6.jpg';
import end7 from '/images/ep/end7.jpg';
import end8 from '/images/ep/end8.jpg';

import res2 from '/images/ep/res2.jpg';

import res from '/images/ep/res.jpg';
import res4 from '/images/ep/res4.jpg';
import res6 from '/images/ep/res6.jpg';
import res8 from '/images/ep/res8.jpg';

import res3 from '/images/ep/res3.jpg';
import res7 from '/images/ep/res7.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      dataImageList: [
        data,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
      ],
      testImageList: [
        test,
        test2,
        test3,
        test4,
        test5,
      ],
      cirImageList: [
        cir,
        cir2,
        cir3,
        cir4,
        cir5,
        cir6,
        cir7,
      ],
      endImageList: [
        end,
        end2,
        end3,
        end4,
        end5,
        end6,
        end7,
      ],
      res1ImageList: [
        res,
        res4,
        res6,
        res8,
      ],
      res2ImageList: [
        res3,
        res7,
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
                text-3xl md:text-4xl 2xl:text-6xl">Extinct Plants</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">Visualizing Complex Data
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Adobe Illustrator, Color, Datavisualization, Infographic,
        Lasercutting, UV Printing]</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="res5" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ One circle representing a time period.</p>
    </div>

    <div class="hidden md:block"></div> 

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">We live in a time where information flows faster than we can process it ourselves. Data has
        become an inevitable part of our daily lives and is becoming increasingly complex. How can we communicate this
        abundance of information in an understandable way? Data visualizations provide a solution by presenting large
        amounts of information in a clear and structured manner. They reveal connections that would otherwise remain
        hidden and make complex figures comprehensible through color and form.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">To transition from a data dimension to a data visualization, it is crucial to ask the right
        questions. Before starting this assignment, we were challenged to think in reverse and formulate the questions
        behind well-known data visualizations. This helped me become aware of the importance of thoughtful questioning in
        visualizations. My task was to create a versatile data visualization that clearly represents complex data, taking
        into account different dimensions of data. Various aspects of the data needed to be highlighted to provide a clear
        insight. I chose a dataset on extinct plant species.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The first step was to explore the data in Excel, create different pivot tables, and look for a
        relevant, versatile question that could lead to an interesting data visualization. My final question was: how many
        plants have gone extinct in each time period per continent and due to which threat?</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="dataImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Playing with the data collection.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="testImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="cirImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Visualization try-outs with the data collection.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">After refining the data, I tested various data visualization tools such as Rawgraphs, Flourish,
        and Datylon to find a suitable method. Rawgraphs turned out to be the most intuitive application, where I could
        easily compare various charts and diagrams. After many experiments, I chose a Voronoi diagram due to its tile
        structure, which could represent the different dimensions of my question and was visually appealing.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The final result shows the extent to which plants have gone extinct over the past century due to
        known threats. Each circle represents the number of extinct plants in a specific period. The circles are divided
        into large tiles, where each large tile is further subdivided into small tiles. The large tiles represent the six
        continents, while the small tiles depict various threats, visually marked by color. The areas of the tiles are
        proportional to the number of extinct plants attributed to each cause. All circles are connected to a bar chart,
        providing a clear visualization of specific threats and allowing for a comparison of the exact numbers of extinct
        plants.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="end8" alt="">
    </div>

    <div class="col-span-2 md:col-span-1 xl:col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="endImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ The result. Every circle shows how many plants were extinct during a period of time. </p>
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="res2" alt="">
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="res2ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="res1ImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ The visualization UV printed on plexiglass. </p>
    </div>

  </div>


  <div class="flex justify-center">
    <router-link to="/ep">
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