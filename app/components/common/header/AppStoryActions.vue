<template>
  <div class="app-story-actions">
    <button :disabled="!canRouteBack" class="actions__action" @click="$router.back">
      <Icon name="ph:arrow-left" size="20" />
    </button>
    <button :disabled="!canRouteForward" class="actions__action" @click="$router.forward">
      <Icon name="ph:arrow-right" size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const canRouteForward = ref(false)
const canRouteBack = ref(false)

watch(route, () => {
  if (router.options.history.state.back) {
    canRouteBack.value = true
  }
  if (router.options.history.state.forward) {
    canRouteForward.value = true
  }
})
</script>

<style lang="scss">
.app-story-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  .actions__action {
    padding: 6px;
    background: transparent;
    border: 3px solid var(--surface-color);
    border-radius: 100%;
    color: var(--accent-color);
    cursor: pointer;

    &[disabled] {
      opacity: 0.6;
      cursor: unset;
    }
  }
}
</style>
