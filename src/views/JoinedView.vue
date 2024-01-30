<script setup>
import Footer from "@/components/Footer.vue";

import all from '/images/j/all.jpg';
import col from '/images/j/col.jpg';
import col2 from '/images/j/col2.jpg';
import con from '/images/j/con.jpg';

import g from '/images/j/g.jpg';
import g2 from '/images/j/g2.jpg';

import inp from '/images/j/inp.jpg';

import iso from '/images/j/iso.jpg';
import iso2 from '/images/j/iso2.jpg';

import l from '/images/j/l1.jpg';
import l2 from '/images/j/l2.jpg';
import l3 from '/images/j/l3.jpg';
import l4 from '/images/j/l4.jpg';
import l5 from '/images/j/l5.jpg';
import l6 from '/images/j/l6.jpg';
import l7 from '/images/j/l7.jpg';

import m2 from '/images/j/m2.jpg';
import m3 from '/images/j/m3.jpg';
import m4 from '/images/j/m4.jpg';
import m5 from '/images/j/m5.jpg';
import m6 from '/images/j/m6.jpg';
import m7 from '/images/j/m7.jpg';
import m8 from '/images/j/m8.jpg';

import minp from '/images/j/minp.jpg';

import ms from '/images/j/ms.jpg';
import ms2 from '/images/j/ms2.jpg';
import ms3 from '/images/j/ms3.jpg';

import s from '/images/j/s.jpg';
import s2 from '/images/j/s2.jpg';

</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      layerImageList: [
        all,
        l,
        l2,
        l3,
        l4,
        l5,
        l6,
        l7,
      ],
      planImageList: [
        g,
        g2,
      ],
      secImageList: [
        s,
        s2,
      ],
      isoImageList: [
        iso2,
        iso,
      ],
      colImageList: [
        col,
        col2,
      ],
      maq1ImageList: [
        m3,
        m4,
        m6,
        m8,
      ],
      maq2ImageList: [
        m5,
        m2,
        m7,
      ],
      maqsImageList: [
        ms2,
        ms3,
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
                text-3xl md:text-4xl 2xl:text-6xl">Joined</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">A winding path through self-made spaces.
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Lasercutting, Observing, Spatial Thinking, Architecture,
        Teamwork, Vectorworks, Adobe Photoshop]</p>
    </div>

    <div class="col-span-2 md:row-span-2">
      <img class="h-auto max-w-full" :src="con" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ A collage that shows the concept of this project.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">You walk among the tall trees. The flowing water splashes against the mossy banks. The sky is
        sky-blue, but the light is filtered through light orange leaves, painting different patterns on the ground every
        hour of the day.</p>
      <p class="font-sans font-medium mb-8
                text-lg md:text-xl 2xl:text-2xl">NOISE.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">A continuous sound of softly humming cars forms the background choir for the birds' singing.</p>
      <p class="font-sans font-medium mb-8
                text-lg md:text-xl 2xl:text-2xl">WHOOSH.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">A train startles the nightingale and brutally silences it. You continue walking, now along the
        winding wall. The flowing water splashes against the quay. The constant murmur gives way to the sound of playing
        children and the occasional barking dog.</p>
      <p class="font-sans font-medium mb-8
                text-lg md:text-xl 2xl:text-2xl">PEACE.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The idyllic nature stands in stark contrast to the erratic, loud surroundings. The wall meanders
        through the forest, forming a clear but fluid boundary: the fast, busy world of the road and industry on one side,
        the calm world of the nature reserve on the other. Through the twists in corten steel, spaces with uniqueness are
        connected to each other. Intimate places, but also vast expanses where the trees give way to recreation and
        entertainment.</p>
      <p class="font-sans font-light leading-6 italic mb-8
                text-xs md:text-sm 2xl:text-base">Written by Manon Rupus</p>
    </div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="minp" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Site model.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">During the second year of the Civil Engineering-Architecture program, I had to create a meeting
        place on the banks of the Zenne River in Halle with three fellow students. Our design consists of a winding wall
        that forms spaces and makes its way between multiple parallel axes: the canal, the road, and the train track. The
        appearance and placement of the wall, as well as its openings, are determined by a stacking of different layers. A
        canopy structure is placed on top.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="layerImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Concept layers.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="inp" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Site plan.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The meeting place is accessible via two roads, and the choice between them depends on the purpose
        of the visit. As a walker on the Zennepad, you pass along and through the winding wall, creating different
        experiences, each with a distinct spatial character throughout the entire walk. As an event visitor, you arrive
        along the street, accessible by car, bicycle, or public transport. Paved paths lead the visitor between existing
        buildings to the entrance of the covered event space. Both circulations are connected by a dual corten steel
        bridge, which has a robust side with fins and a smooth side. The two sides offer different views of the Zenne
        Valley. Two straight lines are drawn through this meandering wall. Vistas that break the winding line and create
        openings, allowing visitors to easily cross from one side to the other. Moreover, these lines provide interesting
        views, compelling experiences, adding an extra dimension.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="planImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Ground plans.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="secImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Sections of the project.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The entire structure contributes to the stability of the construction. On one side of the corten
        steel wall, a fin is placed every meter. The rhythm is the same over the entire wall, but the dimensions of the
        fins vary. This depends on their placement against the wall, with wider fins for straighter sections and narrower
        fins for strongly curving parts. The dimensions indicate the sizes needed for the fins. They support the wall and
        the concrete canopy on one hand, and on the other hand, they provide lateral stability. Together with the wall,
        they form the load-bearing element for the canopy.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="colImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Collages of the project.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="isoImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Isometrics of the structure.</p>
    </div>

    <div class="col-span-2 md:col-span-1 self-end">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The canopy is composed of a 20x20m concrete slab. On one hand, the canopy is supported, and on
        the other hand, it is suspended. The slab rests on a 30cm high beam supported on three points on the wall and
        hangs from a large-sized beam. This beam is supported on either side of the canopy on fins under compression that
        extend above the wall. Additionally, it is subjected to tension at further points, thereby clamping the entire
        beam. Transverse child beams complete the entire structure structurally.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="maq2ImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Final result in a scale model.</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="maq1ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="maqsImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="ms" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Details of the structure in a scale model.</p>
    </div>

  </div>

  <div class="flex justify-center">
    <router-link to="/j">
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