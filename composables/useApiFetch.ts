// composables/useApiFetch.ts
import type { UseFetchOptions } from '#app'

type UrlType = string | Request | Ref<string | Request> | (() => string | Request)

export function useApiFetch<DataT>(url: UrlType, options?: UseFetchOptions<DataT>) {
  // const token = useCookie<string>('token')
  // if (!token.value) navigateTo('/login')

  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.apiBase

  options = {
    ...options,
    baseURL,
    lazy: options?.lazy ?? true,
    // server: options?.server ?? false,
    headers: {
      ...options?.headers,
      // Authorization: `Bearer ${token.value}`,
    },
  }

  return useFetch(url, { ...options })
}
