<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  prerender: true,
})

useHead({
  title: '首页',
  meta: [
    { name: 'description', content: '描述' },
  ],
})
</script>
