<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header with Filter Button -->
    <header class="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">App Accessibility Gallery</h1>
        
        <!-- Filter Button -->
        <button 
          @click="showFilters = !showFilters" 
          class="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-filter"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          Filters
          <span 
            v-if="totalActiveFilters > 0" 
            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground"
          >
            {{ totalActiveFilters }}
          </span>
        </button>
      </div>
    </header>
    
    <!-- Filter Panel -->
    <div 
      v-if="showFilters" 
      class="fixed top-16 right-0 z-50 w-[350px] sm:w-[450px] h-[calc(100vh-4rem)] overflow-y-auto bg-white dark:bg-gray-800 shadow-lg border-l border-border p-6"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Filter Apps</h2>
        <button 
          @click="showFilters = false"
          class="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <span class="sr-only">Close</span>
        </button>
      </div>
      
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Select filters to narrow down the app results
      </p>
      
      <!-- Filter Groups -->
      <div class="space-y-4">
        <div v-for="group in filterGroups" :key="group.name" class="border-b border-border pb-4">
          <div 
            class="flex items-center justify-between cursor-pointer py-2"
            @click="toggleFilterGroup(group.name)"
          >
            <div class="flex items-center gap-2">
              <span class="text-lg font-medium">{{ group.label }}</span>
              <span 
                v-if="selectedFilters[group.name].length > 0" 
                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground"
              >
                {{ selectedFilters[group.name].length }}
              </span>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              :class="{'rotate-180': openFilterGroups[group.name]}"
              class="transition-transform duration-200"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
          
          <div 
            v-if="openFilterGroups[group.name]"
            class="grid grid-cols-1 gap-2 pl-2 mt-2"
          >
            <div 
              v-for="option in group.options" 
              :key="`${option.value}`" 
              class="flex items-center space-x-2"
            >
              <input 
                type="checkbox" 
                :id="`${group.name}-${option.value}`" 
                :value="option.value" 
                v-model="selectedFilters[group.name]"
                class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label 
                :for="`${group.name}-${option.value}`"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {{ option.label }}
              </label>
            </div>
          </div>
          
          <!-- Tooltip for description -->
          <div class="mt-1 text-xs text-gray-500 italic" v-if="openFilterGroups[group.name]">
            {{ group.description }}
          </div>
        </div>
      </div>
      
      <!-- Clear Filters Button -->
      <div v-if="totalActiveFilters > 0" class="mt-6 flex justify-end">
        <button 
          @click="clearAllFilters"
          class="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
        >
          Clear All Filters
        </button>
      </div>
    </div>
    
    <!-- Main Content -->
    <main class="container mx-auto py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- App Items -->
        <template v-if="filteredApps.length > 0">
          <div v-for="app in filteredApps" :key="app.id" class="flex flex-col items-center">
            <!-- App Name Above Phone -->
            <h2 class="text-xl font-bold mb-3 text-center">{{ app.name }}</h2>
            
            <!-- Badge Container -->
            <div class="flex flex-wrap gap-1 justify-center mb-4">
              <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                {{ app.os }}
              </span>
              <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                {{ app.category }}
              </span>
              <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                CC: {{ app.ColorContrastGrade }}
              </span>
              <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Text: {{ app.TextSizeGrade }}
              </span>
            </div>
            
            <!-- Phone Frame -->
            <div class="phone-frame mb-4">
              <div class="phone-notch"></div>
              <img
                :src="app.image"
                :alt="`${app.name} screenshot`"
                class="object-cover w-full h-[350px]"
              />
            </div>
            
            <!-- Comments Section -->
            <div class="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mt-2">
              <h3 class="font-medium mb-2">Comments</h3>
              <hr class="mb-3" />
              
              <div class="space-y-3 mb-4">
                <div v-for="comment in app.comments" :key="comment.id" class="flex gap-3">
                  <div class="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                    <img :src="comment.avatar" :alt="comment.author" class="h-full w-full object-cover" />
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium">{{ comment.author }}</p>
                      <span class="text-xs text-gray-500">{{ comment.date }}</span>
                    </div>
                    <p class="text-sm mt-1">{{ comment.text }}</p>
                  </div>
                </div>
              </div>
              
              <div class="flex gap-2">
                <textarea
                  v-model="newComments[app.id]"
                  placeholder="Add a comment..."
                  class="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
                <button 
                  @click="submitComment(app.id)"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 self-end"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </template>
        
        <!-- No Results Message -->
        <div v-else class="col-span-full text-center py-12">
          <h3 class="text-xl font-medium mb-2">No apps match your filters</h3>
          <p class="text-gray-500 mb-4">Try adjusting your filter criteria</p>
          <button 
            @click="clearAllFilters"
            class="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppGallery',
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
        // Mock service to simulate the UIService
        const screenshots = [
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
          },
          {
            id: 3,
            name: 'Fitbit',
            image: '/fitbit-app-dashboard.png',
            os: 'iPhone',
            category: 'Health',
            ColorContrast: 0,
            ColorContrastGrade: 'AA',
            ScreenreaderCapable: 'y',
            TextSize: 1,
            TextSizeGrade: 'AAA',
          },
          {
            id: 4,
            name: 'Amazon',
            image: '/amazon-app-showcase.png',
            os: 'Android',
            category: 'Shopping',
            ColorContrast: 1,
            ColorContrastGrade: 'AAA',
            ScreenreaderCapable: 'y',
            TextSize: 1,
            TextSizeGrade: 'AAA',
          },
          {
            id: 5,
            name: 'Chase Bank',
            image: '/mobile-banking-dashboard.png',
            os: 'iPhone',
            category: 'Banking',
            ColorContrast: 1,
            ColorContrastGrade: 'AAA',
            ScreenreaderCapable: 'n',
            TextSize: 0,
            TextSizeGrade: 'AA',
          },
          {
            id: 6,
            name: 'Twitter',
            image: '/twitter-app-mockup.png',
            os: 'Web',
            category: 'Social Media',
            ColorContrast: 0,
            ColorContrastGrade: 'AA',
            ScreenreaderCapable: 'y',
            TextSize: 1,
            TextSizeGrade: 'AAA',
          },
        ]
        
        // Add mock comments to each app
        const appsWithComments = screenshots.map(app => ({
          ...app,
          comments: [
            {
              id: 1,
              author: 'Alex Johnson',
              avatar: '/diverse-group-city.png',
              text: 'Great UI design! The contrast is excellent.',
              date: '2 days ago'
            },
            {
              id: 2,
              author: 'Sam Taylor',
              avatar: '/diverse-professional.png',
              text: 'Navigation could be improved for accessibility.',
              date: '1 day ago'
            }
          ]
        }))
        
        this.apps = appsWithComments
      } catch (error) {
        this.uiError = 'Failed to fetch UI screenshots'
        console.error('Error fetching screenshots:', error)
      }
    }
  },
  mounted() {
    this.fetchApps()
  }
}
</script>

<style scoped>
/* iPhone frame styling - simplified version */
.phone-frame {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  border: 14px solid #111111;
  border-radius: 45px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background-color: #111111;
}

.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 35px;
  background-color: #111111;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  z-index: 10;
}

.phone-frame img {
  display: block;
  width: 100%;
  height: auto;
  min-height: 500px;
  object-fit: cover;
}

/* Home indicator */
.phone-frame::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 5px;
  background-color: #ffffff;
  border-radius: 3px;
  opacity: 0.3;
}
</style>