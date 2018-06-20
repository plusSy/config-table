import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/example'

//    路由的集合
const RouterList = [Example]

let ChildrenList = RouterList.map(item => {
  return {
    path: `/${item.name}`,
    name: `${item.name}`,
    component: item
  }
})

Vue.use(Router)

export default new Router({
  routes: ChildrenList
})
