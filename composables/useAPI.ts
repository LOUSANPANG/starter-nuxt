import type { UseFetchOptions } from 'nuxt/app'

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)

// plugins/api.ts
export function useAPI<T>(
  url: UrlType,
  options?: UseFetchOptions<T>,
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  })
}

// 使用
// const { data: modules } = await useAPI('/modules')
