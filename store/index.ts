import { defineStore } from "pinia"
import { useDeviceStore } from "./device"
import { initilizateUser } from "./user/init"

export const useIndexStore = defineStore('index-store', {
  actions: {
    async appInit(): Promise<void> {
      console.log('app-init')
      
    },
    async clientInit(): Promise<void> {
      const deviceStore = useDeviceStore()
      Promise.all([
        deviceStore.initilizateClientId(),
        initilizateUser()
      ])
    }
  }
})
