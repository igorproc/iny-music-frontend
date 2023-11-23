<template>
  <NuxtLink :to="localePath({ name: 'index' })" class="ui-logo">
    <span :style="logoContentSize" :class="{ '--default-size': !logoContentSize }" class="ui-logo__text">
      {{ logoText }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  textSize?: string
  content?: string
}

const localePath = useLocalePath()
const { t } = useI18n()
const props = defineProps<Props>()

const { textSize, content } = toRefs(props)
const logoText = computed(() => {
  if (!content?.value) {
    return t('global.appTitle')
  }
  return content.value
})
const logoContentSize = computed(() => {
  if (textSize && textSize?.value) {
    return {
      fontSize: `${textSize.value}px`,
    }
  }
  return ''
})
</script>

<style lang="scss">
.ui-logo {
  text-decoration: unset;

  .ui-logo__text {
    font-family: 'Bebas Neue', sans-serif;
    background: $brand-color;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &.--default-size {
      font-size: lib-font-size(36);
    }
  }
}
</style>
