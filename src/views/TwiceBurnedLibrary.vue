<script setup>
import Footer from "@/components/Footer.vue";

import boek from '/images/ttbl/boek.jpg';
import boek2 from '/images/ttbl/boek2.jpg';
import boek3 from '/images/ttbl/boek3.jpg';
import boek4 from '/images/ttbl/boek4.jpg';

import hoek from '/images/ttbl/hoek.jpg';

import page from '/images/ttbl/page.jpg';
import page2 from '/images/ttbl/page2.jpg';
import page3 from '/images/ttbl/page3.jpg';
import page4 from '/images/ttbl/page4.jpg';
import page5 from '/images/ttbl/page5.jpg';
import page6 from '/images/ttbl/page6.jpg';
import page7 from '/images/ttbl/page7.jpg';
import page8 from '/images/ttbl/page8.jpg';
import page9 from '/images/ttbl/page9.jpg';

import test from '/images/ttbl/test.jpg';
import test2 from '/images/ttbl/test2.jpg';
import test3 from '/images/ttbl/test3.jpg';
import test4 from '/images/ttbl/test4.jpg';
import test5 from '/images/ttbl/test5.jpg';
import test6 from '/images/ttbl/test6.jpg';
import test7 from '/images/ttbl/test7.jpg';
import test8 from '/images/ttbl/test8.jpg';
import test9 from '/images/ttbl/test9.jpg';
import test10 from '/images/ttbl/test10.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      testImageList: [
        test7,
        test4,
        test3,
      ],
      res1ImageList: [
        test,
        boek2,
        boek4,
      ],
      res2ImageList: [
        boek3,
        hoek,
        test2,
      ],
      pageImageList: [
        page,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7,
        page8,
        page9,
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
                text-3xl md:text-4xl 2xl:text-6xl">The Twice-Burned Library</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">Knowledge Ablaze
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Adobe InDesign, Adobe Photoshop, Book Design, Typography]
      </p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="boek" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ The book I designed. This still needs to be binded.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The University Library of Leuven, a treasure trove of knowledge that fell victim to flames not
        once but twice during both the First and Second World Wars. Books embody knowledge, and knowledge is power.
        Censorship, as a wartime strategy, serves as a means to destroy various cultural expressions and implement
        different ideologies. In his book Burning the Books, A History of Knowledge Under Attack, Richard Ovenden
        intertwines the gripping story of the University Library of Leuven. This book, along with self-selected imagery
        from University Library Leuven, 1425-2000, forms the essence of this project.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">In the lead-up to this project, the choice of format and font took center stage. I created
        various prototypes to determine a direction, with my preference quickly leaning towards the classic, easily
        readable, and extensive Minion Pro font. I settled on a size of 125x180mm, resulting in a modest and refined book
        that could accommodate a substantial number of pages despite the concise text.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="test9" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="test8" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Prototypes to decide the format and typography.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="test10" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Testprints of the different pages.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The further development of my project involved extensive tests and prints to optimize aspects
        such as font size, line spacing, font thickness, margins, and page numbering. I guided myself in finding an airy
        design that seamlessly complemented the content, carefully considering every detail.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="testImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ More testprints.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">My idea for the cover unfolded quickly. I wanted the flames from the story to be visible on the
        outside, giving the impression that the book had narrowly escaped complete combustion. This symbolism serves as a
        visual reflection of the book's content. The cover, made from black paper symbolizing soot, exhibits partial
        burning, framing the title in a special way and grabbing attention. Additionally, the sections remain partially
        visible on the spine, a subtle touch that adds depth to the narrative.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="test5" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="test6" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Prototypes of the cover and the complete booklet.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The final phase involved the structured placement of images. Using the text as a guide, I
        selected appropriate images, designing a system to work with various page sizes. This resulted in clear and
        distinct images, even considering the modest size of the book. The folding system adds an engaging interaction
        between the reader and the story.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The end result is a book that demands to be read. Every facet refers to the unforgettable events
        in Leuven, events that must be recounted for a long time to come.</p>
    </div>

    <div class="col-span-2 md:col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="res1ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="res2ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="pageImageList" />
        </div>
      </div>
    </div>

  </div>

  <div class="flex justify-center">
    <router-link to="/ttbl">
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

  <Footer></Footer>
</template>