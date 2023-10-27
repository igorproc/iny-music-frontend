import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    vue: true,
    gitignore: true,
  },
  unocss.configs.flat,
)
