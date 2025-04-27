<template>
  <div>
    <h1>服务端请求渲染：</h1>
    <h2>{{ data }}</h2>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch('/api/_test_')
</script>
