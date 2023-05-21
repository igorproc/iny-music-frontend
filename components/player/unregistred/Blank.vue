<template>
  <v-container fluid class="d-flex justify-space-between align-center unregistred-blank">
    <div class="d-flex flex-column unregistred-blank__content content">
      <span class="content__title">{{ $t('player.unregistered_bar.title') }}</span>
      <span class="content__subtitle">{{ $t('player.unregistered_bar.subtitle') }}</span>
    </div>
    <div class="unregistred-blank__actions">
      <v-btn
        rounded
        size="large"
        :ripple="false"
        color="#fff"
        :to="localePath({ name: 'sign-up' })"
      >
        <span class="actions__label">{{ $t('player.unregistered_bar.actions.sign_up.label') }}</span>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.unregistred-blank {
  background-image: linear-gradient(90deg,#af2896,#509bf5);
  color: #fff;
  .unregistred-blank__content {
    .content__subtitle {
      font-weight: bold;
    }
  }
  .unregistred-blank__actions {
    .actions__label {
      font-weight: bold;
      text-transform: lowercase;
    }
  }
}
</style>