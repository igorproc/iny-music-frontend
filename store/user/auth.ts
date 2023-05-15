import { useDeviceStore } from './../device/index';
import { TGqlVariables, TGqlResult } from './../../types/gql';
import { useUserStore } from "~/store/user/index"

type TUserSignUpPayload = TGqlVariables<'createAccountMutation'>['accountData']
type TUserSignUpData = TGqlResult<'createAccountMutation'>

export async function createAccount(payload: TUserSignUpPayload): Promise<boolean> {
  const userStore = useUserStore()
  const deviceStore = useDeviceStore()
  if(!deviceStore.clientId) {
    await deviceStore.initilizateClientId()
  }
  const userData: TUserSignUpData = await GqlCreateAccountMutation({
    accountData: payload,
    clientId: deviceStore.clientId ? deviceStore.clientId : ''
  })
  userStore.isAuth = true
  userStore.user = userData.createUser
  return true
}