<script setup>
import sterre from '/images/sterre.jpg';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex 
              flex-col md:flex-row
              mx-8 md:mx-16 2xl:mx-24">
    <img class="h-full
                w-52 md:w-64 2xl:w-80
                mb-8 md:mb-16 2xl:mb-24
                md:mr-16 2xm:md-24" :src="sterre" alt="">
    <div>
      <div class="md:w-96 2xl:w-1/2">
        <p class="font-serif mb-8
                  text-3xl md:text-4xl 2xl:text-6xl">Welcome, hello, hi,</p>
        <p class="font-sans font-light leading-6 
                  text-sm md:text-base 2xl:text-lg
                  mb-8 md:mb-16 2xl:mb-24">I am Sterre, a creative individual who enjoys delving into a wide range of
          projects. Last summer, I started working as a graphic designer at Studio Phi, an architecture studio, in Leuven. This
          experience gave me the opportunity to start as a student entrepreneur. I’m currently studying at LUCA School of
          Arts in Brussels and doing some design freelance jobs on the side. I’m also working on my Artistic Project in
          partnership with Existenz, a dedicated group of student engineers and architects at KU Leuven. Here, I contribute
          to the promotion of our projects and collaborate on the realization of the architecture magazine called Unité.</p>
      </div>
      <div>
        <ol class="relative border-s border-black">
          <li class="mb-8 md:mb-16 2xl:mb-24
                    ms-8 md:ms-16 2xl:ms-24">
            <div class="absolute bg-black rounded-full mt-2
                        w-2 md:w-3
                        h-2 md:h-3
                        -start-1 md:-start-1.5"></div>
            <p class="font-sans font-medium 
                      text-lg md:text-xl 2xl:text-2xl
                      mb-4 md:mb-6 2xl:mb-8">STUDIES</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Graphic Design - Media & Information Design <br />@ LUCA School of
              Arts Brussel</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2022 - NOW</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Erasmus+ / Drawing & Sketching Outdoors <br />@ Bauhaus University
              Weimar, Germany</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">AUGUST 2023</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">1st year of Architecture @ UHasselt</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2019-2020</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">1st and 2nd year of Engineering Architecture <br />@ KU Leuven</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2020 - 2022</p>
          </li>
          <li class="mb-8 md:mb-16 2xl:mb-24
                    ms-8 md:ms-16 2xl:ms-24">
            <div class="absolute bg-black rounded-full mt-2
                        w-2 md:w-3
                        h-2 md:h-3
                        -start-1 md:-start-1.5"></div>
            <p class="font-sans font-medium 
                      text-lg md:text-xl 2xl:text-2xl
                      mb-4 md:mb-6 2xl:mb-8">WORK</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Student-Entrepeneur Graphic Designer</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">SINCE 2023</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Graphic Designer @ Studio Phi Architects</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">SINCE 2023</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Student Catering Worker @ McDonald’s Bilzen</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2019 - 2022</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Student Office Worker @ Prato NV</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2016 - 2018</p>
          </li>
          <li class="mb-8 md:mb-16 2xl:mb-24
                    ms-8 md:ms-16 2xl:ms-24">
            <div class="absolute bg-black rounded-full mt-2
                        w-2 md:w-3
                        h-2 md:h-3
                        -start-1 md:-start-1.5"></div>
            <p class="font-sans font-medium 
                      text-lg md:text-xl 2xl:text-2xl
                      mb-4 md:mb-6 2xl:mb-8">TRAININGS</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">'Instructeur in het jeugdwerk’ @ EJV</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">COURSE 2022</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">‘Hoofdanimator in het jeugdwerk’ @ EJV</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">CERTIFICATE 2019</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">‘Animator in het jeugdwerk’ @ EJV</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">CERTIFICATE 2017</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Theatre @ Art Academy Lanaken</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2009 - 2016</p>
            <p class="font-sans font-light
                      text-sm md:text-base 2xl:text-lg">Music @ Art Academy Lanaken</p>
            <p class="font-sans font-thin italic pl-8
                      text-sm md:text-base 2xl:text-lg
                      mb-4 md:mb-6 2xl:mb-8">2010 - 2015</p>
          </li>
          <li class="mb-8 md:mb-16 2xl:mb-24
                      ms-8 md:ms-16 2xl:ms-24">
            <div class="absolute bg-black rounded-full mt-2
                          w-2 md:w-3
                          h-2 md:h-3
                          -start-1 md:-start-1.5"></div>
            <p class="font-sans font-medium 
                        text-lg md:text-xl 2xl:text-2xl
                        mb-4 md:mb-6 2xl:mb-8">INTERESTS</p>
            <p class="font-sans font-light
                        text-sm md:text-base 2xl:text-lg">Designing, drawing, all things creative, cooking, plants, music,
              reading, traveling & being enthusiastic.</p>
          </li>
          <li class="mb-8 md:mb-16 2xl:mb-24
                      ms-8 md:ms-16 2xl:ms-24">
            <div class="absolute bg-black rounded-full mt-2
                          w-2 md:w-3
                          h-2 md:h-3
                          -start-1 md:-start-1.5"></div>
            <p class="font-sans font-medium 
                        text-lg md:text-xl 2xl:text-2xl
                        mb-4 md:mb-6 2xl:mb-8">CONTACT</p>
            <p class="font-sans font-light
                        text-sm md:text-base 2xl:text-lg">Feel free to send me an email: <br /><a class="underline" href="mailto:sterre.peumans@gmail.com">sterre.peumans@gmail.com</a></p>
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
      <router-link to="/about">
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

<style>
</style>
