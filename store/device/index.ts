import { defineStore } from 'pinia'
import { getUserPlatform } from '~/utils/getUserPlatform'

export type TDeviceStoreState = {
  clientId: string | null
}

export const useDeviceStore = defineStore('device-store', {
  state: (): TDeviceStoreState => ({
    clientId: null,
  }),
  getters: {
    userClientId: (state) => state.clientId,
  },
  actions: {
    async initilizateClientId(): Promise<void> {
      const userClientId = useCookie<string>('client_id', {
        default: () => '',
        watch: 'shallow',
        maxAge: 604800 * 1000,
      })
      if (userClientId.value) {
        this.clientId = userClientId.value
        return
      }
      const payload = {
        appId: 1,
        platform: getUserPlatform(),
      }
      const clientId: any = await GqlCreateClientIdMutation({ deviceData: payload })
      userClientId.value = clientId.createUserDevice
      this.clientId = clientId.createUserDevice
    },
  },
})
