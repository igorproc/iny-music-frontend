<template>
  <div class="d-flex app-header-logined-link-list link-list">
    <div class="link-list__content">
      <v-btn rounded size="large" :ripple="false" color="accent" :to="localePath({ name: 'donate' })" class="mr-2">
        {{ $t('header.unregistered.links.donate') }}
      </v-btn>
      <v-btn icon color="primary" aria-label="friends" class="mr-2">
        <v-icon>mdi-account-group-outline</v-icon>
      </v-btn>
      <CommonHeaderAccountTrigger />
    </div>
  </div>
</template>

<script setup lang="ts">
import CommonHeaderAccountTrigger from '~/components/common/header/account/trigger.vue'
</script>