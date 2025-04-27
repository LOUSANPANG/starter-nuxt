export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return { body }
})

// 使用
// const { body } = await $fetch('/api/submit', {
//   method: 'post',
//   body: { test: 123 }
// })
