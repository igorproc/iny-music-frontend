import { defineStore } from "pinia"
import { useDeviceStore } from "./device"

export const useIndexStore = defineStore('index-store', {
  actions: {
    async clientInit(): Promise<void> {
      const deviceStore = useDeviceStore()
      Promise.all([
        deviceStore.initilizateClientId()
      ])
    }
  }
})
