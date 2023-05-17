<template>
  <v-menu content-class="profile-menu__main">
    <template v-slot:activator="{ props }">
      <v-btn
        icon
        color="primary"
        aria-label="account"
        size="large"
        v-bind="props"
      >
        <v-img v-if="userStore.userAvatar" :src="userStore.userAvatar" />
        <v-icon v-else>mdi-account-outline</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-action v-for="linkItem in linkList" :key="linkItem.id">
        <v-btn
          rounded="0"
          elevation="0"
          color="primary"
          :to="linkItem.link"
          :target="{ '_blank': linkItem.isBlank }"
          class="w-100"
        >
          <span class="mr-2">{{ linkItem.label }}</span>
          <v-icon v-if="linkItem.isBlank">mdi-checkbox-blank-badge-outline</v-icon>
        </v-btn>
      </v-list-item-action>
        <v-btn
          rounded="0"
          elevation="0"
          color="primary"
          class="w-100"
          @click="logoutFromAccount()"
        >
          logout
        </v-btn>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user';
import { logoutFromAccount } from '~/store/user/auth';
type THeaderLinkList = {
  id: number
  label: string
  link: string
  isBlank: boolean
}

const userStore = useUserStore()
const linkList: THeaderLinkList[] = [
  {
    id: 0,
    label: "account",
    link: "/",
    isBlank: true
  },
  {
    id: 1,
    label: "profile",
    link: "/",
    isBlank: true
  },
  {
    id: 2,
    label: "support",
    link: "/",
    isBlank: true
  },
  {
    id: 3,
    label: "settings",
    link: "/",
    isBlank: false
  },
]
</script>

<style lang="scss">
.profile-menu__main {
  .v-list {
    background-color: #121212 !important;
  }
}
</style>