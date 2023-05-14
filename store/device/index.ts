import { CookieRef } from "nuxt/app"
import { defineStore } from "pinia"
import { getUserPlatform } from "~/utils/getUserPlatform"

export type TDeviceStoreState = {
  clientId: string | null
}

export const useDeviceStore = defineStore('device-store', {
  state: (): TDeviceStoreState => ({
    clientId: null
  }),
  getters: {
    userClientId: (state) => state.clientId
  },
  actions: {
    async initilizateClientId(): Promise<void> {
      const userClientId: CookieRef<string> = useCookie('client_id', { default: () => '', watch: 'shallow' })
      if(userClientId.value) {
        this.clientId = userClientId.value
        return
      }
      const payload = {
        appId: 1,
        platform: getUserPlatform()
      }
      const clientId: any = await GqlCreateClientIdMutation({ deviceData: payload })
      userClientId.value = clientId.createUserDevice
      this.clientId = clientId.createUserDevice
    }
  }
})
