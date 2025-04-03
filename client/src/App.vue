<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <!-- This is where the routed page will be rendered -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Global styles */
body, html {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  scroll-behavior: smooth;
}
</style>
