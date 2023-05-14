import { NewUserInput } from "~/.nuxt/gql/default"
import { defineStore } from "pinia"
import { TGqlResult } from "~/types/gql"

type TUserStoreState = {
  isAuth: boolean,
  user: TGqlResult<'createAccountMutation'> | null
}

export const useUserStore = defineStore('user-store', {
  state: (): TUserStoreState => ({
    isAuth: false,
    user: null,
  }),
  getters: {
    userIsAuth: (state) => state.isAuth
  }
})