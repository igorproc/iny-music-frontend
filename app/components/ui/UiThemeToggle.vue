<template>
  <ClientOnly>
    <div class="ui-theme-toggle toggle">
      <button
        :aria-label="$t('aside.toggleTheme.ariaLabel')"
        class="toggle__action"
        @click="toggleIcon"
      >
        <Icon
          :name="currentThemeInterface.iconName"
          size="20"
        />
      </button>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { aviliableThemes } from '~/constants/theme'

const colorMode = useColorMode()

const currentThemeInterface = computed(() => {
  const themeCandidate = aviliableThemes.find(theme => theme.name === colorMode.value)
  if (!themeCandidate) {
    return aviliableThemes[0]
  }
  return themeCandidate
})

const toggleIcon = () => {
  const nextThemeId = currentThemeInterface.value.id + 1
  if (nextThemeId > aviliableThemes.length - 1) {
    colorMode.preference = aviliableThemes[0].name
    return
  }
  colorMode.preference = aviliableThemes[nextThemeId].name
}
</script>

<style lang="scss">
.ui-theme-toggle {
  .toggle__action {
    background: transparent;
    color: $accent-color;
    border: none;
    cursor: pointer;
  }
}
</style>
