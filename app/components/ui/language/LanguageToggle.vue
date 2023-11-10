<template>
  <button
    :aria-label="$t('aside.languageToggle.ariaLabel')"
    class="app-language-toggle"
    @click="conditionStore.openSwitchLanguageModal"
  >
    <Icon name="ph:globe-bold" size="18" class="toggle__icon" />
    <span class="toggle__text">
      {{ currentLocaleName }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { useConditionStore } from '~/store/condition'

const conditionStore = useConditionStore()
const { locale, locales } = useI18n()

const currentLocaleName = computed(() => {
  if (!(locales.value).length) {
    return ''
  }

  const currentLocale = (locales.value).find(availableLocale => availableLocale.code === locale.value)
  if (!currentLocale) {
    return
  }
  return currentLocale.name
})
</script>

<style lang="scss">
.app-language-toggle {
  padding: 4px 12px;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 20px;
  border: 1px solid $accent-color;
  cursor: pointer;

  .toggle__icon,
  .toggle__text {
    color: $accent-color;
  }
  .toggle__text {
    margin-left: 0.25rem;
    font-size: lib-font-size(18);
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
