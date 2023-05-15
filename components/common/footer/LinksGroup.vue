<template>
  <div class="d-flex flex-column align-start justify-start footer-links-group">
    <span class="group__title">{{ props.title }}</span>
    <nuxt-link
      v-for="link in props.group"
      :key="link.id"
      :to="localePath(link.url)"
      class="text-decoration-none mt-2 links-group__item"
    >
      <span class="group__link-label">{{ link.label }}</span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { TLinkItem } from "@/types/linkList"
import { PropType } from "vue"

const props = defineProps({
  group: {
    type: Object as PropType<TLinkItem[]>,
    reqired: true
  },
  title: String
})
</script>

<style lang="scss">
.footer-links-group {
  .group__title {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
  .group__link-label {
    color: #a7a7a7;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
}
</style>