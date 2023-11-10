import { defineStore } from 'pinia'

import type { TUserData } from '~/types/user'

interface IUserStoreState {
    clientId: string,
    isAuth: boolean,
    userData: TUserData | null
}

export const useUserStore = defineStore('user-store', {
  state (): IUserStoreState {
    return {
      clientId: '',
      isAuth: false,
      userData: null
    }
  }
})
