import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index-store', {
  actions: {
    async init () {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve('App Init')
        }, 50)
      })
    },
    async clientInit () {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Client init')
        }, 50)
      })
    },
    async serverInit () {
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Server init')
        }, 50)
      })
    },
  },
})
