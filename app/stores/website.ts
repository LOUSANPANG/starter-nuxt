export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: 'Nuxt'
  }),

  actions: {
    // async fetch () {
    //   const infos = await $fetch('https://api.nuxt.com/modules/pinia')
    //   this.name = infos.name
    // },
  },
})
