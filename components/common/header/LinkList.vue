<template>
  <div class="header-links-group">
    <CommonHeaderLinkListRegistered v-if="userStore.userIsAuth" />
    <CommonHeaderLinkListUnregistered v-else />
  </div>
</template>

<script setup lang="ts">
import CommonHeaderLinkListUnregistered from '~/components/common/header/link-list/Unregistered.vue'
import { useUserStore } from "~/store/user";

const userStore = useUserStore()
</script>
