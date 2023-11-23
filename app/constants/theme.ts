interface IThemeOptions {
  id: number
  name: string
  iconName: string
  isAvailable: true
  status: 'completed' | 'in_progress'
}

export const aviliableThemes: IThemeOptions[] = [
  {
    id: 0,
    name: 'dark',
    iconName: 'ph:moon-bold',
    isAvailable: true,
    status: 'in_progress',
  },
  {
    id: 1,
    name: 'light',
    iconName: 'ph:sun-bold',
    isAvailable: true,
    status: 'in_progress',
  },
]
