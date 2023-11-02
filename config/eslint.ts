import type { ModuleOptions } from '@nuxtjs/eslint-module'

export const eslint: ModuleOptions = {
  fix: true,
  cache: false,
  useEslintrc: true,
  emitWarning: true,
}
