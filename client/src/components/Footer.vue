<template>
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; 2025 InclusiM. All rights reserved.</p>
      </div>
    </footer>
  </template>

<script>
export default {
  name: 'Footer'
}
</script>
  <style scoped>
  .site-footer {
    background: #333;
    color: #fff;
    padding: 40px 0;
    text-align: center;
  }
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .footer-links {
    margin-bottom: 20px;
  }
  .footer-links a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;
  }
  .footer-links a:hover {
    color: #007bff;
  }
  .site-footer {
  background: #333;
  color: #fff;
  padding: 40px 0;
  text-align: center;
  margin-top: 270px; /* Adjust this value to move the footer down */
}

  </style>
