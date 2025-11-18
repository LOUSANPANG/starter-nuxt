/**
 * showError() / createError() 在逻辑中触发错误
 *  服务端：throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
 *  客户端：showError({ statusCode: 500, statusMessage: 'Internal Server Error' })
 */
export default defineNuxtPlugin((nuxtApp) => {
  // Vue 全局错误（捕获到的组件/运行时异常）
  nuxtApp.vueApp.config.errorHandler = (err, instance, info) => {
    // 示例：上报到你的监控服务（Sentry/LogRocket/自定义）
    // reportError({ err, info, component: instance?.type?.name })
  }

  // Nuxt hook: 当错误冒泡到根组件时触发（基于 onErrorCaptured）
  nuxtApp.hook('vue:error', (err, target, info) => {
    // 这里也可以跨客户端/服务端统一处理（注意：在 server 环境 target 可能为 undefined）
  })

  // Nuxt app 启动/致命错误 hook（例如插件执行时报错 / SSR 渲染时报错）
  nuxtApp.hook('app:error', (err) => {
  })
})
