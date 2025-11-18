<template>
  <div>
    <div class="box">
      <p>Test Fetch</p>
      <button class="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="fetchTest">Fetch Test</button>
      <div>
        {{ test }}
      </div>
    </div>

    <div class="box">
      <p>Test Store</p>
      <div>
        {{ websiteStore.name }}
      </div>
    </div>

    <div class="box">
      <p>Nuxt Icon</p>
      <Icon name="hugeicons:alien-01" />
    </div>

    <div class="box">
      <p>Nuxt Img</p>
      <NuxtImg src="/imgs/test.png" alt="test" sizes="24px sm:24px xl:32px" :placeholder="[24, 24, 80, 5]" preload
        loading="lazy" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// ======================== meta
definePageMeta({
  middleware: 'auth',
  prerender: false,
})
useHead({
  title: '测试',
  meta: [
    { name: 'description', content: '描述' },
  ],
})

// ======================== test fetch
const test = ref('')
async function fetchTest() {
  const response = await $fetch<ReadableStream>('/api/test', {
    method: 'POST',
    body: {
      query: 'Hello AI, how are you?',
    },
    responseType: 'stream',
  })

  const reader = response.pipeThrough(new TextDecoderStream()).getReader()
  while (true) {
    const { value, done } = await reader.read()
    if (done) { break }
    test.value += value
  }
}

// ======================== test store
const websiteStore = useWebsiteStore()
</script>

<style scoped lang="scss">
.box {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  width: 300px;
  min-height: 150px;

  p {
    margin: 0;
    margin-bottom: 16px;
    font-size: 16px;
    color: #ccc;
  }
}
</style>
