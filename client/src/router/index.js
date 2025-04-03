import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Apps from '@/components/Apps.vue'
import Contact from '@/components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/apps', name: 'Apps', component: Apps },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
