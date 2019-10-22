import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Webshop from './views/Webshop.vue'
import ShowBooks from './views/ShowBooks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/webshop',
      name: 'webshop',
      component: Webshop
    },
    {
      path: '/show/:id',
      name: 'show-book',
      component: ShowBooks,
      props: true
    }
  ]
})
