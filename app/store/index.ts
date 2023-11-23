import { defineStore } from 'pinia'

import { initilizateUserLogin } from '~/store/user/init'

export const useIndexStore = defineStore('index-store', {
  actions: {
    async init() {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve('App Init')
        }, 50)
      })
    },
    async clientInit() {
      return await initilizateUserLogin()
    },
    async serverInit() {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Server init')
        }, 50)
      })
    },
  },
})
