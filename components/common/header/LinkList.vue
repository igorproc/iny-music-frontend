<template>
  <div class="header-links-group">
    <ClientOnly v-if="userStore.userIsAuth">
      <CommonHeaderLinkListRegistered />
    </ClientOnly>
    <CommonHeaderLinkListUnregistered v-else />
  </div>
</template>

<script setup lang="ts">
import CommonHeaderLinkListUnregistered from '~/components/common/header/link-list/Unregistered.vue'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
</script>
