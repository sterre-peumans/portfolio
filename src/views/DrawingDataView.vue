<script setup>
import Footer from "@/components/Footer.vue";

import cards from '/images/dd/cards.jpg';
import cards2 from '/images/dd/cards2.jpg';

import data from '/images/dd/data.jpg';
import data2 from '/images/dd/data2.jpg';
import data3 from '/images/dd/data3.jpg';
import data4 from '/images/dd/data4.jpg';
import data5 from '/images/dd/data5.jpg';
import data6 from '/images/dd/data6.jpg';
import data7 from '/images/dd/data7.jpg';
import data8 from '/images/dd/data8.jpg';

import sym from '/images/dd/sym.jpg';
import sym2 from '/images/dd/sym2.jpg';

import scan from '/images/dd/scan.jpg';
import scan2 from '/images/dd/scan2.jpg';
import scan3 from '/images/dd/scan3.jpg';
import scan4 from '/images/dd/scan4.jpg';
import scan5 from '/images/dd/scan5.jpg';
import scan6 from '/images/dd/scan6.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      firstImageList: [
        cards,
        cards2,
      ],
      secondImageList: [
        scan3,
        scan4,
      ],
      thirdImageList: [
        scan,
        scan2,
      ],
      fourthImageList: [
        scan5,
        scan6,
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
                text-3xl md:text-4xl 2xl:text-6xl">Drawing Data</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">One of my weeks on a postcard.</p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Visual Storytelling, Organisation, Datavisualization, Drawing, Observing, Color, Infographic]</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="firstImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Three postcards that present the same data <br/> using different approaches.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">During one week, I collected data about myself. I noted where I was, how long I was there, who I
        was with, and how I felt there. With this data, I created three different visualizations.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">This project is based on the book called <i>Dear Data</i>. In this book, information designers
        <i>Giorgia Lupi</i> and <i>Stefanie Posavec</i> share their correspondence in the form of postcard-sized drawings.
        They collected data from their own lives every week for a year and represented it using symbols and colors,
        accompanied by a legend.</p>
    </div>

    <div>
      <img class="h-auto max-w-full" :src="data" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data2" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data3" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data4" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data5" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data6" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data7" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="data8" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ My data collection.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">I collected my data and conducted research to expand my own "symbol library." I studied the book
                <i>Visualizing Complexity</i> and made notes of all the symbols and interesting characters. This collection has
                become a source of inspiration that I can use for years to come.</p>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="sym" alt="">
    </div>
    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="sym2" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ The start of my symbol library.</p>
    </div>

    <div class="block 2xl:hidden col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6
                text-sm md:text-base 2xl:text-lg
                mb-8">The three postcards I created are visualizations of the same dataset, but each one focuses on a
                different aspect: location, time, and emotion. On the back of the cards, there is a legend that describes the
                symbols used and makes the visualization readable.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="secondImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block">
      <p class="font-sans font-light leading-6
                text-sm md:text-base 2xl:text-lg
                mb-8">The three postcards I created are visualizations of the same dataset, but each one focuses on a
                different aspect: location, time, and emotion. On the back of the cards, there is a legend that describes the
                symbols used and makes the visualization readable.</p>
    </div>

    <div class="hidden 2xl:block"></div>

    <div class="row-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="thirdImageList" />
        </div>
      </div>
    </div>
    <div class= "row-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="fourthImageList" />
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <router-link to="/dd">
      <button type="button" 
              class="flex flex-col items-center m-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="-rotate-90" height="1.5em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        <p class="font-sans font-thin
                  mt-2 md:mt-4
                  text-xs md:text-base">Back to top.</p>
      </button>
    </router-link>
    <router-link to="/projects">
      <button type="button" 
              class="flex flex-col items-center m-8">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/></svg>
        <p class="font-sans font-thin
                  mt-2 md:mt-4
                  text-xs md:text-base">All projects.</p>
      </button>
    </router-link>
  </div>

  <Footer></Footer>
</template>
