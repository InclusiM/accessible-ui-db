<!-- src/components/Hero.vue -->
<template>
  <section class="hero" id="home">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1> 
        <img class=logo src="../assets/logo.png">
      </h1>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
.hero {
position: relative;
height: 91vh;
background: url('~@/assets/home_img.jpg') no-repeat center center/cover;
display: flex;
align-items: center;
justify-content: center;
color: whitesmoke;
text-align: center;
padding-top: 92px; /* offset for fixed header */
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
  font-size: 7rem;
  font-family: 'Open Sans';
  margin-bottom: 10px;
  margin-top: -20px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, sans-serif;
}
.hero p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  margin-top: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, sans-serif;
}
.hero button {
  background:#0e47a1;
  color: whitesmoke;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, sans-serif;
}
.hero button:hover {
  background: #fd4e38;
}
.logo {
 display: flex;
 justify-content: center;
 width: 50%;
 align-items: top;
}
</style>