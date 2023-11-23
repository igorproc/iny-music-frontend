<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div v-if="online">Is online</div>
        <div v-else>You're offline</div>
      </ClientOnly>
      <template #fallback>
        <div>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { useOnline } from '@vueuse/core'

const online = useOnline()
</script>
