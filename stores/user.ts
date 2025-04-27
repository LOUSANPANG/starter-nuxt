import { defineStore } from 'pinia'

export const useMyUserStore = defineStore('myUserStore',
  {
    state: () => ({
      token: '111',
    }),
    actions: {
      setToken(token: string) {
        this.token = token
      },
    },
  })
