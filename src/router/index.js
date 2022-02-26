import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/index",
    name: 'Index',
    component: Index,
    children: [
      {
        path: "",
        name: "Cards",
        component: () => import("@/views/Cards"),
      },
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home"),
      },
      {
        path: "/payments",
        name: "Payments",
        component: () => import("@/views/Payments"),
      },
      {
        path: "/credit",
        name: "Credit",
        component: () => import("@/views/Credit"),
      },
      {
        path: "/settings",
        name: "Settings",
        component: () => import("@/views/Settings"),
      },
      {
        path: "/newCard",
        name: "AddNewCard",
        component: () => import("@/components/AddNewCard"),
      },
      
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
