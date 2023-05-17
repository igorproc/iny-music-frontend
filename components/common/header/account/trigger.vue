<template>
  <v-btn icon color="primary" aria-label="account" size="large">
    <v-img v-if="userStore.userAvatar" :src="userStore.userAvatar" />
    <v-icon v-else>mdi-account-outline</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user';

const userStore = useUserStore()
</script>
