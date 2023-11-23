export interface IDefaultLink {
  id: number
  needHoverEffect: boolean
  text: string
  pageLink: string
  iconName: string
}

export interface IDefaultAuthAction {
  id: number
  iconName: string
  text: string
  action?: () => void
}
