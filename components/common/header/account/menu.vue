<template>
  <v-menu content-class="profile-menu__main">
    <template #activator="{ props }">
      <v-btn icon color="primary" aria-label="account" size="large" v-bind="props" :ripple="false">
        <v-img v-if="userStore.userAvatar" :src="userStore.userAvatar" />
        <v-icon v-else icon="mdi-account-outline" />
      </v-btn>
    </template>

    <v-list class="profile-menu__list list">
      <v-list-item-action v-for="linkItem in linkList" :key="linkItem.id" class="list__item">
        <v-btn
          rounded="0"
          elevation="0"
          color="#282828"
          :to="linkItem.link"
          :target="{ _blank: linkItem.isBlank }"
          class="list__item-action action w-100"
        >
          <span class="action__label mr-2">{{ linkItem.label }}</span>
          <v-icon v-if="linkItem.isBlank" icon="mdi-checkbox-blank-badge-outline" class="action__prepend-icon" />
        </v-btn>
      </v-list-item-action>
      <v-list-item-action class="list__item">
        <v-btn
          rounded="0"
          elevation="0"
          color="#282828"
          class="list__item-action action w-100"
          @click="logoutFromAccount()"
        >
          <span class="action__label">logout</span>
        </v-btn>
      </v-list-item-action>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/user'
import { logoutFromAccount } from '~/store/user/auth'
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
    label: 'account',
    link: '/',
    isBlank: true,
  },
  {
    id: 1,
    label: 'profile',
    link: '/',
    isBlank: true,
  },
  {
    id: 2,
    label: 'support',
    link: '/',
    isBlank: true,
  },
  {
    id: 3,
    label: 'settings',
    link: '/',
    isBlank: false,
  },
]
</script>

<style lang="scss">
.profile-menu__main {
  .v-list {
    background-color: #282828 !important;
  }
  .profile-menu__list {
    .list__item {
      .list__item-action,
      .action__label {
        color: #fff;
      }
    }
  }
}
</style>
