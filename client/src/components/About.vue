<template>
  <div class="about-page">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="title">About Us</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Mission Section -->
      <section class="section">
        <h2 class="section-title">Our Mission</h2>
        <div class="mission-box">
          <p class="mission-text">
            Our mission is to empower every individual by raising awareness of accessibility needs, providing tailored support for those who rely on assistive features, and advocating for inclusive design principles that ensure truly barrier-free digital experiences for all.
          </p>
        </div>
      </section>

      <!-- Why We're Here Section -->
      <section class="section">
        <h2 class="section-title">Why We're Here</h2>
        
        <div class="text-content">
          <p>
            We believe in the power of education. We equip individuals and teams with the knowledge and tools they need to understand accessibility requirements and implement practical solutions, ensuring that inclusive design becomes standard practice.
          </p>
          
          <p>
            We believe technology should unlock potential and eliminate barriers. Our work is powered by the conviction that inclusive innovation enables everyone to fully participate, contribute, and thrive in the digital world.
          </p>
        </div>
        
        <!-- Core Values - Minimal Version -->
        <div class="values-grid">
          <div class="value-card value-innovation">
            <h3 class="value-title">Transparency</h3>
            <p class="value-text">We share clear, honest information and progress to build trust and drive accountability.</p>
          </div>
          
          <div class="value-card value-excellence">
            <h3 class="value-title">Education</h3>
            <p class="value-text">We provide concise, actionable guidance that empowers everyone to implement accessibility best practices.</p>
          </div>
        </div>
      </section>
      
      <!-- Simple CTA -->
      <section class="cta-section">
        <a href="#" class="cta-button">
          Get in Touch
        </a>
      </section>
    </main>


  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
/* Base styles */
.about-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.5;
  min-height: 100vh;
  background-color: #fff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: linear-gradient(to right, #0d9488, #0f766e);
  color: white;
  padding: 24px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: 500;
  margin: 0;
}

/* Main content */
.main-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 20px;
  font-weight: 500;
  color: #0f766e;
  margin-bottom: 20px;
}

/* Mission box */
.mission-box {
  background-color: #fff;
  border-left: 4px solid #0d9488;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.mission-text {
  font-size: 18px;
  margin: 0;
}

/* Text content */
.text-content p {
  margin-bottom: 16px;
  font-size: 16px;
}

/* Values grid */
.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 30px;
}

@media (min-width: 640px) {
  .values-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.value-card {
  background-color: #f9fafb;
  padding: 20px;
  border-radius: 4px;
  border-top: 2px solid;
}

.value-innovation {
  border-color: #0d9488;
}

.value-excellence {
  border-color: #0d9488;
}

.value-title {
  font-size: 18px;
  font-weight: 500;
  color: #0f766e;
  margin-top: 0;
  margin-bottom: 10px;
}

.value-text {
  color: #4b5563;
  margin: 0;
}

/* CTA section */
.cta-section {
  text-align: center;
  margin-top: 40px;
}

.cta-button {
  display: inline-block;
  background-color: #0d9488;
  color: white;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #0f766e;
}

/* Footer */
.footer {
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
  margin-top: 60px;
}

.copyright {
  font-size: 14px;
  color: whitesmoke;
  text-align: center;
  margin: 0;
}
</style>