export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.apiBase

  const api = $fetch.create({
    baseURL,
    onRequest({ request, options, error }) {
      // 设置请求头
      const token = '111'
      if (token) {
        options.headers.set('Authorization', `Bearer ${token}`)
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  // 通过 useNuxtApp().$api 暴露
  return {
    provide: {
      api,
    },
  }
})
