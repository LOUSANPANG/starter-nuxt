import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // 配置环境覆盖
  $development: {},
  $test: {},
  $production: {},
  $env: {
    beta: {},
  },

  // useRuntimeConfig()
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  nitro: {
    // 预渲染
    // 不适合依赖 token、用户、动态数据库的页面
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/'],
    }
  },

  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/icon'],

  image: {
    // quality: 80,
    format: ['webp', 'jpeg', 'jpg', 'png'],
    domains: ['hengtongsifang.com'],
  }
})
