// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // 模块
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  // 环境配置
  $development: {
    runtimeConfig: {
      public: {
        apiBase: 'https://jsonplaceholder.typicode.com',
      },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        apiBase: '',
      },
    },
  },
  $test: {
    runtimeConfig: {
      public: {
        apiBase: '',
      },
    },
  },
  devtools: { enabled: true },

  // 网站配置
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // stylistic: { indent: 'tab', semi: true }
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
