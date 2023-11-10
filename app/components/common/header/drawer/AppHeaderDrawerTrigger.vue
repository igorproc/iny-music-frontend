<template>
  <div class="app-header-drawer-trigger">
    <button
      :aria-label="$t('Нажмите чтобы открыть окно с полезными ссылками')"
      class="trigger__action"
      @click="conditionStore.openHeaderDrawer"
    >
      <Icon :name="currentIconName" size="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { useConditionStore } from '~/store/condition'

const userStore = useUserStore()
const conditionStore = useConditionStore()

const currentIconName = computed(() => {
  if (userStore.isAuth) {
    return 'ph:gear-bold'
  }
  return 'ph:list-bold'
})
</script>

<style lang="scss">
.app-header-drawer-trigger {
  .trigger__action {
    padding: 0;
    background: transparent;
    border: none;
    color: $accent-color;
  }
}
</style>
