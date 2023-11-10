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
    const clientId = await createClientId()
    if (clientId) {
      cookieClientId.value = clientId
      userStore.clientId = clientId
    }
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

async function createClientId () {
  try {
    const payload: TClientIdCreate['input']['clientIdData'] = {
      appId: 1,
      platform: getUserPlatform()
    }
    const clientId: TClientIdCreate['response'] = await GqlCreateClientId({ clientIdData: payload })

    if (!clientId.createUserDevice) {
      return ''
    }
    return clientId.createUserDevice.clientId
  } catch (error) {
    throw error
  }
}
