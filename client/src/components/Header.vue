<template>
    <header class="site-header">
      <div class="container">
        <div class="logo">
          <img src="@/assets/logo_image.jpg" alt="InclusiM Logo" />
        </div>
        <nav class="nav-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/apps">Apps</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

<script>
export default {
  name: 'Header'
}
</script>

  <style scoped>
  .site-header {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 15px 0;
    position: fixed;
    top: 0;
    z-index: 1000;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
    height: 40px;
  }

  .nav-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .nav-menu li {
    margin-left: 25px;
  }

  .nav-menu a {
    text-decoration: none;
    color: #ee3f08;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }

  .nav-menu a:hover {
    background-color: #ee3f08;
    color: #fff;
  }
  </style>
