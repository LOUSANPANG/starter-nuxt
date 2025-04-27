<template>
  <div>
    <!-- 使用 pinia 状态设置数据 -->
    <h1>
      pinia store:
      {{ token.token }}
    </h1>
    <button class="mb-5 px-2 py-1 border" @click="setToken">
      set pinia token
    </button>

    <!-- 使用 Nuxt3 的useState设置数据 -->
    <h1>useState: {{ count }}</h1>
    <button class="px-2 py-1 border" @click="handleAdd">
      add
    </button>
    <TestStoreChildren />
    <button class="px-2 py-1 border" @click="clearState">
      clear Nuxt State
    </button>
  </div>
</template>

<script lang="ts" setup>
import TestStoreChildren from './test-store_children.vue'

const token = useMyUserStore()
function setToken() {
  token.setToken('99999')
}

const count = useState<number>('_test_store_count', () => 1)
function handleAdd() {
  count.value++
}
function clearState() {
  clearNuxtState('_test_store_count')
}
</script>
