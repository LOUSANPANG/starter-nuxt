// https://nuxt.com/docs/getting-started/routing#route-middleware
// 全局路由拦截器
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('路由拦截器====>', to, from)

  // const isLoggedIn = false

  // if (to.path === '/' && !isLoggedIn) {
  //   return navigateTo('/login')
  // }

  // if (to.path === '/login' && isLoggedIn) {
  //   return navigateTo('/')
  // }
})
