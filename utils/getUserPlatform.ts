function useInyDeviceTest() {
  return [
    { device: 'Android', platform: /Android/ },
    { device: 'iPhone', platform: /iPhone/ },
    { device: 'iPad', platform: /iPad/ },
    { device: 'Symbian', platform: /Symbian/ },
    { device: 'Windows Phone', platform: /Windows Phone/ },
    { device: 'Tablet OS', platform: /Tablet OS/ },
    { device: 'Linux', platform: /Linux/ },
    { device: 'Windows', platform: /Windows NT/ },
    { device: 'Macintosh', platform: /Macintosh/ },
  ]
}

export function getUserPlatform(): string {
  const userAgent: string = window.navigator.userAgent
  const allowedPlatforms = useInyDeviceTest()
  let userPlatform: string = ''

  allowedPlatforms.forEach((allowedPlatform) => {
    if(userAgent.match(allowedPlatform.platform)) {
      userPlatform = allowedPlatform.device
    }
  })

  if(!userPlatform) throw new Error('такого девайса не существует')
  return userPlatform 
}