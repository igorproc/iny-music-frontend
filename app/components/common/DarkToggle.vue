<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
  }],
})
</script>
