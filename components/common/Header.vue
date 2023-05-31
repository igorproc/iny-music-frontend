<template>
  <v-container class="d-flex align-center justify-space-between the-header">
    <HeaderHistoryActions />
    <HeaderLinkList />
  </v-container>
</template>

<script setup lang="ts">
import HeaderLinkList from '~/components/common/header/LinkList.vue'
import HeaderHistoryActions from '~/components/common/header/HistoryActions.vue'
</script>
