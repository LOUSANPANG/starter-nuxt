<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

// const nuxtError = useError()
</script>


<template>
  <NuxtLayout name="default">
    <div class="error-page">
      <h1>出错了 — {{ error?.statusCode || '500' }}</h1>
      <p>{{ error?.statusMessage || error?.message || '发生未知错误' }}</p>
      <NuxtLink to="/">返回首页</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error-page {
  padding: 40px;
  text-align: center;
}
</style>
