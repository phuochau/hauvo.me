import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import ProjectDetails from '@/pages/ProjectDetails'

const routes = [
  { path: '/', component: Home },
  {
    path: '/admin',
    beforeEnter() { location.href = 'https://hauvo-me-back.herokuapp.com/ghost/' }
  },
  { path: '/project/:slug', component: ProjectDetails }
]

export default new VueRouter({
  routes
})
