import { useUserStore } from '~/store/user/index'
import { createClientId } from '~/store/user/init'
import type { TUserLogin } from '~/types/user'
import { consola } from 'consola'

export const loginUser = async (loginData: TUserLogin['payload']) => {
  const userStore = useUserStore()

  // Authorize Cookies Values
  const cookieClientId = useCookie('client_id')
  const cookieUserId = useCookie('user_id', { maxAge: 60 * 60 * 24 * 30 })

  try {
    if (!cookieClientId.value) {
      await createClientId()
    }
    const userLoginData: TUserLogin['response'] = await GqlLoginUser({ loginData })
    if (!userLoginData?.loginUser) {
      return
    }

    cookieUserId.value = userLoginData.loginUser.uid
    userStore.isAuth = true
    userStore.userData = userLoginData.loginUser
    return true
  } catch (error) {
    consola.error(error)
  }
}
