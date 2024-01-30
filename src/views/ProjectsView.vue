<script setup>
import Footer from "@/components/Footer.vue";

import cww from '/images/project/cww.jpg';
import dd from '/images/project/dd.jpg';
import teotb from '/images/project/teotb.jpg';
import tswne from '/images/project/tswne.jpg';
import uv from '/images/project/uv.jpg';
import vq from '/images/project/vq.jpg';
import mc from '/images/project/mc.jpg';
import j from '/images/project/j.jpg';
import otg from '/images/project/otg.jpg';
import cc from '/images/project/cc.jpg';
import df from '/images/project/df.jpg';
import eos from '/images/project/eos.jpg';
import tcd from '/images/project/tcd.jpg';
import td from '/images/project/td.jpg';
import cd from '/images/project/cd.jpg';
import c from '/images/project/c.jpg';
import ep from '/images/project/ep.jpg';
import ttbl from '/images/project/ttbl.jpg';
import sp from '/images/project/sp.jpg';
</script>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 12, title: 'To See With Naked Eyes', status: 'show', routerLink: '/tswne', src: tswne, alt: '-', tags: ['Done', 'Visual Storytelling', 'Color', 'Adobe InDesign', 'Observing', 'Photography', 'Book Design', '1BA MIND*'] },
        { id: 16, title: 'The Eye Of The Beholder', status: 'show', routerLink: '/teotb', src: teotb, alt: '-', tags: ['Done','Drawing', 'Observing', 'International', 'BSS'] },
        { id: 15, title: 'Unedited Views', status: 'show', routerLink: '/uv', src: uv, alt: '-', tags: ['Done','Visual Storytelling', 'Photography', 'Travel', 'Observing', 'International', 'Personal'] },
        { id: 21, title: 'The Twice-Burned Library', status: 'show', routerLink: '/ttbl', src: ttbl, alt: '-', tags: ['Done','2BA MIND*', 'Adobe InDesign', 'Adobe Photoshop', 'Book Design', 'Typography']},
        { id: 4, title: 'On The Grid', status: 'show', routerLink: '/otg', src: otg, alt: '-', tags: ['Done','Adobe Photoshop', 'Organisation', 'Lasercutting', 'Observing', 'Spatial Thinking', 'Architecture', 'Vectorworks', 'Ir. Arch.'] },
        { id: 11, title: 'Drawing Data', status: 'show', routerLink: '/dd', src: dd, alt: '-', tags: ['Done','Visual Storytelling', 'Organisation', 'Datavisualization', 'Drawing', 'Observing', 'Color', 'Infographic', '1BA MIND*'] },
        { id: 19, title: 'Connect', status: 'show', routerLink: '/c', src: c, alt: '-', tags: ['Done','2BA MIND*', 'Adobe Illustrator', 'Datavisualization', 'Infographic', 'International', 'Lasercutting', 'Organization', 'Travel', 'UV Printing'] },
        { id: 3, title: 'Joined', status: 'show', routerLink: '/j', src: j, alt: '-', tags: ['Done','Lasercutting', 'Observing', 'Spatial Thinking', 'Architecture', 'Teamwork', 'Vectorworks', 'Adobe Photoshop', 'Ir. Arch.'] },
        { id: 22, title: 'Extinct Plants', status: 'show', routerLink: '/ep', src: ep, alt: '-', tags: ['Done','2BA MIND*', 'Adobe Illustrator', 'Datavisualization', 'Infographic', 'Color', 'Lasercutting', 'UV Printing'] },
        { id: 10, title: 'Studio Phi', status: 'show', routerLink: '/sp', src: sp, alt: '-', tags: ['Done','Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator', 'Teamwork', 'Architecture', 'Webdesign', 'Book Design', 'Work Experience', 'Work']},
        { id: 20, title: 'Collective Data', status: 'show', routerLink: '/cd', src: cd, alt: '-', tags: ['Done','2BA MIND*', 'Datavisualization', 'Organization', 'Spatial Thinking', 'Teamwork'] },

        { id: 9, title: 'Cooking Without Words', status: 'show', routerLink: '/cww', src: cww, alt: '-', tags: ['Procreate', 'Instructional Design', 'Drawing', '1BA MIND*'] },
        { id: 8, title: 'Elektrodata Objects: Solar', status: 'show', routerLink: '/eos', src: eos, alt: '-', tags: ['Lasercutting', 'UV Printing', 'Datavisualization', 'Teamwork', '1BA MIND*'] },
        { id: 6, title: 'TouchDesigner', status: 'show', routerLink: '/td', src: td, alt: '-', tags: ['TouchDesigner', 'SpatialComputingLab', 'Observing', 'Spatial Thinking', '1BA MIND*'] },
        { id: 5, title: 'Collected Collections', status: 'show', routerLink: '/cc', src: cc, alt: '-', tags: ['Visual Storytelling', 'Photography', 'Adobe Photoshop', 'Organisation', '1BA MIND*'] },
        { id: 2, title: 'Mass Connections', status: 'show', routerLink: '/mc', src: mc, alt: '-', tags: ['Milling Machine', 'Architecture', 'Spatial Thinking', 'Arch.'] },
        { id: 14, title: 'The Cosmic Dance', status: 'show', routerLink: '/tcd', src: tcd, alt: '-', tags: ['Adobe InDesign', 'Typography', '1BA MIND*'] },
        { id: 13, title: 'Visual Quest', status: 'show', routerLink: '/vq', src: vq, alt: '-', tags: ['Arch.', 'Drawing', 'Observing'] },
        { id: 7, title: 'Design Fiction', status: 'edit', routerLink: '/df', src: df, alt: '-', tags: ['Design Fiction', 'Drawing', 'Brainstorm', 'Infographic', 'Visual Storytelling','1BA MIND*'] },


        { id: 1, title: 'Drawing, My Second Language', status: 'edit', routerLink: '/', src: cww, alt: '-', tags: ['Visual Storytelling', 'Drawing', 'Observing', 'Personal'] },
        { id: 18, title: 'Mapping Privilege', status: 'edit', routerLink: '/', src: cww, alt: '-', tags: ['2BA MIND*'] },
        { id: 17, title: 'Artistic Project: Existenz', status: 'edit', routerLink: '/', src: cww, alt: '-', tags: ['2BA MIND*'] },
      ],
      currentFilter: 'all',
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projects.filter(project => project.status === 'show');
      } else {
        return this.projects.filter(project => project.tags.includes(this.currentFilter) && project.status === 'show');
      }
    },
  },
  methods: {
    filterProjects(tag) {
      this.currentFilter = tag;
    },
    navigateToProject(id) {
      // You can add additional logic here before navigating to the project page
      // For example, fetching project details based on the ID
      this.$router.push({ name: 'project', params: { id } });
    },
  },
};
</script>

<template>
  <div>
    <div class="mx-8 md:mx-16 2xl:mx-24">
      <div class="grid">
        <div class="mt-8 md:mt-16 2xl:mt-24">
          <p class="font-serif mb-8
                  text-3xl md:text-4xl 2xl:text-6xl">My projects at a glance</p>
          <p class="font-sans font-light leading-6 
                  md:w-96 xl:w-1/2
                  text-sm md:text-base 2xl:text-lg
                  mb-8">This overview provides an insight into the projects I have had the opportunity to work on in
            recent years. Architectural drawings in <i>Weimar</i>, thoughtful color studies, personal projects, academic data
            visualizations, whether torn books or not, ... all contribute to my learning process as a designer. Each project
            has allowed me to better master specific skills.
          </p>
          <p class="font-sans font-light leading-6 
                  md:w-96 xl:w-1/2
                  text-sm md:text-base 2xl:text-lg
                  mb-8 md:mb-16 2xl:mb-24">With the buttons below, you can filter the projects based on objectives or based on
            skills. I hope you enjoy exploring through my projects and see what I have learned so far!
          </p>
        </div>
      </div>

      <!-- Project filter buttons -->
      <div class="mb-8 md:mb-16 2xl:mb-24">

        <p class="font-sans font-medium 
                      text-lg md:text-xl 2xl:text-2xl
                      mb-4 md:mb-6 2xl:mb-8">PROJECT FILTERS</p>

        <!-- filter based on objective -->
        <div class="flex flex-row xl:w-1/2
                    font-sans font-light mb-4
                    text-xs md:text-sm 2xl:text-base">
          <p class="italic">[</p>
          <div class="flex flex-row">
                <p class="italic ml-4 mb-2">I'm currently working on some project pages, click here to filter those out:</p>
                <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === 'Done' }" 
                    @click="filterProjects('Done')">Finished webpages</button>
          </div>
        </div>

        <!-- filter based on objective -->
        <div class="flex flex-row xl:w-1/2
                    font-sans font-light mb-4
                    text-xs md:text-sm 2xl:text-base">
          <p class="italic">[</p>
          <div>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === 'Arch.' }" 
                    @click="filterProjects('Arch.')">Arch.</button>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === 'Ir. Arch.' }" 
                    @click="filterProjects('Ir. Arch.')">Ir. Arch.</button>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === '1BA MIND*' }" 
                    @click="filterProjects('1BA MIND*')">1BA MIND*</button>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === '2BA MIND*' }" 
                    @click="filterProjects('2BA MIND*')">2BA MIND*</button>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === 'Work' }" 
                    @click="filterProjects('Work')">Work</button>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === 'BSS' }" 
                    @click="filterProjects('BSS')">BSS</button>
            <button class="link italic ml-4 mb-2"
                    :class="{ active: currentFilter === 'Personal' }" 
                    @click="filterProjects('Personal')">Personal</button>
          </div>
        </div>
        
        <!-- filter based on skills -->
        
        <div class="flex flex-row xl:w-1/2
                    font-sans font-light mb-4
                    text-xs md:text-sm 2xl:text-base">
          <p class="italic">[</p>
          <div>          
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Adobe Illustrator' }" 
                    @click="filterProjects('Adobe Illustrator')">Adobe Illustrator</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Adobe InDesign' }" 
                    @click="filterProjects('Adobe InDesign')">Adobe InDesign</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Adobe Photoshop' }" 
                    @click="filterProjects('Adobe Photoshop')">Adobe Photoshop</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Architecture' }" 
                    @click="filterProjects('Architecture')">Architecture</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Book Design' }" 
                    @click="filterProjects('Book Design')">Book Design</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Brainstorm' }" 
                    @click="filterProjects('Brainstorm')">Brainstorm</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Color' }" 
                    @click="filterProjects('Color')">Color</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Datavisualization' }" 
                    @click="filterProjects('Datavisualization')">Datavisualization</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Design Fiction' }" 
                    @click="filterProjects('Design Fiction')">Design Fiction</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Drawing' }" 
                    @click="filterProjects('Drawing')">Drawing</button>

            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Infographic' }" 
                    @click="filterProjects('Infographic')">Infographic</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Instructional Design' }" 
                    @click="filterProjects('Instructional Design')">Instructional Design</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'International' }" 
                    @click="filterProjects('International')">International</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Lasercutting' }" 
                    @click="filterProjects('Lasercutting')">Lasercutting</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Milling Machine' }" 
                    @click="filterProjects('Milling Machine')">Milling Machine</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Observing' }" 
                    @click="filterProjects('Observing')">Observing</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Organisation' }" 
                    @click="filterProjects('Organisation')">Organisation</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Photography' }" 
                    @click="filterProjects('Photography')">Photography</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Procreate' }" 
                    @click="filterProjects('Procreate')">Procreate</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Spatial Thinking' }" 
                    @click="filterProjects('Spatial Thinking')">Spatial Thinking</button>

            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'SpatialComputinglab' }" 
                    @click="filterProjects('SpatialComputinglab')">SpatialComputinglab</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Teamwork' }" 
                    @click="filterProjects('Teamwork')">Teamwork</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'TouchDesigner' }" 
                    @click="filterProjects('TouchDesigner')">TouchDesigner</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Travel' }" 
                    @click="filterProjects('Travel')">Travel</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Typography' }" 
                    @click="filterProjects('Typography')">Typography</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'UV Printing' }" 
                    @click="filterProjects('UV Printing')">UV Printing</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Vectorworks' }" 
                    @click="filterProjects('Vectorworks')">Vectorworks</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Visual Storytelling' }" 
                    @click="filterProjects('Visual Storytelling')">Visual Storytelling</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Webdesign' }" 
                    @click="filterProjects('Webdesign')">Webdesign</button>
            <button class="link italic ml-4 mb-2" 
                    :class="{ active: currentFilter === 'Work Experience' }" 
                    @click="filterProjects('Work Experience')">Work Experience</button>
          </div>
        </div>

        <div class="flex flex-row 2xl:w-1/2
                    font-sans font-light mb-4
                    text-xs md:text-sm 2xl:text-base">
          <p class="italic">[</p>
          <button class="link italic ml-4 mb-2
                      text-xs md:text-sm 2xl:text-base"
                  :class="{ active: currentFilter === 'all' }" 
                  @click="filterProjects('all')">See all again</button>
        </div>
      </div>

      <!-- Gallery -->
      <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-4 gap-3 md:gap-5">
        <router-link v-for="project in filteredProjects" :key="project.id" :to="project.routerLink">
          <div class="max-w-fit xl:h-min xl:overflow-hidden">
            <div class="xl:hover:scale-105 xl:transition-all xl:duration-500 xl:cursor-pointer">
              <img :src="project.src" :alt="project.alt" @click="navigateToProject(project.id)" />
            </div>
          </div>
          <div class="font-sans font-thin
                  text-sm md:text-base 2xl:text-lg
                  mb-4 mt-2" >{{ project.title }}</div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <router-link to="/projects">
      <button type="button" 
              class="flex flex-col items-center m-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="-rotate-90" height="1.5em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        <p class="font-sans font-thin
                  mt-2 md:mt-4
                  text-xs md:text-base">Back to top.</p>
      </button>
    </router-link>
    <router-link to="/">
      <button type="button" 
              class="flex flex-col items-center m-8">
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
        <p class="font-sans font-thin
                  mt-2 md:mt-4
                  text-xs md:text-base">To Home.</p>
      </button>
    </router-link>
  </div>

  <Footer></Footer>

</template>

<style>
.active {
  font-weight: bold;
}
</style>

