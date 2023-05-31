import { defineStore } from 'pinia'
import { TGqlResult } from '~/types/gql'

type TUserStoreState = {
  isAuth: boolean
  user: TGqlResult<'createAccountMutation'>['createUser'] | null
}

export const useUserStore = defineStore('user-store', {
  state: (): TUserStoreState => ({
    isAuth: false,
    user: null,
  }),
  getters: {
    userIsAuth: (state) => state.isAuth,
    userAvatar: (state) => state.user?.avatarUrl,
  },
})
