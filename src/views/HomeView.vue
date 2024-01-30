<script setup>
import { RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue";
</script>

<script>
import achtergrond from '/images/achtergrond.jpg';

export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["I do graphic design", "I draw a lot", "I make datavisualisations", "I capture stunning views", "I like all things creative"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 500,
      displayTextArrayIndex: 0,
      charIndex: 0,
      achtergrond:achtergrond,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 100);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<template>
  <div class="background first sticky"></div>

  <div class="section bg-white">
    <div 
    class="p-8 md:p-16 2xl:p-24">
    <p class="font-sans font-thin 
              text-2xl md:text-5xl 2xl:text-6xl">Hi, I'm Sterre</p>
    <p class="font-serif font-normal
              text-3xl md:text-6xl 2xl:text-8xl 
              mt-4 md:mt-8 2xl:mt-10 
              ml-10 md:ml-16 2xl:ml-40">
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </p>
  </div>
  </div>

  <div class="background second sticky"></div>

  <div class="section  bg-white">
    <div class="p-8 md:p-16 2xl:p-24">
      <p
      class="font-sans font-thin
            text-2xl md:text-5xl 2xl:text-6xl">Check out some of my projects.</p>
      <router-link to="/uv">
        <p
        class="font-serif font-normal link 
              text-3xl md:text-6xl 2xl:text-8xl 
              mt-4 md:mt-8 2xl:mt-10 
              ml-10 md:ml-16 2xl:ml-40">Unedited <i>Views</i></p>
      </router-link>
      <router-link to="/tswne">
        <p
          class="font-serif font-normal link
                text-3xl md:text-6xl 2xl:text-8xl 
                mt-4 md:mt-8 2xl:mt-10 
                ml-10 md:ml-16 2xl:ml-40"> To <i>See</i> With naked Eyes</p>
      </router-link>
      <router-link to="/dd">
        <p
        class="font-serif font-normal link 
                text-3xl md:text-6xl 2xl:text-8xl 
                mt-4 md:mt-8 2xl:mt-10 
                ml-10 md:ml-16 2xl:ml-40">Drawing <i>Data</i></p>
      </router-link>
      <router-link to="/projects">
        <p
          class="font-sans font-thin link italic 
                text-sm md:text-xl 2xl:text-3xl 
                mt-6 md:mt-10 2xl:mt-14 
                ml-10 md:ml-16 2xl:ml-40"> Click here if you want to <b>see all my work.</b></p>
      </router-link>
    </div>
  </div>

  <div class="background third sticky"></div>

  <div class="section bg-white">
    <div 
    class="max-w-screen-md
          p-8 md:p-16 2xl:p-24 ">
      <p class="font-sans font-thin 
                text-2xl md:text-5xl 2xl:text-6xl">Get in touch with me.</p>
      <p  
        class="font-serif font-normal link 
                text-xl md:text-3xl 2xl:text-6xl 
                mt-4 md:mt-8 2xl:mt-10 
                ml-10 md:ml-16 2xl:ml-40"><a href="mailto:sterre.peumans@gmail.com">sterre.peumans@gmail.com</a></p>
    </div>

    <div class="flex justify-center">
      <router-link to="/">
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
  </div>

</template>

<style lang="scss" scoped>
// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 2rem;
  color: black;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: black;
  }
}

@-moz-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: black;
  }
}

@-webkit-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: black;
  }
}

@-ms-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: black;
  }
}

@-o-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: black;
  }
}

@media (min-width: 768px) {
  .blinking-cursor {
    font-size: 3rem;
  }
}

@media (min-width: 1536px) {
  .blinking-cursor {
    font-size: 5rem;
  }
}

// Cursor blinking CSS Ends...
</style>

<style>
.background {
  /* width: 100%;
  min-height: 100vh; */
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-position: center;
  background-size: cover;
  top: 0;
}

.first {
  background-image: url(/images/achtergrond.jpg);
}
.second {
  background-image: url(/images/achtergrond2.jpg);
}
.third {
  background-image: url(/images/achtergrond3.jpg);
}

.sticky {
  width: 100vw;
  height: 100vh;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 0;
}

.section {
  position: relative;
  width: 100%;
  z-index: 1;
}

</style>