<template>
  <div>
    <div v-if="isLoading">Loading items...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="entry in entries" :key="entry.id">{{ entry.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch('/api/entry');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.items = await response.json();
      } catch (err) {
        this.error = 'Failed to load items.';
        console.error('Error fetching data:', err);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
