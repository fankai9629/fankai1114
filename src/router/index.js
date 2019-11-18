import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/film/Film'
import Cinema from '@/views/cinema/Cinema'
import Center from '@/views/Center/Center'
import Nowplay from '@/views/film/component/Nowplay'
import Comming from '@/views/film/component/Comming'
import FilmDetail from '@/views/film/component/Filmdetail'
import Cinemas from '@/views/cinema/component/Cinemas'
import Cinemadetail from '@/views/cinema/component/Cinemadetail'
import City from '@/views/City'
import login from '@/views/login'
import Sign from '@/views/Sign'
import User from '@/views/Center/User'
Vue.use(VueRouter)

const routes = [{
 
  path: '/film',
    name: 'film',
    component: Film,
    children:[
      {
        path:'nowplay',
        component:Nowplay,
        meta:{
          translateX:0
        }
      },
      {
        path:'comming',
        component:Comming,
        meta:{
          translateX:'100%'
        }
      },
      {
        path:'',
        redirect:'/film/nowplay'
      }
    ]
  },
  {
    path:'/city',
    name:'City',
    component:City
  },
  {
    path:'/films/:id',
    name:'filmDetail',
    component:FilmDetail,
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path:'/',
    redirect:'/film/nowplay'
  },
  {
    path:'/center',
    name:'Center',
    component:Center
  },
  {
    path:'/cinemas/:cinemaId',
    name:'Cinemas',
    component:Cinemas,
    children:[
      {
        path:':filmid/:timeId',
        name:'Cinemadetail',
        component:Cinemadetail      
      }]
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/Sign',
    name:'Sign',
    component:Sign
  },
  {
    path:'/user',
    name:'User',
    component:User
  }
]

const router = new VueRouter({
  // 将垂直滚动条定位在0
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  },
  mode:'hash',
  routes
})

export default router
