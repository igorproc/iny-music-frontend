import path from 'path'

import type { ModuleOptions } from '@nuxtjs/style-resources'

export const styleResources: ModuleOptions = {
  scss: [
    path.join(__dirname, 'app/assets/style/source/ui/_index.scss')
  ]
}
