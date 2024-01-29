<script setup>
import Footer from "@/components/Footer.vue";

import fol from '/images/sp/fol.jpg';
import fol5 from '/images/sp/fol5.jpg';
import fol6 from '/images/sp/fol6.jpg';
import fol7 from '/images/sp/fol7.jpg';
import fol8 from '/images/sp/fol8.jpg';
import fol9 from '/images/sp/fol9.jpg';

import web from '/images/sp/web.jpg';
import web2 from '/images/sp/web2.jpg';
import web3 from '/images/sp/web3.jpg';

import ren from '/images/sp/3_1.jpg';
import ren2 from '/images/sp/3_2.jpg';
import ren3 from '/images/sp/3_3.jpg';
import ren4 from '/images/sp/4.jpg';
import ren5 from '/images/sp/6.jpg';
import ren6 from '/images/sp/9_1.jpg';
import ren7 from '/images/sp/9_2.jpg';
import ren8 from '/images/sp/508_1.jpg';
import ren9 from '/images/sp/508_2.jpg';
import ren10 from '/images/sp/508_3.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      renImageList: [
        ren,
        ren2,
        ren3,
      ],
      ren2ImageList: [
        ren6,
        ren7,
      ],
      ren3ImageList: [
        ren10,
        ren9,
        ren8,
      ],
      webImageList: [
        web,
        web2,
        web3,
      ],
      folImageList: [
        fol5,
        fol6,
        fol7,
        fol9,
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
                text-3xl md:text-4xl 2xl:text-6xl">Studio Phi</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">A combination of architecture and graphic design.
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Adobe Photoshop, Adobe InDesign, Adobe Illustrator,
        Teamwork, Architecture, Webdesign, Book Design, Work Experience]</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="fol" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ A folder explaining the vision and work method of Studio Phi.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">In 2023, I had the opportunity to start working as a student-freelancer graphic designer at the
        architectural firm Studio Phi. It was an extremely captivating chance to merge my passions for both architecture
        and graphic design.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Throughout the past year, I have worked on a variety of assignments, ranging from assisting in
        creating the website to designing an informative brochure, producing architectural renders, and crafting layouts
        for floor plans. This hands-on experience has already taught me so much, and I appreciate collaborating with a
        team of fantastic colleagues.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Find out more about Studio Phi on the website: <a href="https://www.studiophi.be/" target=”_blank” class="link italic">www.studiophi.be</a></p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="webImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ I helped designing the website of Studio Phi.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="renImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Renders of project 'Opdenberg'.</p>
    </div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="ren4" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Render of project 'Kamerhuis'.</p>
    </div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="ren5" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Render of project 'Weggevoerden'.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="ren2ImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Renders of project 'Tolhuis'.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="ren3ImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Renders of project 'Paardenstal'.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="fol8" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ The folder I designed for Studio Phi.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="folImageList" />
        </div>
      </div>
    </div>



  </div>

  <div class="flex justify-center">
    <router-link to="/sp">
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