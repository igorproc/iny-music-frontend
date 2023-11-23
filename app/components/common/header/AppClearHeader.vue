<template>
  <div class="app-clear-header header">
    <UiLogo />
    <AppHeaderDrawerTrigger />
  </div>
</template>

<script setup lang="ts">
import UiLogo from '~/components/ui/UiLogo.vue'
import AppHeaderDrawerTrigger from '~/components/common/header/drawer/AppHeaderDrawerTrigger.vue'
</script>

<style lang="scss">
.app-clear-header {
  padding: 12px 24px;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
