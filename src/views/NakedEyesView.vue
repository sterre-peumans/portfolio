<script setup>
import Footer from "@/components/Footer.vue";

import pers from '/images/tswne/pers.jpg';
import beelden from '/images/tswne/beelden.jpg';
import stalen from '/images/tswne/stalen.jpg';
import stalentest from '/images/tswne/stalentest.jpg';
import teksttest from '/images/tswne/teksttest.jpg';

import proto from '/images/tswne/proto.jpg';
import proto2 from '/images/tswne/proto2.jpg';
import proto3 from '/images/tswne/proto3.jpg';
import proto4 from '/images/tswne/proto4.jpg';
import proto5 from '/images/tswne/proto5.jpg';
import proto6 from '/images/tswne/proto6.jpg';
import proto7 from '/images/tswne/proto7.jpg';
import proto8 from '/images/tswne/proto8.jpg';
import proto9 from '/images/tswne/proto9.jpg';

import close from '/images/tswne/close.jpg';
import close2 from '/images/tswne/close2.jpg';
import close3 from '/images/tswne/close3.jpg';

import idee from '/images/tswne/idee.jpg';
import idee2 from '/images/tswne/idee2.jpg';
import idee3 from '/images/tswne/idee3.jpg';
import idee4 from '/images/tswne/idee4.jpg';

import muur from '/images/tswne/muur.jpg';
import muur2 from '/images/tswne/muur2.jpg';
import muur3 from '/images/tswne/muur3.jpg';
import muur4 from '/images/tswne/muur4.jpg';
import muur5 from '/images/tswne/muur5.jpg';
import muur6 from '/images/tswne/muur6.jpg';

import verf from '/images/tswne/verf.jpg';
import verf2 from '/images/tswne/verf2.jpg';
import verf3 from '/images/tswne/verf3.jpg';
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
        idee,
        proto,
        proto6
      ],
      secondImageList: [
        idee4,
        verf,
        proto7,
      ],
      thirdImageList: [
        idee2,
        verf2,
        proto8,
      ],
      fourthImageList: [
        idee3,
        verf3,
        proto9,
      ],
      fifthImageList: [
        muur2,
        muur3,
      ],
      sixthImageList: [
        muur4,
        muur5,
      ],
      seventhImageList: [
        close,
        close2,
        close3,
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
                text-3xl md:text-4xl 2xl:text-6xl">To See With Naked Eyes</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">More than 80 sheets of paper with stories that bring colors to life.
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Color, Adobe InDesign, Observing, Photography, Visual
        Storytelling, Book Design]</p>
    </div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="pers" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Torn papers with stories and color patches.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="beelden" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Pictures of colors I see everday.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Color is everywhere. We are confronted with it every moment of the day, and it is an
        indispensable aspect of our lives, but are we aware enough of this? This project has taught me to search for
        color, combinations of colors, proportions of colors, and the importance of color in our perception.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">I started by exploring color theories and contrasts, namely: color-against-color, light-dark,
        warm-cold, complementary, simultaneous, quality, and quantity. Through examples, I gained insight into this theory
        and laid the foundation for the rest of the project.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">To capture the presence of color in my life, I walked the route of my daily bike ride between
        <i>Heverlee</i> and <i>Leuven</i> station. Along this path, I consciously searched for combinations and
        proportions of color and
        captured them with my camera. The resulting series of images served as a starting point for creating color
        samples. I attempted to mix the other colors with paint, starting with the primary colors. It was a learning
        process to create the right shades, and this gave me a lot of insight into the composition of the colors I
        encounter daily.
      </p>
    </div>

    <div class="hidden 2xl:block"></div>

    <div>
      <img class="h-auto max-w-full" :src="stalen" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Color palette try-outs.</p>
    </div>

    <div class="hidden 2xl:block"></div>

    <div class="self-end">
      <img class="h-auto max-w-full" :src="stalentest" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ First color palette try-outs.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">For the final product of this project, I had to find a medium that could clearly communicate
        these colors, their proportions relative to each other, and the self-chosen names. I tried out about ten ideas and
        ultimately decided to create a book in collaboration with Chat GPT.</p>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">The following images show ideas, paint tests and prototypes.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="secondImageList" />
        </div>
      </div>
    </div>
    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="thirdImageList" />
        </div>
      </div>
    </div>
    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="fourthImageList" />
        </div>
      </div>
    </div>
    <div class="col-span-2 2xl:col-span-4">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="firstImageList" />
        </div>
      </div>
    </div>

    <div>
      <img class="h-auto max-w-full" :src="proto2" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="proto3" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="proto4" alt="">
    </div>
    <div>
      <img class="h-auto max-w-full" :src="proto5" alt="">
    </div>

    <div class="col-span-2">
      <p class="font-serif leading-6 
                text-xl md:text-3xl 2xl:text-5xl
                my-24">“I consciously searched for combinations and proportions of color and captured them with my
        camera.”</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="teksttest" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Book design tests.</p>
    </div>

    <div class="col-span-2 md:col-span-1 2xl:hidden">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Each chapter in the book is a story in which the names of the colors play an
        important role. I designed, printed, and "tore" the book. Then, for each chapter, I painted geometric shapes on
        the individual pages based on the proportions of the colors in the photos. The words and color fields interact
        with each other and tell a unique story that has never been told before..</p>
    </div>

    <div class="hidden md:block 2xl:hidden"></div>

    <div>
      <img class="h-auto max-w-full" :src="muur6" alt="">
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="fifthImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="sixthImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="seventhImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 2xl:col-span-3">
      <img class="h-auto max-w-full" :src="muur" alt="">
    </div>

    <div class="hidden 2xl:block">
      <div class="col-span-2 md:col-span-1">
        <p class="font-sans font-light leading-6 
                  text-sm md:text-base 2xl:text-lg
                  mb-8">Each chapter in the book is a story in which the names of the colors play an
          important role. I designed, printed, and "tore" the book. Then, for each chapter, I painted geometric shapes on
          the individual pages based on the proportions of the colors in the photos. The words and color fields interact
          with each other and tell a unique story that has never been told before..</p>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <router-link to="/tswne">
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
