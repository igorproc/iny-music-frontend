import { useUserStore } from './index';

export async function initilizateUser() {
  const userStore = useUserStore()
  const loginData = getFastLoginData()
  if(!loginData) return

  const userData = await GqlGetUserDataByUid({ uid: Number(loginData.id) })

  if(userData) {
    userStore.isAuth = true
    userStore.user = userData.getUserByUid
  }
}

function getFastLoginData (): { id: string, username: string, email: string }  {
  const fastData = localStorage.getItem('fastLogin')
  return fastData ? JSON.parse(fastData) : null
}
