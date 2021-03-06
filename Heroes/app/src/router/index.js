import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Heroes from '@/components/HeroComponent/Heroes'
import NewHero from '@/components/HeroComponent/NewHero'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/newHero',
      name: 'NewHero',
      component: NewHero
    }
  ]
})
