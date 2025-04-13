<template>
    <div class="apps-page">
      <!-- Filter Toggle Button -->
      <button class="filter-toggle" @click="toggleFilters">Filter:</button>

      <!-- Filters Sidebar: visible when showFilters is true -->
      <div v-if="showFilters" class="filters-panel">
        <div
          v-for="group in filterGroups"
          :key="group.name"
          class="filter-group"
        >
          <div class="header-container">
            <h4 class="filter-header">{{ group.label }}</h4>
            <!-- Tooltip bubble shows on hover over header-container -->
            <span class="tooltip" v-if="group.description">{{ group.description }}</span>
          </div>
          <!-- Subfilters are hidden by default; shown when hovering over .filter-group -->
          <div class="filter-options">
            <label
              class="filter-label"
              v-for="option in group.options"
              :key="option.value"
            >
              <input
                type="checkbox"
                :value="option.value"
                v-model="selectedFilters[group.name]"
              />
              <span class="label-text">{{ option.label }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Apps Grid: pushed right so it doesn't overlap with the sidebar -->
      <div class="apps-grid">
        <div
          v-for="app in filteredApps"
          :key="app.id"
          class="app-item"
        >
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
      showFilters: false, // controls the sidebar visibility
      selectedFilters: {
        appType: [],
        os: [],
        colorContrast: [],
        colorContrastGrade: [],
        screenreaderCapable: [],
        textSize: [],
        textSizeGrade: []
      },
      filterGroups: [
        {
          name: 'appType',
          label: 'App Type',
          description: 'Select the app’s primary function.',
          options: [
            { value: 'entertainment', label: 'Entertainment' },
            { value: 'health', label: 'Health' },
            { value: 'shopping', label: 'Shopping' },
            { value: 'banking', label: 'Banking' },
            { value: 'socialMedia', label: 'Social Media' }
          ]
        },
        {
          name: 'os',
          label: 'OS',
          description: 'Choose the operating system (Android, iOS, Web).',
          options: [
            { value: 'android', label: 'Android' },
            { value: 'ios', label: 'iOS' },
            { value: 'web', label: 'Web' }
          ]
        },
        {
          name: 'colorContrast',
          label: 'Color Contrast',
          description: 'The difference in brightness or saturation between colors.',
          options: [
            { value: '1', label: 'Full Functionality' },
            { value: '0', label: 'Semi-functional' },
            { value: '-1', label: 'Non-functional' }
          ]
        },
        {
          name: 'colorContrastGrade',
          label: 'Color Contrast Grade',
          description: 'Grade based on WCAG criteria (AAA, AA).',
          options: [
            { value: 'AAA', label: 'AAA' },
            { value: 'AA', label: 'AA' }
          ]
        },
        {
          name: 'screenreaderCapable',
          label: 'Screenreader Capable',
          description: 'Is the app optimized for screenreaders? (Y/N)',
          options: [
            { value: 'y', label: 'Y' },
            { value: 'n', label: 'N' }
          ]
        },
        {
          name: 'textSize',
          label: 'Text Size',
          description: 'The overall size (general height) of a font shown on a screen.',
          options: [
            { value: '1', label: 'Full Functionality' },
            { value: '0', label: 'Semi-functional' },
            { value: '-1', label: 'Non-functional' }
          ]
        },
        {
          name: 'textSizeGrade',
          label: 'Text Size Grade',
          description: 'Grade for text legibility (AAA, AA).',
          options: [
            { value: 'AAA', label: 'AAA' },
            { value: 'AA', label: 'AA' }
          ]
        }
      ],
      apps: [
        {
          id: 1,
          name: 'App One',
          image: 'https://via.placeholder.com/300x600?text=App+One',
          appType: 'entertainment',
          os: 'android',
          colorContrast: '1',
          colorContrastGrade: 'AAA',
          screenreaderCapable: 'y',
          textSize: '0',
          textSizeGrade: 'AA'
        },
        {
          id: 2,
          name: 'App Two',
          image: 'https://via.placeholder.com/300x600?text=App+Two',
          appType: 'health',
          os: 'ios',
          colorContrast: '0',
          colorContrastGrade: 'AA',
          screenreaderCapable: 'n',
          textSize: '-1',
          textSizeGrade: 'AAA'
        },
        {
          id: 3,
          name: 'App Three',
          image: 'https://via.placeholder.com/300x600?text=App+Two',
          appType: 'health',
          os: 'ios',
          colorContrast: '-1',
          colorContrastGrade: 'AA',
          screenreaderCapable: 'n',
          textSize: '-1',
          textSizeGrade: 'AAA'
        },
        {
          id: 4,
          name: 'App Four',
          image: 'https://via.placeholder.com/300x600?text=App+Two',
          appType: 'health',
          os: 'ios',
          colorContrast: '0',
          colorContrastGrade: 'AA',
          screenreaderCapable: 'n',
          textSize: '-1',
          textSizeGrade: 'AAA'
        },
        {
          id: 5,
          name: 'App Five',
          image: 'https://via.placeholder.com/300x600?text=App+Two',
          appType: 'health',
          os: 'ios',
          colorContrast: '0',
          colorContrastGrade: 'AA',
          screenreaderCapable: 'n',
          textSize: '-1',
          textSizeGrade: 'AAA'
        },
        {
          id: 6,
          name: 'App Six',
          image: 'https://via.placeholder.com/300x600?text=App+Two',
          appType: 'health',
          os: 'ios',
          colorContrast: '0',
          colorContrastGrade: 'AA',
          screenreaderCapable: 'n',
          textSize: '-1',
          textSizeGrade: 'AAA'
        },
        {
          id: 7,
          name: 'App Seven',
          image: 'https://via.placeholder.com/300x600?text=App+Two',
          appType: 'health',
          os: 'ios',
          colorContrast: '0',
          colorContrastGrade: 'AA',
          screenreaderCapable: 'n',
          textSize: '-1',
          textSizeGrade: 'AAA'
        }
        // Add more app objects as needed...
      ]
    }
  },
  computed: {
    filteredApps () {
      const filterKeys = Object.keys(this.selectedFilters)
      return this.apps.filter(app => {
        return filterKeys.every(key => {
          if (this.selectedFilters[key].length === 0) {
            return true
          }
          return this.selectedFilters[key].includes(app[key])
        })
      })
    }
  },
  methods: {
    toggleFilters () {
      this.showFilters = !this.showFilters
    }
  }
}
</script>

  <style scoped>
  .apps-page {
    padding: 210px 20px;
    position: relative;
  }

  /* Filter Toggle Button */
  .filter-toggle {
  position: absolute;
  top: 20px;  /* Lower value brings the button higher */
  left: 20px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 1100;  /* Make sure it stays on top */
}

  /* Filters Sidebar: fixed to the left */
  .filters-panel {
  position: fixed;
  top: 60px;         /* 20px + 40px = 60px so it starts right under the filter button */
  left: 0;
  width: 230px;
  height: 73vh;  /* Fill from just under the button to the bottom */
  overflow-y: auto;
  background: rgb(255, 209, 216);
  border-right: 1px solid rgb(255, 209, 216);
  padding: 20px;
  z-index: 1000;
}

  /* Each filter group arranged vertically */
  .filter-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* Hide subfilters by default; will show on hover */
  .filter-options {
    display: none;
    margin-top: 4px;
  }

  /* Show subfilters when hovering on filter group */
  .filter-group:hover .filter-options {
    display: block;
  }

/* Ensure the header-container occupies the full width of the sidebar */
.header-container {
  position: relative;
  width: 100%;
}

/* Tooltip: constrain its maximum width, allow wrapping, and use pre-wrap whitespace */
.tooltip {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;          /* Directly below the header */
  left: 0;
  display: block;
  background-color: #333;
  color: #fff;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
  box-sizing: border-box;   /* Includes padding in the width calculation */
  white-space: normal;       /* Allow wrapping */
  overflow-wrap: break-word; /* Break words if necessary */
  word-break: break-word;
  max-width: calc(230px - 20px); /* Adjust based on sidebar width (230px) and desired padding */
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 10;
  line-height: 1.2;
}

  /* Filter header */
  .filter-header {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
    transition: color 0.3s;
  }

  /* Show tooltip on hover over header container */
  .header-container:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  /* Style each filter label */
  .filter-label {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  .filter-label input {
    margin-right: 6px;
  }

/* Apps Grid remains similar */
.apps-grid {
  margin-left: 270px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

/* Force a fixed height for each app box and use flex layout */
.app-item {
  background: #fff;
  border: 1px solid #ddd;
  padding: 5px;
  text-align: center;
  transition: transform 0.3s;
  height: 250px !important;   /* Adjust the overall box height as needed */
  overflow: hidden;           /* Prevent any content overflow */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.app-item:hover {
  transform: translateY(-5px);
}

/* Set a fixed height on the image */
.app-item img {
  width: 100% !important;
  height: 150px !important;   /* Adjust the image height as needed */
  object-fit: cover;          /* Crop if necessary */
  display: block;
}

/* Ensure the app name doesn't force box height */
.app-item p {
  margin: 5px 0 0;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-grow: 1;
}

  /* Ensure the html and body take up the full viewport height */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* Make your main container fill the viewport */
.apps-page {
  background: #fff;       /* White background */
  min-height: 100vh;      /* Minimum height = viewport height */
  display: flex;
  flex-direction: column;
}

/* Let the grid (or main content) grow as needed */
.apps-grid {
  flex-grow: 1;
}

/* Style the footer and position it after the content */
.footer {
  background: #f2f2f2;
  padding: 20px;
  text-align: center;
}
  </style>
