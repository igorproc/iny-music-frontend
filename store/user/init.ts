import { useUserStore } from './index';

export async function initilizateUser() {
  const token = useCookie('Authorization', { watch: 'shallow' })
  const userStore = useUserStore()
  const loginData = getFastLoginData()
  
  if(!token.value) {
    if(loginData) deleteFastLoginData()
    return
  }

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

function deleteFastLoginData (): void {
  localStorage.removeItem('fastLogin')
}