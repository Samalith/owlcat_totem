import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "marketplace" */'../views/Marketplace.vue')
  },
  {
    path: '/catalogue',
    name: 'Catalogue',
    component: () => import(/* webpackChunkName: "catalogue" */'../views/Catalogue.vue'),
    //children: [
      //{
        //path: 'breed',
        //name: 'Breed',
        //component: () => import(/* webpackChunkName: "breed" */'../views/Breed.vue')
      //}
    //]
  },
  {
    path: '/factory',
    name: 'Factory',
    component: () => import(/* webpackChunkName: "factory" */'../views/Factory.vue')
  },
  {
    path: '/breed',
    name: 'Breed',
    component: () => import(/* webpackChunkName: "breed" */'../views/Breed.vue')
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
