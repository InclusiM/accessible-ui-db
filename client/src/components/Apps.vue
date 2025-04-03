<template>
    <div class="apps-page">
      <div class="filter-container">
        <button @click="toggleDropdown" class="filter-button">
          Filter by:
        </button>
        <div v-if="dropdownOpen" class="dropdown">
          <label class="filter-label" v-for="filter in filters" :key="filter.value">
            <input type="checkbox" :value="filter.value" v-model="selectedFilters" />
            <span class="label-text">{{ filter.label }}</span>
          </label>
        </div>
      </div>
      <div class="apps-grid">
        <div v-for="app in filteredApps" :key="app.id" class="app-item">
          <img :src="app.image" :alt="app.name" />
          <p>{{ app.name }}</p>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'Apps',
  data () {
    return {
      dropdownOpen: false,
      selectedFilters: [],
      filters: [
        { value: 'example1', label: 'Example 1' },
        { value: 'example2', label: 'Example 2' },
        { value: 'example3', label: 'Example 3' }
      ],
      apps: [
        { id: 1, name: 'App 1', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 2, name: 'App 2', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 3, name: 'App 3', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 4, name: 'App 4', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 5, name: 'App 5', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 6, name: 'App 6', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 7, name: 'App 7', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 8, name: 'App 8', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 9, name: 'App 9', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 10, name: 'App 10', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 11, name: 'App 11', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 12, name: 'App 12', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 13, name: 'App 13', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 14, name: 'App 14', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 15, name: 'App 15', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 16, name: 'App 16', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 17, name: 'App 17', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 18, name: 'App 18', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 19, name: 'App 19', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 20, name: 'App 20', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 21, name: 'App 21', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 22, name: 'App 22', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 23, name: 'App 23', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 24, name: 'App 24', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' },
        { id: 25, name: 'App 25', category: 'example1', image: 'https://via.placeholder.com/300x600?text=App+One' },
        { id: 26, name: 'App 26', category: 'example2', image: 'https://via.placeholder.com/300x600?text=App+Two' },
        { id: 27, name: 'App 27', category: 'example3', image: 'https://via.placeholder.com/300x600?text=App+Three' }
        // ... additional app data
      ]
    }
  },
  computed: {
    filteredApps () {
      if (this.selectedFilters.length === 0) {
        return this.apps
      }
      return this.apps.filter(app => this.selectedFilters.includes(app.category))
    }
  },
  methods: {
    toggleDropdown () {
      this.dropdownOpen = !this.dropdownOpen
    }
  }
}
</script>

  <style scoped>
  .apps-page {
    padding: 120px 20px;
  }

  .filter-container {
    margin-bottom: 20px;
    text-align: center;
    position: relative;
    display: inline-block;
  }

  .filter-button {
    padding: 8px 12px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  /* Dropdown menu styling */
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .filter-label {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .filter-label input {
    margin-right: 5px;
  }

  .apps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .app-item {
    background: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    transition: transform 0.3s;
  }

  .app-item:hover {
    transform: translateY(-5px);
  }

  .app-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  </style>
