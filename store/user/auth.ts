import { TGqlVariables, TGqlResult } from './../../types/gql';
import { useUserStore } from "~/store/user/index"

type TUserSignUpPayload = TGqlVariables<'createAccountMutation'>
type TUserSignUpData = TGqlResult<'createAccountMutation'>

export async function createAccount(payload: TUserSignUpPayload): Promise<void> {
  const userStore = useUserStore()
  const userData = await GqlCreateAccountMutation(payload)
  userStore.isAuth = true
  userStore.user = userData.createUser
}