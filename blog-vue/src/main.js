import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScroll from 'vue-scroll'
import VueResource from 'vue-resource'
import Validator from 'vue-validator'
import App from './App'


Vue.use(VueRouter)
Vue.use(VueScroll)
Vue.use(VueResource)
Vue.use(Validator)

const router = new VueRouter()

router.map ({
  '/': {
        name: 'page',
        component: (resolve) => {
            require(['./page.vue'], resolve)
        }
    },
  '/resume':{
        name: 'resume',
        component: (resolve) => {
            require(['./resume.vue'], resolve)
    }
  },
  '/unit':{
        name: 'unit',
        component: (resolve) => {
           require(['./unit.vue'], resolve)
    }
  },
  '/product':{
       name:'product',
       component:(resolve) => {
         require(['./product.vue'], resolve)
       }
  },
})

router.start(App,'app')
