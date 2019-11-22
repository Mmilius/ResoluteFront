import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Categories from '@/components/Categories'
import SignIn from '@/components/SignIn'
import NewResolution from '@/components/NewResolution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/newresolution',
      name: 'NewResolution',
      component: NewResolution
    }

  ]
})
