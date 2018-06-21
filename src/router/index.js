import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/example'
import Mock from '@/components/mock'

// // 路由的集合
// const RouterList = [Example]
//
// // 根据页面去渲染路由
// let ChildrenList = RouterList.map(item => {
//   return {
//     path: `/${item.name}`,
//     name: `${item.name}`,
//     component: item
//   }
// })
//
// Vue.use(Router)
//
// export default new Router({
//   routes: ChildrenList
// })

Vue.use(Router)

// 一般的路由配置
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    },
    {
      path: '/mock',
      name: 'Mock',
      component: Mock
    }
  ]
})
