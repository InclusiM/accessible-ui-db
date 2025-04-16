<!-- src/components/About.vue -->
<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page.</p>
    
    <!-- Server status section -->
    <div class="server-status">
      <h2>Server Status</h2>
      <p>Status: {{ serverStatus.serverStatus }}</p>
      <p v-if="serverStatus.externalStatus">External Status: {{ serverStatus.externalStatus.status }}</p>
      <p v-if="serverStatus.error" class="error">{{ serverStatus.error }}</p>
      
      <!-- Raw JSON display -->
      <div class="raw-json">
        <h3>Server Status Data:</h3>
        <pre>{{ JSON.stringify(serverStatus, null, 2) }}</pre>
      </div>

      <!-- UI Screenshots Data -->
      <div class="raw-json">
        <h3>UI Screenshots Data:</h3>
        <pre>{{ JSON.stringify(uiScreenshots, null, 2) }}</pre>
        <p v-if="uiError" class="error">{{ uiError }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UIService from '../UIService'

export default {
  name: 'About',
  data() {
    return {
      serverStatus: {},
      uiScreenshots: [],
      uiError: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/api/UIscreenshots')
      this.serverStatus = response.data
    } catch (error) {
      this.serverStatus = { error: 'Failed to fetch server status' }
    }

    try {
      this.uiScreenshots = await UIService.getUIScreenshots()
    } catch (error) {
      this.uiError = 'Failed to fetch UI screenshots'
    }
  }
}
</script>

<style scoped>
.about {
  padding: 320px;
  text-align: center;
}

.server-status {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error {
  color: red;
}

/* Add styles for JSON display */
.raw-json {
  margin-top: 20px;
  text-align: left;
}

.raw-json pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
