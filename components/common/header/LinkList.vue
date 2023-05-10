<template>
  <div>
    <span v-if="isAuth">is auth</span>
    <CommonHeaderLinkListUnregistered v-else />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
import CommonHeaderLinkListUnregistered from '~/components/common/header/link-list/Unregistered.vue'

const isAuth: Ref<boolean> = ref(false)
</script>
