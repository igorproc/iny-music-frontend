<template>
  <div class="footer-copyright">
    <span class="footer-copyright__text">{{ copyrightData }}</span>
  </div>
</template>

<script setup lang="ts">
  import { Ref, ref } from "vue"

  const copyrightData: Ref<string> = ref("© 2023 Spotyfree")
</script>

<style lang="scss">
.footer-copyright {
  .footer-copyright__text {
    color: #a7a7a7;
  }
}
</style>
