<template>
  <v-container fluid class="the-header header">
    <div class="d-flex align-center justify-space-between header__actions">
      <HeaderHistoryActions />
      <HeaderLinkList />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import HeaderLinkList from '~/components/common/header/LinkList.vue'
import HeaderHistoryActions from '~/components/common/header/HistoryActions.vue'
</script>

<style lang="scss">
.the-header {
  height: 332px;
}
</style>
