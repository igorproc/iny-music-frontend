import { useUserStore } from '~/store/user/index'
import { getUserPlatform } from '~/utils/getUserPlatform'
import type { TClientIdCreate } from '~/types/user'

export const initilizateUserLogin = async () => {
  const userStore = useUserStore()

  // Authorize Cookies Values
  const cookieClientId = useCookie('client_id')
  const cookieAuthorizeKey = useCookie('Authorization')
  const cookieUserId = useCookie('user_id')

  if (cookieClientId.value && (!cookieAuthorizeKey.value || !cookieUserId.value)) {
    userStore.clientId = cookieClientId.value
    return
  }

  if (!cookieClientId.value) {
    await createClientId()
    return
  }
  userStore.clientId = cookieClientId.value

  if (!cookieUserId.value) {
    return
  }

  const userData = await GqlGetUserById({ id: Number(cookieUserId.value) })
  if (!userData.getUserByUid) {
    userStore.clientId = cookieClientId.value
    return
  }
  userStore.userData = userData.getUserByUid
  userStore.isAuth = true
}

export const createClientId = async () => {
  const userStore = useUserStore()

  const cookieClientId = useCookie('client_id', { maxAge: 60 * 60 * 24 * 30 })

  try {
    const payload: TClientIdCreate['input']['clientIdData'] = {
      appId: 1,
      platform: getUserPlatform(),
    }
    const clientId: TClientIdCreate['response'] = await GqlCreateClientId({ clientIdData: payload })

    if (!clientId.createUserDevice || !clientId.createUserDevice.clientId) {
      return
    }
    cookieClientId.value = clientId.createUserDevice.clientId
    userStore.clientId = clientId.createUserDevice.clientId
  } catch (error) {
    throw error
  }
}
