import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'// 
// import Home from '../views/Homes.vue'// 
// import Home from '../views/Home/index.jsx'// 
// import Home from '../views/Home/index.vue'// 

const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home/index.jsx')
const Urgent = () => import(/* webpackChunkName: "Urgent" */ '../views/Urgent/index.jsx')
const Antd = () => import(/* webpackChunkName: "Antd" */ '../views/Antd')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/urgent',
    name: 'Urgent',
    component: Urgent, 
  },
  {
    path: '/antd',
    name: 'Antd',
    component: Antd, 
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    // component: () => import('../views/Test.jsx'),
    component: () => import('../views/Test.vue'),
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/Counter.jsx'),
  },
  {
    path: '/counter2',
    name: 'counter2',
    component: () => import('../views/Counter2.jsx'),
  },
  {
    path: '/counter3',
    name: 'counter3',
    component: () => import('../views/Counter3'),
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router