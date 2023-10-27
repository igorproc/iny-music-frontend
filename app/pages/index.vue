<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div v-if="online">
          Is online
        </div>
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
  import AppFooter from '~/components/common/Footer.vue'

  const online = useOnline()
</script>
