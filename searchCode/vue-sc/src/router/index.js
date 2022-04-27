import Vue from 'vue'
import Router from 'vue-router'
import searchCode from '@/components/searchCode'
import registerForm from '@/components/registerForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchCode',
      component: searchCode
    },
    {
      path: '/register',
      name: 'registerForm',
      component: registerForm
    }
  ]
})
