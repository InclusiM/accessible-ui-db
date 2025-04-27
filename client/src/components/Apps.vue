<template>
  <div class="apps-container">
    <!-- Header with Filter Button -->
    <header class="header">
      <div class="header-content">
        <h1 class="page-title">App Accessibility Gallery</h1>
        
      </div>
    </header>

    <div>
      <button @click="toggleFilters" class="filter-button">
          <span class="filter-icon">⚙️</span>
          Filters
          <span v-if="totalActiveFilters > 0" class="filter-badge">
            {{ totalActiveFilters }}
          </span>
        </button>
    </div>
    
    <!-- Filter Panel - Moved to left side under header -->
    <div v-if="showFilters" class="filter-panel-left">
      <div class="filter-header">
        <h2 class="filter-title">Filter Apps</h2>
        <button @click="toggleFilters" class="close-button">✕</button>
      </div>
      
      <p class="filter-description">
        Select filters to narrow down the app results
      </p>
      
      <!-- Filter Groups -->
      <div class="filter-groups">
        <div v-for="group in filterGroups" :key="group.name" class="filter-group">
          <div 
            class="filter-group-header"
            @click="toggleFilterGroup(group.name)"
          >
            <div class="filter-group-title">
              <span>{{ group.label }}</span>
              <span v-if="selectedFilters[group.name].length > 0" class="filter-count">
                {{ selectedFilters[group.name].length }}
              </span>
            </div>
            <span class="dropdown-arrow" :class="{'open': openFilterGroups[group.name]}">▼</span>
          </div>
          
          <div v-if="openFilterGroups[group.name]" class="filter-options">
            <div v-for="option in group.options" :key="`${option.value}`" class="filter-option">
              <input 
                type="checkbox" 
                :id="`${group.name}-${option.value}`" 
                :value="option.value" 
                v-model="selectedFilters[group.name]"
                class="filter-checkbox"
              />
              <label :for="`${group.name}-${option.value}`" class="filter-label">
                {{ option.label }}
              </label>
            </div>
          </div>
          
          <!-- Tooltip for description -->
          <div v-if="openFilterGroups[group.name]" class="filter-description">
            {{ group.description }}
          </div>
        </div>
      </div>
      
      <!-- Clear Filters Button -->
      <div v-if="totalActiveFilters > 0" class="clear-filters">
        <button @click="clearAllFilters" class="clear-button">
          Clear All Filters
        </button>
      </div>
    </div>
    
    <!-- Main Content -->
    <main class="main-content">
      <div class="app-grid">
        <!-- App Items -->
        <template v-if="filteredApps.length > 0">
          <div v-for="app in filteredApps" :key="app.id" class="app-card">
            <!-- App Name Above Phone -->
            <h2 class="app-title">{{ app.name }}</h2>
            
            <!-- Badge Container -->
            <div class="badge-container">
              <span class="app-badge">{{ app.os }}</span>
              <span class="app-badge">{{ app.category }}</span>
              <span class="app-badge">CC: {{ app.ColorContrastGrade }}</span>
              <span class="app-badge">Text: {{ app.TextSizeGrade }}</span>
            </div>
            
            <!-- Phone Frame -->
            <div class="phone-frame">
              <div class="phone-notch"></div>
              <img
                :src="app.image"
                :alt="`${app.name} screenshot`"
                class="app-screenshot"
              />
            </div>
            
            <!-- Comments Section -->
            <div class="comments-section">
              <h3 class="comments-title">Further Consideration</h3>
              <hr class="divider" />
              
              <div class="comments-list">
                <!-- Display comments with improved styling -->
                <template v-if="app.comments && app.comments.length > 0">
                  <div v-for="comment in app.comments" :key="comment.id" class="comment">
                    <div class="avatar-container">
                      <img :src="comment.avatar" :alt="comment.author" class="avatar" />
                    </div>
                    <div class="comment-content">
                      <div class="comment-header">
                        <p class="comment-author">{{ comment.author }}</p>
                        <span class="comment-date">{{ comment.date }}</span>
                      </div>
                      <p class="comment-text">{{ comment.text }}</p>
                    </div>
                  </div>
                </template>
                
                <!-- No comments placeholder -->
                <div v-else class="no-comments">
                  <p class="no-comments-text">No comments available</p>
                </div>
              </div>
              
              <!-- More Comments Button -->
              <div class="more-comments-container">
                <button class="more-comments-button">
                  More
                </button>
              </div>
            </div>
          </div>
        </template>
        
        <!-- No Results Message -->
        <div v-else class="no-results">
          <h3 class="no-results-title">No apps match your filters</h3>
          <p class="no-results-message">Try adjusting your filter criteria</p>
          <button @click="clearAllFilters" class="clear-button">
            Clear All Filters
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UIService from '../UIService'

export default {
  name: 'Apps',
  data() {
    return {
      showFilters: false,
      openFilterGroups: {
        category: true,
        os: false,
        ColorContrast: false,
        ColorContrastGrade: false,
        ScreenreaderCapable: false,
        TextSize: false,
        TextSizeGrade: false
      },
      selectedFilters: {
        category: [],
        os: [],
        ColorContrast: [],
        ColorContrastGrade: [],
        ScreenreaderCapable: [],
        TextSize: [],
        TextSizeGrade: []
      },
      filterGroups: [
        {
          name: 'category',
          label: 'App Type',
          description: 'Select the app primary function.',
          options: [
            { value: 'Entertainment', label: 'Entertainment' },
            { value: 'Health', label: 'Health' },
            { value: 'Shopping', label: 'Shopping' },
            { value: 'Banking', label: 'Banking' },
            { value: 'Social Media', label: 'Social Media' }
          ]
        },
        {
          name: 'os',
          label: 'OS',
          description: 'Choose the operating system (Android, iOS, Web).',
          options: [
            { value: 'Android', label: 'Android' },
            { value: 'iPhone', label: 'iOS' },
            { value: 'Web', label: 'Web' }
          ]
        },
        {
          name: 'ColorContrast',
          label: 'Color Contrast',
          description: 'The difference in brightness or saturation between colors.',
          options: [
            { value: 1, label: 'Full Functionality' },
            { value: 0, label: 'Semi-functional' },
            { value: -1, label: 'Non-functional' }
          ]
        },
        {
          name: 'ColorContrastGrade',
          label: 'Color Contrast Grade',
          description: 'Grade based on WCAG criteria (AAA, AA).',
          options: [
            { value: 'AAA', label: 'AAA' },
            { value: 'AA', label: 'AA' }
          ]
        },
        {
          name: 'ScreenreaderCapable',
          label: 'Screenreader Capable',
          description: 'Is the app optimized for screenreaders? (Y/N)',
          options: [
            { value: 'y', label: 'Y' },
            { value: 'n', label: 'N' }
          ]
        },
        {
          name: 'TextSize',
          label: 'Text Size',
          description: 'The overall size (general height) of a font shown on a screen.',
          options: [
            { value: 1, label: 'Full Functionality' },
            { value: 0, label: 'Semi-functional' },
            { value: -1, label: 'Non-functional' }
          ]
        },
        {
          name: 'TextSizeGrade',
          label: 'Text Size Grade',
          description: 'Grade for text legibility (AAA, AA).',
          options: [
            { value: 'AAA', label: 'AAA' },
            { value: 'AA', label: 'AA' }
          ]
        }
      ],
      apps: [],
      newComments: {},
      uiError: null
    }
  },
  computed: {
    filteredApps() {
      const filterKeys = Object.keys(this.selectedFilters)
      return this.apps.filter(app => {
        return filterKeys.every(key => {
          if (this.selectedFilters[key].length === 0) {
            return true
          }
          return this.selectedFilters[key].includes(app[key])
        })
      })
    },
    totalActiveFilters() {
      return Object.values(this.selectedFilters).reduce((acc, curr) => acc + curr.length, 0)
    }
  },
  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters
    },
    toggleFilterGroup(groupName) {
      this.openFilterGroups[groupName] = !this.openFilterGroups[groupName]
    },
    clearAllFilters() {
      this.selectedFilters = {
        category: [],
        os: [],
        ColorContrast: [],
        ColorContrastGrade: [],
        ScreenreaderCapable: [],
        TextSize: [],
        TextSizeGrade: []
      }
    },
    submitComment(appId) {
      if (!this.newComments[appId]?.trim()) return
      
      const newComment = {
        id: Date.now(),
        author: 'You',
        avatar: '/abstract-user-icon.png',
        text: this.newComments[appId],
        date: 'Just now'
      }
      
      const appIndex = this.apps.findIndex(app => app.id === appId)
      if (appIndex !== -1) {
        if (!this.apps[appIndex].comments) {
          this.apps[appIndex].comments = []
        }
        this.apps[appIndex].comments.push(newComment)
      }
      
      // Clear the input
      this.$set(this.newComments, appId, '')
    },
    async fetchApps() {
      try {
        // Try to get screenshots from API
        const screenshots = await UIService.getUIScreenshots();
        
        // Process the data from API
        const processedApps = screenshots.map(screenshot => ({
          id: screenshot.id,
          name: screenshot.name,
          image: screenshot.image,
          os: screenshot.os,
          category: screenshot.category === 'SocMed' ? 'Social Media' : screenshot.category,
          ColorContrast: screenshot.ColorContrast,
          ColorContrastGrade: screenshot.ColorContrastGrade,
          ScreenreaderCapable: screenshot.ScreenreaderCapable,
          TextSize: screenshot.TextSize,
          TextSizeGrade: screenshot.TextSizeGrade,
          comments: screenshot.comments || []
        }));
        
        this.apps = processedApps;
      } catch (error) {
        console.error('Error fetching screenshots:', error);
        this.uiError = 'Failed to fetch UI screenshots';
        
        // Fallback to mock data if API fails
        this.loadMockData();
      }
    },
    loadMockData() {
      // Mock data as fallback
      const mockApps = [
        {
          id: 1,
          name: 'Instagram',
          image: '/instagram-feed-mockup.png',
          os: 'iPhone',
          category: 'Social Media',
          ColorContrast: 1,
          ColorContrastGrade: 'AAA',
          ScreenreaderCapable: 'y',
          TextSize: 1,
          TextSizeGrade: 'AAA',
          comments: [
            {
              id: 1,
              author: 'Alex Johnson',
              avatar: '/diverse-group-city.png',
              text: 'Great UI design! The contrast is excellent.',
              date: '2 days ago'
            }
          ]
        },
        {
          id: 2,
          name: 'Netflix',
          image: '/streaming-app-interface.png',
          os: 'Android',
          category: 'Entertainment',
          ColorContrast: 1,
          ColorContrastGrade: 'AA',
          ScreenreaderCapable: 'y',
          TextSize: 0,
          TextSizeGrade: 'AA',
          comments: [
            {
              id: 1,
              author: 'Sam Taylor',
              avatar: '/diverse-professional.png',
              text: 'Navigation could be improved for accessibility.',
              date: '1 day ago'
            }
          ]
        }
      ];
      
      this.apps = mockApps;
    }
  },
  mounted() {
    this.fetchApps();
  }
}
</script>

<style scoped>
/* Base styles */
.apps-container {
  min-height: 100vh;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Header styles */
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f0f0f0;
  margin: 0;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.filter-button:hover {
  background-color: #f5f5f7;
}

.filter-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 9999px;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Filter panel - left side styling */
.filter-panel-left {
  position: fixed;
  top: 4rem;
  left: 0;
  z-index: 50;
  width: 280px;
  height: calc(100vh - 4rem);
  overflow-y: auto;
  background-color: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #ddd;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 0.75rem;
}

.filter-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #1f2937;
}

.close-button {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #6b7280;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #f5f5f7;
  color: #1f2937;
}

.filter-description {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  border-left: 3px solid #3b82f6;
  padding-left: 0.75rem;
}

.filter-groups {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filter-group {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1rem;
}

.filter-group:last-child {
  border-bottom: none;
}

.filter-group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.2s;
}

.filter-group-header:hover {
  color: #3b82f6;
}

.filter-group-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  border-radius: 9999px;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.dropdown-arrow {
  font-size: 0.75rem;
  transition: transform 0.2s;
  color: #6b7280;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
  color: #3b82f6;
}

.filter-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.filter-checkbox {
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  accent-color: #3b82f6;
}

.filter-button {
  position: fixed;
  left: 1rem;
  top: 5rem;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.filter-button:hover {
  background-color: #f5f5f7;
  transform: translateY(-1px);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.15);
}

.filter-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  border-radius: 9999px;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.clear-filters {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.clear-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #4b5563;
}

.clear-button:hover {
  background-color: #f3f4f6;
  border-color: #3b82f6;
  color: #3b82f6;
}

/* Main content styles */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.app-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.app-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  text-align: center;
}

.badge-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.app-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid #e5e7eb;
  background-color: #f3f4f6;
  color: #374151;
}

/* Phone frame styling */
.phone-frame {
  position: relative;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  border: 14px solid #111111;
  border-radius: 45px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background-color: #111111;
  margin-bottom: 1rem;
}

.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 25px;
  background-color: #111111;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  z-index: 10;
}

.app-screenshot {
  display: block;
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 32px;
}

/* Home indicator */
.phone-frame::after {
  content: "";
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background-color: #ffffff;
  border-radius: 2px;
  opacity: 0.5;
}

/* Comments section */
.comments-section {
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 0.5rem;
}

.comments-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.divider {
  border: none;
  border-top: 1px solid #eee;
  margin-bottom: 0.75rem;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.comment {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #f9fafb;
}

.avatar-container {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;
  background-color: #e5e7eb;
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.comment-author {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  color: #1f2937;
}

.comment-date {
  font-size: 0.75rem;
  color: #6b7280;
}

.comment-text {
  font-size: 0.875rem;
  margin: 0;
  color: #4b5563;
  line-height: 1.4;
}

/* No comments placeholder */
.no-comments {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px dashed #d1d5db;
}

.no-comments-text {
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;
  margin: 0;
}
</style>
