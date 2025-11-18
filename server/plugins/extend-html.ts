export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // TODO: 添加描述
    html.head.push(`<meta name="description" content="" />`)
  })

  nitroApp.hooks.hook('render:response', (response, { event }) => {
    console.log(response)
  })
})
