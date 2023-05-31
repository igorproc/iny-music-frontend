import { ThemeDefinition } from 'vuetify'

// String that represents the name of the dark theme I am using
export const DARK_THEME = 'dark'
// Dark mode theme
export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#000',
    surface: '#1ed760',
    primary: '#121212',
    accent: '#1ed760',
    secondary: '#FFFFDE',
    error: '#da4f49',
    info: '#00b4d8',
    success: '#1ed760',
    warning: '#FFCC00',
  },
}
