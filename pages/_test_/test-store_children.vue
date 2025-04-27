<template>
  <div>
    {{ count }}
  </div>
</template>

<script lang="ts" setup>
const count = useState<number>('_test_store_count')
</script>

<style></style>
