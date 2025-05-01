<template>
  <div class="contact-page">
    <header class="header">
      <h1 class="title">Contact Us</h1>
    </header>
    
    <main class="main-content">
      <section class="team-section">
        <h2 class="section-title">Our Team</h2>
        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
            <div class="team-image-container">
              <img :src="member.image" :alt="member.name" class="team-image">
            </div>
            <div class="team-info">
              <h3 class="team-name">{{ member.name }}</h3>
              <p class="team-position">{{ member.position }}</p>
              <p class="team-bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Contact form section -->
      <section class="contact-section">
        <div class="form-container">
          <h2 class="section-title">Comment Submission</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <!-- Form fields -->
            <div class="form-row">
              <div class="form-group">
                <label for="App">App</label>
                <input type="text" id="App" name="App">
              </div>
              <div class="form-group">
                <label for="Page">Page</label>
                <input type="text" id="Page" name="Page">
              </div>
            </div>
            <div class="form-group">
              <label for="Subject">Subject</label>
              <input type="Subject" id="Subject" name="Subject">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
        
        <div class="info-container">
          <h2 class="section-title">Contact Information</h2>
          <div class="contact-card">
    <div class="contact-item">
      <span class="icon">📞</span>
      <a href="tel:+12075551234" class="contact-link">(860) 345-667</a>
    </div>
    <div class="contact-item">
      <span class="icon">✉️</span>
      <a href="mailto:support@inclusim.com" class="contact-link">support@inclusim.com</a>
    </div>
  </div>
        </div>
      </section>
    </main>
    

  </div>
</template>

<script setup>
import { ref } from 'vue';

// Team member data
const teamMembers = ref([
  {
    name: 'Jonny Hughes',
    position: 'Backend Development',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image000000.jpg-RA7u0kexNUGHAzCCLiAV6qrzA5ocor.jpeg',
    bio: 'Jonny is our backend developer with experience in Javascript, ....'
  },
  {
    name: 'Yixin (Agnes) Li',
    position: 'Backend and Frontend Connection',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagejpeg_0.jpg-VpArwK91KT25Jaeu1AQTh50Bh9lyD9.jpeg',
    bio: 'Agnes has an expertise in....'
  },
  {
    name: 'Maya Sutton-Hall',
    position: 'Frontend Development',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yu.JPG-yjrzX8YxSjFflhJGLyLulgVIrhoMne.jpeg',
    bio: 'Maya...'
  },
  {
    name: 'Yamin Ahmed',
    position: 'Artificial Intelligence / Machine Learning Operations Engineer',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yamin-tqU7go3nsGKlUuLTQ1ZYM1RS6oFFXo.jpeg',
    bio: 'Yamin has....'
  },
  {
    name: 'Dr. Stacy Doore',
    position: 'Professor of Computer Science',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stacy-79zHv6IO1QkSSlbBI8uloRyVAwz5NS.webp',
    bio: 'Professor Doore has been....'
  }
]);

// Form submission logic
const submitForm = () => {
  console.log('Form submitted');
};
</script>

<style>
/* Base styles */
html, body {
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

/* Layout */
.contact-page {
  max-width: 100%;
  overflow-x: hidden;
}

.header {
  background: linear-gradient(to right, #006cff, #0e47a1);
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-container {
  max-width: 360px;
  margin: 2rem auto;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
}

.contact-card {
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
  color: #0e47a1;
}

.contact-link {
  color: #0e47a1;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.4;
}

.contact-link:hover {
  text-decoration: underline;
}


.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #006cff;
  margin-bottom: 1rem;
}

/* Team section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.team-card {
  background: white;
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #006cff;
}

.team-image-container {
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
}

.team-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-info {
  padding: 1rem;
}

.team-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.team-position {
  font-size: 0.875rem;
  color: #0e47a1;
  margin: 0 0 0.5rem 0;
}

.team-bio {
  font-size: 0.875rem;
  margin: 0;
}

/* Contact section */
.contact-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr 1fr;
  }
}

.form-container, .info-container {
  background: white;
  border-radius: 0.375rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.submit-button {
  background: linear-gradient(to right, #0e47a1,#0e47a1 );
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
}

/* Footer */
.footer {
  background: linear-gradient(to right, #0f766e, #115e59);
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.875rem;
}
</style>