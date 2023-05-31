export type TLinkItem = {
  id: number
  label: string
  url: string
}

export type TFooterLinkList = {
  id: number
  title: string
  links: TLinkItem[]
}
