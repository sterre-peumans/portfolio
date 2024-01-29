<template>
  <div class="relative">
    <img :src="currentImage" alt="Clickable Image" @click="toggleImage" />
    <p class="font-sans text-xs absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-white p-1 md:p-3">
      {{ currentIndex + 1 }} / {{ images.length }} 
    </p>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    toggleImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

