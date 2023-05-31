import { TGqlVariables, TGqlResult } from '~/types/gql'
import { useDeviceStore } from '~/store/device/index'
import { useUserStore } from '~/store/user/index'

type TUserSignUpPayload = TGqlVariables<'createAccountMutation'>['accountData']
type TUserSignInData = TGqlVariables<'loginAccountMutation'>['loginData']
type TUserData = TGqlResult<'createAccountMutation'>

export async function createAccount(payload: TUserSignUpPayload): Promise<boolean> {
  const userStore = useUserStore()
  const deviceStore = useDeviceStore()
  if (!deviceStore.clientId) {
    await deviceStore.initilizateClientId()
  }
  const userData: TUserData = await GqlCreateAccountMutation({
    accountData: payload,
    clientId: deviceStore.clientId ? deviceStore.clientId : '',
  })

  if (userData) {
    setLocalFastLoginData(userData.createUser)
    userStore.isAuth = true
    userStore.user = userData.createUser
  }

  return true
}

export async function loginAccount(payload: TUserSignInData): Promise<boolean> {
  const userStore = useUserStore()
  const userData = await GqlLoginAccountMutation({
    loginData: payload,
  })

  if (userData) {
    setLocalFastLoginData(userData.loginUser)
    userStore.isAuth = true
    userStore.user = userData.loginUser
  }

  return true
}

export function logoutFromAccount(): void {
  const userStore = useUserStore()
  userStore.isAuth = false
  userStore.user = null
  localStorage.removeItem('fastLogin')
}

function setLocalFastLoginData(loginData: TUserData['createUser']): void {
  localStorage.setItem(
    'fastLogin',
    JSON.stringify({
      id: loginData?.uid,
      username: loginData?.username,
      email: loginData?.email,
    }),
  )
}
