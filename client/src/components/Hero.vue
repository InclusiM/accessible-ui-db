<!-- src/components/Hero.vue -->
<template>
    <section class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <h1>Welcome to InclusiM</h1>
        <p>Explore the accessibility features of all your favorite apps.</p>
        <button @click="scrollToSection('resources')">Get Started</button>
      </div>
    </section>
  </template>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollToSection (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 90vh;
  background: url('~@/assets/home_img.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding-top: 60px; /* offset for fixed header */
}
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
  }
  .hero h1 {
    font-size: 4rem;
    font-family: 'Inter';
    margin-bottom: 20px;
  }
  .hero p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }
  .hero button {
    background: #fff;
    color: #ee3f08;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  .hero button:hover {
    background: #f0f0f0;
  }
  </style>
