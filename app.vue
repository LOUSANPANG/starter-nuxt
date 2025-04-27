<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'page',
        mode: 'out-in',
      }" />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
// SEO
const route = useRoute()
useHead({
  titleTemplate: route.meta.title ? `${route.meta.title} %separator %siteName` : '%siteName',
  templateParams: {
    siteName: 'AI智能平台',
    separator: '-',
  },
})
// useSeoMeta({
//   title: 'AI前端平台',
//   ogTitle: 'AI前端平台',
//   description: 'AI前端平台，提供agent智能体。',
//   ogDescription: 'AI前端平台，提供agent智能体。',
//   ogImage: '',
// })
</script>

<style scoped lang="scss">
// 页面过渡动画
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
