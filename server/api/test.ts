export default defineEventHandler(async (event) => {
  // 流式输出
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue('Hello')
      controller.enqueue('Nitro')
      controller.close()
    },
  })

  return stream
})
