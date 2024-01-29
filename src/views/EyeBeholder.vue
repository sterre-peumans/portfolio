<script setup>
import Footer from "@/components/Footer.vue";

import ik from '/images/teotb/ik.jpg';
import ik2 from '/images/teotb/ik2.jpg';
import ik3 from '/images/teotb/ik3.jpg';
import ik4 from '/images/teotb/ik4.jpg';
import ik5 from '/images/teotb/ik5.jpg';
import ik6 from '/images/teotb/ik6.jpg';
import ik7 from '/images/teotb/ik7.jpg';
import ik8 from '/images/teotb/ik8.jpg';

import schets from '/images/teotb/schets.jpg';
import schets2 from '/images/teotb/schets2.jpg';
import schets3 from '/images/teotb/schets3.jpg';
import schets4 from '/images/teotb/schets4.jpg';
import schets5 from '/images/teotb/schets5.jpg';
import schets6 from '/images/teotb/schets6.jpg';
import schets7 from '/images/teotb/schets7.jpg';
import schets8 from '/images/teotb/schets8.jpg';
import schets9 from '/images/teotb/schets9.jpg';

import ink from '/images/teotb/ink.jpg';
import ink2 from '/images/teotb/ink2.jpg';
import ink3 from '/images/teotb/ink3.jpg';
import ink4 from '/images/teotb/ink4.jpg';
import ink5 from '/images/teotb/ink5.jpg';
import ink6 from '/images/teotb/ink6.jpg';

import loose from '/images/teotb/loose.jpg';
import loose2 from '/images/teotb/loose2.jpg';
import loose3 from '/images/teotb/loose3.jpg';
import loose4 from '/images/teotb/loose4.jpg';

import line from '/images/teotb/line.jpg';
import line2 from '/images/teotb/line2.jpg';
import line3 from '/images/teotb/line3.jpg';
import line4 from '/images/teotb/line4.jpg';
import line5 from '/images/teotb/line5.jpg';
import line6 from '/images/teotb/line6.jpg';
import line7 from '/images/teotb/line7.jpg';
import line8 from '/images/teotb/line8.jpg';
import line9 from '/images/teotb/line9.jpg';
import line10 from '/images/teotb/line10.jpg';
import line11 from '/images/teotb/line11.jpg';

import pencil from '/images/teotb/pencil.jpg';
import pencil2 from '/images/teotb/pencil2.jpg';
import pencil3 from '/images/teotb/pencil3.jpg';
import pencil4 from '/images/teotb/pencil4.jpg';
import pencil5 from '/images/teotb/pencil5.jpg';
import pencil6 from '/images/teotb/pencil6.jpg';
import pencil7 from '/images/teotb/pencil7.jpg';
import pencil8 from '/images/teotb/pencil8.jpg';
import pencil9 from '/images/teotb/pencil9.jpg';
import pencil10 from '/images/teotb/pencil10.jpg';

import color from '/images/teotb/color.jpg';
import color2 from '/images/teotb/color2.jpg';
import color3 from '/images/teotb/color3.jpg';
import color4 from '/images/teotb/color4.jpg';
import color5 from '/images/teotb/color5.jpg';
import color6 from '/images/teotb/color6.jpg';
import color7 from '/images/teotb/color7.jpg';
import color8 from '/images/teotb/color8.jpg';
import color9 from '/images/teotb/color9.jpg';
import color10 from '/images/teotb/color10.jpg';
import color11 from '/images/teotb/color11.jpg';
import color12 from '/images/teotb/color12.jpg';

import abstract from '/images/teotb/abstract.jpg';
import abstract2 from '/images/teotb/abstract2.jpg';
import abstract3 from '/images/teotb/abstract3.jpg';

import mens from '/images/teotb/mens.jpg';
import mens2 from '/images/teotb/mens2.jpg';
import mens3 from '/images/teotb/mens3.jpg';

import cpap from '/images/teotb/cpap.jpg';
import cpap2 from '/images/teotb/cpap2.jpg';
import cpap3 from '/images/teotb/cpap3.jpg';
import cpap4 from '/images/teotb/cpap4.jpg';
import cpap5 from '/images/teotb/cpap5.jpg';
import cpap6 from '/images/teotb/cpap6.jpg';
import cpap7 from '/images/teotb/cpap7.jpg';
import cpap8 from '/images/teotb/cpap8.jpg';
import cpap9 from '/images/teotb/cpap9.jpg';

import sky from '/images/teotb/sky.jpg';
import sky2 from '/images/teotb/sky2.jpg';
import sky3 from '/images/teotb/sky3.jpg';
</script>

<script>
import ImageToggle from '@/components/ImageToggle.vue';

export default {
  components: {
    ImageToggle,
  },
  data() {
    return {
      schets1ImageList: [
        schets,
        schets2,
        schets3,
      ],
      schets2ImageList: [
        schets4,
        schets5,
        schets6,
      ],
      schets3ImageList: [
        schets7,
        schets8,
        schets9,
      ],
      ink1ImageList: [
        ink,
        ink2,
        ink3,
      ],
      ink2ImageList: [
        ink4,
        ink5,
        ink6,
      ],
      loose1ImageList: [
        loose,
        loose2,
      ],
      loose2ImageList: [
        loose3,
        loose4,
      ],
      line1ImageList: [
        line,
        line2,
        line3,
      ],
      line2ImageList: [
        line4,
        line5,
      ],
      line3ImageList: [
        line6,
        line7,
        line8,
      ],
      line4ImageList: [
        line9,
        line10,
        line11,
      ],
      pencil1ImageList: [
        pencil,
        pencil2,
        pencil3,
        pencil4,
      ],
      pencil2ImageList: [
        pencil5,
        pencil6,
        pencil7,
      ],
      pencil3ImageList: [
        pencil8,
        pencil9,
        pencil10,
      ],
      color1ImageList: [
        color,
        color2,
        color3,
        color4,
      ],
      color2ImageList: [
        color5,
        color6,
        color7,
        color8,
      ],
      color3ImageList: [
        color9,
        color10,
        color11,
        color12,
      ],
      abstractImageList: [
        abstract,
        abstract2,
        abstract3,
      ],
      mensImageList: [
        mens,
        mens2,
        mens3,
      ],
      cpap1ImageList: [
        cpap,
        cpap2,
      ],
      cpap2ImageList: [
        cpap3,
        cpap4,
        cpap5,
        cpap6,
        cpap7,
        cpap8,
        cpap9
      ],
      skyImageList: [
        sky,
        sky2,
        sky3,
      ],
      ikImageList: [
        ik3,
        ik2,
        ik,
        ik4,
        ik5,
        ik6,
        ik7,
        ik8,
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
                text-3xl md:text-4xl 2xl:text-6xl">The Eye Of The Beholder</p>
      <p class="font-sans font-thin
                mb-3 md:mb-6
                text-md md:text-xl 2xl:text-2xl">Drawing as a tool to sharpen our perception of the world around us.
      </p>
      <p class="font-sans font-light leading-6 italic
                text-xs md:text-sm 2xl:text-base">[skills: Drawing, Observing, International]</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="ikImageList" />
        </div>
      </div>
      <p class="font-sans font-light italic text-right my-4
                text-xs md:text-sm">^ All the drawings I made during BSS23.</p>
    </div>

    <div class="hidden 2xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">In August 2023, I had the opportunity to participate in the <i>Bauhaus Summer School</i> in
        <i>Weimar</i>. The
        course, titled "The Eye of the Beholder - Drawing and Sketching Outdoors," was a two-week intensive program that
        allowed me to further develop my passion for drawing.
      </p>
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Throughout the course, I learned what true observation entails. In this digital age, we are
        constantly exposed to images, consuming and creating information at an unprecedented pace. I have been encouraged
        to re-sharpen my observation skills through a graphic approach. The technique of exploratory and unbiased drawing
        is a refined method to reconnect intensively with the structures around us.</p>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="schets1ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="schets2ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="schets3ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm"> &lt; First sketches where I learned about shading, <br /> shapes vs lines and
        perspective.</p>
    </div>

    <div class="hidden 2xl:block"></div>

    <div class="col-span-2 md:col-span-1 self-end">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm"> First time using Chinese ink to sketch. &gt;</p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="ink1ImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="ink2ImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block"></div>

    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="loose1ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="loose2ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm"> &lt; Paint with anything instead of a brush. <br /> I used branches and grass.
      </p>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">Through drawing, we truly experience our environment. Everything we perceive travels from our
        eyes, arm, and hand onto a sheet of paper. We hear the sounds around us, smell the aromas, and can even evoke
        precise memories years later when looking at our work. Drawing is a technique to identify and develop atmospheric
        qualities. I have learned to give space to the inconspicuous and undiscovered.</p>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">Line drawings - the method I liked most.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden 2xl:block"></div>

    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="line2ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="line4ImageList" />
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="line3ImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="line1ImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block"></div>

    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="pencil1ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="pencil2ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="pencil3ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm"> &lt; Pencil drawings of pretty places.
      </p>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light italic my-4 text-right
                text-xs md:text-sm"> I finally got the hang of using watercolors a bit. &gt;
      </p>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="color1ImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="color2ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="color3ImageList" />
        </div>
      </div>
    </div>

    <div class="hidden 2xl:block"></div>
    <div class="hidden 2xl:block"></div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light leading-6 
                text-sm md:text-base 2xl:text-lg
                mb-8">For ten days, I observed and drew alongside my fellow participants and two instructors in <i>Weimar</i>,
        <i>Jena</i>, and <i>Erfurt</i>. The focus was on perspective, image composition, color usage, and various media and materials.
        It was an unforgettable experience where I was able to truly rediscover my passion for the art of drawing.</p>
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm">Pencil, shading, panorama, abstract, people.</p>
    </div>

    <div class="hidden md:block"></div>
    <div class="hidden 2xl:block"></div>

    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="cpap1ImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="skyImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="abstractImageList" />
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="mensImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2">
      <div class="max-w-fit xl:h-min xl:overflow-hidden">
        <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
          <ImageToggle :images="cpap2ImageList" />
        </div>
      </div>
    </div>

    <div class="col-span-2 md:col-span-1">
      <p class="font-sans font-light italic my-4
                text-xs md:text-sm"> &lt; Flowers & vegetation.
      </p>
    </div>
  </div>

  <div class="flex justify-center">
    <router-link to="/teotb">
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
