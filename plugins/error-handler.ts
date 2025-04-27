export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // 处理错误，例如报告给服务
    // clearError({ redirect: '/' }
  }
})
