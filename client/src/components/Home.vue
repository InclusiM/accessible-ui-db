<!-- src/components/Home.vue -->
<template>
    <div>
      <Hero />
      <Resources />
    </div>
  </template>

<script>
import Hero from './Hero.vue'
import Resources from './Resources.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Resources
  }
}
</script>

  <style scoped>
  /* Page-specific styles */
  </style>
