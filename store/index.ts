import { defineStore } from 'pinia'
import { useDeviceStore } from '~/store/device'
import { initilizateUser } from '~/store/user/init'

export const useIndexStore = defineStore('index-store', {
  actions: {
    async appInit(): Promise<void> {
      return
    },
    async clientInit(): Promise<void> {
      const deviceStore = useDeviceStore()
      Promise.all([deviceStore.initilizateClientId(), initilizateUser()])
    },
  },
})
