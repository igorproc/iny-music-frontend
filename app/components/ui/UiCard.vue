<template>
  <div class="ui-card">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.ui-card {
  padding: 12px 8px;
  background: $surface-color;
  border-radius: 8px;
}
</style>
