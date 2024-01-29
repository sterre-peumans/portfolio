<script setup>
import Footer from "@/components/Footer.vue";

import f from '/images/otg/1_col.jpg';
import f2 from '/images/otg/1_col2.jpg';
import f3 from '/images/otg/1_g.jpg';
import f5 from '/images/otg/1_sch.jpg';
import f6 from '/images/otg/1_str.jpg';

import c from '/images/otg/2_col.jpg';
import c2 from '/images/otg/2_g.jpg';
import c3 from '/images/otg/2_s.jpg';
import c4 from '/images/otg/2_s2.jpg';
import c5 from '/images/otg/2_str.jpg';

import b from '/images/otg/3_col.jpg';
import b2 from '/images/otg/3_col2.jpg';
import b3 from '/images/otg/3_g.jpg';
import b4 from '/images/otg/3_g2.jpg';
import b7 from '/images/otg/3_str.jpg';

import fi from '/images/otg/4_col.jpg';
import fi2 from '/images/otg/4_g.jpg';
import fi5 from '/images/otg/4_str.jpg';

import fig1 from '/images/otg/fig1.jpg';
import fig2 from '/images/otg/fig2.jpg';
import fig3 from '/images/otg/fig3.jpg';

import inp from '/images/otg/inp.jpg';

import pro3 from '/images/otg/pro3.jpg';
import pro5 from '/images/otg/pro5.jpg';

import ref from '/images/otg/ref.jpg';

import res from '/images/otg/res.jpg';
import res2 from '/images/otg/res2.jpg';
import res3 from '/images/otg/res3.jpg';
import res4 from '/images/otg/res4.jpg';
import res5 from '/images/otg/res5.jpg';
import res6 from '/images/otg/res6.jpg';
import res7 from '/images/otg/res7.jpg';
import res8 from '/images/otg/res8.jpg';
import res9 from '/images/otg/res9.jpg';
import res10 from '/images/otg/res10.jpg';

import schets from '/images/otg/schets.jpg';
import schets2 from '/images/otg/schets2.jpg';
import schets3 from '/images/otg/schets3.jpg';
import schets4 from '/images/otg/schets4.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      figImageList: [
        fig1,
        fig2,
        fig3,
      ],
      schetsImageList: [
        schets,
        schets2,
        schets3,
        schets4,
      ],
      fplanImageList: [
        f3,
        f5,
      ],
      lplanImageList: [
        b3,
        b4,
      ],
      cafeImageList: [
        c3,
        c4,
      ],
      maq1ImageList: [
        res,
        res2,
        res3,
      ],
      maq2ImageList: [
        res4,
        res6,
        res7,
        res8,
        res9,
        res10,
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
    <div class="col-span-2
                my-8 md:my-16 2xl:my-24">
      <p class="font-serif 
                mb-3 md:mb-6
                text-3xl md:text-4xl 2xl:text-6xl">'On' The Grid</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">Connected, Linked, United, Merged
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Adobe Photoshop, Organization, Lasercutting, Observing,
        Spatial Thinking, Architecture, Vectorworks]</p>
    </div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="res5" alt="">
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ End model of the design.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="pro5" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">A design assignment I received in the second year of the Civil Engineering-Architecture program
        was to create a city foyer in Halle. Several functions had to find a place on a large site, and a concept had to
        be devised to connect these volumes. I started by studying the site, exploring various volumes using a foam
        cutter, and sketching to develop concepts. My end result is based on a grid that connects all functions and
        divides the outdoor space.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="pro3" alt="">
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="schetsImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Process and sketches of the different functions.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <img class="h-auto max-w-full" :src="ref" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Design references.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The road originally running along the site is removed, creating a large, open space that extends
        from the existing park in Halle. Traffic is redirected either through the city center or along the canal.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The existing cultural buildings form a currently unused square. This design revitalizes this
        space and extends the concept of squares, creating a line of meeting places; the square in the center, the
        cultural square, and the square between the new buildings.</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">A grid with openings of 10x10m, based on the placement of existing buildings, divides the site
        and provides a system to connect different spaces. A tree is placed at each intersection to visually indicate the
        grid.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="figImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ (1) Road removed (2) Square (3) Grid</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="inp" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ (1) Foyer (2) Library and Exhibition Space <br /> (3) Café (4) Bike and Graffiti
        Workshop</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-medium 
                        text-lg md:text-xl 2xl:text-2xl">FOYER</p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base
                mb-4 md:mb-6 2xl:mb-8">[events - experience - meet - celebrate]</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The foyer is a space that can serve multiple functions and allows for different arrangements. The
        hall is constructed with a steel cassette ceiling and a glass facade. The ceiling, through well-placed beams,
        delineates different spaces. Two volumes provide the hall with sanitary facilities and storage. Windows can easily
        be opened, allowing full use of the large square.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="f" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Foyer from the inside.</p>
    </div>

    <div class="col-span-2 row-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="f6" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Structure of the Foyer.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1 self-end">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="fplanImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Ground plan of & different ways of using the Foyer.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1 self-end">
      <img class="h-auto max-w-full" :src="f2" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Foyer from the outside.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="b2" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Library & Exhibition Space from the inside.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-medium 
                text-lg md:text-xl 2xl:text-2xl">LIBRARY & EXHIBITION SPACE</p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base
                mb-4 md:mb-6 2xl:mb-8">[read - study - contemplate - discover]</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Concrete walls and large steel I-profiles perpendicular to each other define the layout of this
        building. On the ground floor, there is an exhibition space and an extension of the library with an outdoor
        reading area. The first floor houses an office space for city employees and two lodges for artists. The structure
        consists of a steel grid of beams and a standalone glass facade that maximally connects with the calming Zenne on
        one side and the large square on the other.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="lplanImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Ground plan of the Library & Exhibition Space.</p>
    </div>

    <div class="col-span-2 md:col-span-1 self-end">
      <img class="h-auto max-w-full" :src="b" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Library & Exhibition Space from the outside.</p>
    </div>

    <div class="col-span-2 2xl:col-span-4">
      <img class="h-auto max-w-full" :src="b7" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Structure Library & Exhibition Space.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-medium 
                        text-lg md:text-xl 2xl:text-2xl">CAFE</p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base
                mb-4 md:mb-6 2xl:mb-8">[eat - drink - meet - talk]</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The café is the place where people can meet and enjoy food and drinks. The space is centralized
        on the square, constructed with steel columns and beams. The walls are panels that can be opened.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="c" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Café from the outside.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="c2" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Ground plan of the Café.</p>
    </div>

    <div class="col-span-2 md:col-span-1 self-end">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="cafeImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ Sections of the Café.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2 md:col-span-2">
      <img class="h-auto max-w-full" :src="c5" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Structure of the Café.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-medium 
                        text-lg md:text-xl 2xl:text-2xl">BIKE & GRAFFITI WORKSHOP</p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base
                mb-4 md:mb-6 2xl:mb-8">[create - learn]</p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">The volume of this building was constructed based on an asymmetrically located alley dividing the
        space into two areas that can serve as bike and graffiti workshops. Parallel placed concrete walls serve as the
        supporting structure for the overlying steel beams. The northeast and southwest facades of the building are
        transparent, while the northwest and southeast facades are solid.</p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="fi" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Bike & Graffiti Workshop from the outside.</p>
    </div>

    <div class="hidden md:block"></div>

    <div class="col-span-2 row-span-2 md:col-span-1">
      <img class="h-auto max-w-full" :src="fi2" alt="">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm">^ Ground plan of the Bike & Graffiti Workshop.</p>
    </div>

    <div class="col-span-2 md:col-span-1 self-end">
      <img class="h-auto max-w-full" :src="fi5" alt="">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Structure of the Bike & Graffiti Workshop.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden md:block"></div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="maq2ImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">^ Final result in a scale model.</p>
    </div>

    <div class="col-span-2 self-end">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="maq1ImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm"> ^ Site model.</p>
    </div>








  </div> 

  <div class="flex justify-center">
    <router-link to="/otg">
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