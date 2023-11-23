<template>
  <aside :class="{ '--is-hidden': !conditionStore.asideIsVisible }" class="app-aside">
    <div class="app-aside__wrapper wrapper">
      <AppAsideActions class="wrapper__actions" />
      <AppAsideHistory :aside-is-visible="conditionStore.asideIsVisible" class="wrapper__links" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useConditionStore } from '~/store/condition'
import AppAsideActions from '~/components/common/aside/AppAsideActions.vue'
import AppAsideHistory from '~/components/common/aside/AppAsideHistory.vue'

const conditionStore = useConditionStore()
</script>

<style lang="scss">
.app-aside {
  width: 270px;
  height: 100%;

  &.--is-hidden {
    width: 60px;
  }
  .app-aside__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;

    .wrapper__links {
      height: 100%;
    }
  }
}
</style>
