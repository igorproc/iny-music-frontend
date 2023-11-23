<template>
  <UiCard class="app-sign-in-card card">
    <h1 class="card__title">
      {{ $t('Войти в specto') }}
    </h1>
    <div class="form__fast-auth-list list">
      <button
        v-for="fastAuthItem in fastAuthLinks"
        :key="fastAuthItem.id"
        :disabled="isLoading"
        class="list__item item"
        @click="fastAuthItem.action"
      >
        <Icon :name="fastAuthItem.iconName" size="24" class="item__prepend-icon" />
        <span class="item__text">{{ fastAuthItem.text }}</span>
        <div class="item__append-icon" />
      </button>
    </div>
    <hr class="form__divider" />
    <AppSignInForm @loading-status-is-updated="onLoadingStatusUpdated" />
  </UiCard>
</template>

<script setup lang="ts">
import type { IDefaultAuthAction } from '~/types/links'
import UiCard from '~/components/ui/UiCard.vue'
import AppSignInForm from '~/components/auth/sign-in/AppSignInForm.vue'

const { t } = useI18n()

const fastAuthLinks: IDefaultAuthAction[] = [
  {
    id: 0,
    text: t('Войти через Google'),
    iconName: 'ph:google-logo-bold',
  },
  {
    id: 1,
    text: t('Войти через Telegram'),
    iconName: 'ph:telegram-logo-bold',
  },
]

const isLoading = ref(false)

const onLoadingStatusUpdated = (loadingStatus: boolean) => {
  isLoading.value = loadingStatus
}
</script>

<style lang="scss">
.app-sign-in-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card__title {
    margin: 0px 0px 1.5rem;
    font-size: lib-font-size(20);
    color: var(--accent-color);
  }
  .form__fast-auth-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .list__item {
      width: 100%;
      padding: 0.125rem 0.375rem;
      border: 1px solid var(--accent-color);
      border-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item__prepend-icon,
      .item__text {
        color: var(--accent-color);
      }
    }
  }
  .form__divider {
    margin: 1.5rem 0;
    width: 100%;
    color: var(--accent-color);
    opacity: 0.5;
  }

  @media screen and (min-width: map-get($display-breakpoints, 'sm')) {
    padding: 32px;

    .form__title {
      margin: 0px 0px 2rem;
      font-size: unset;
    }
    .form__fast-auth-list {
      width: fit-content;

      .list__item {
        padding: 0.35rem 1rem;
      }
    }
  }

  @media screen and (min-width: map-get($display-breakpoints, 'xl')) {
    .form__fast-auth-list {
      width: 100%;
    }
  }
}
</style>
