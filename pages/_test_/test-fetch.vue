<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
type DataType = Array<{ title: string }>
const { data } = await useApiFetch<DataType>('/posts', {
  method: 'GET',
})

const { data: data1 } = await useAPI('/posts', {
  method: 'GET',
})
console.log(11111, data1.value)
</script>
