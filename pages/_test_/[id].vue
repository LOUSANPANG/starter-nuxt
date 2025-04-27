<template>
  <div>
    <!-- 路由过渡效果测试 -->
    <li class="text-underline">
      <NuxtLink to="/_test_/test-unocss_font_icon">test-unocss_font_icon</NuxtLink>
    </li>

    <h1>route.params.id:</h1>
    <h2>{{ route.params.id }}</h2>
  </div>
</template>

<script setup lang="ts">
// 当访问 /_test_/1 时，route.params.id 将为 1
const route = useRoute()
</script>
