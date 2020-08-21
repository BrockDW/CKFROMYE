import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import learnCausually from '@/components/learnCausually'
import learnSeriously from '@/components/learnSeriously'
import myLikes from '@/components/myLikes'
import reading from '@/components/reading'
import readingList from '@/components/readingList'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/learnCausually',
          name: 'learnCausually',
          component: learnCausually,
        },
        {
          path: '/learnSeriously',
          name: 'learnSeriously',
          component: learnSeriously,
        },
        {
          path: '/myLikes',
          name: 'myLikes',
          component: myLikes
        },
        {
          path: '/reading',
          name: 'reading',
          component: reading,
        },
        {
          path: '/readingList',
          name: 'readingList',
          component: readingList,
        },
      ]
    }
  ]
})
