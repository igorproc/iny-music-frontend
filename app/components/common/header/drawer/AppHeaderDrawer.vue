<template>
  <div :class="{ '--is-open': conditionStore.headerDrawerIsVisible }" class="app-header-drawer">
    <div class="drawer__dialog">
      <button
        :aria-label="$t('Нажмите чтобы закрыть менб с ссылками')"
        class="drawer__close-action"
        @click="conditionStore.closeHeaderDrawer"
      >
        <Icon name="ci:close-md" size="32" />
      </button>
      <div class="dialog__list">
        <NuxtLink
          v-for="link in drawerLinks"
          :key="link.name"
          :to="link.pageLink"
          :aria-label="link.ariaLabel"
          class="list__item"
          @click="conditionStore.closeHeaderDrawer"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConditionStore } from '~/store/condition'
import { useUserStore } from '~/store/user'

const { t } = useI18n()
const localePath = useLocalePath()
const conditionStore = useConditionStore()
const userStore = useUserStore()

const guestLinks: any[] = [
  {
    name: t('Зарегестрироваться'),
    ariaLabel: t('Нажмите, чтобы перейти на страницу регистрации'),
    pageLink: localePath({ name: 'auth-sign-up' }),
  },
  {
    name: t('Войти'),
    ariaLabel: t('Нажмите, чтобы перейти на страницу авторизации'),
    pageLink: localePath({ name: 'auth-sign-in' }),
  },
]

const drawerLinks = computed(() => {
  if (userStore.isAuth) {
    return []
  }
  return guestLinks
})
</script>

<style lang="scss">
.app-header-drawer {
  display: none;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  transition: left 1s ease;
  z-index: 9999;

  &.--is-open {
    display: block;
    left: 0;
  }
  .drawer__dialog {
    height: calc(100% - 112px);
    padding: 56px 40px;
    position: relative;

    .drawer__close-action {
      padding: 32px 30px;
      position: absolute;
      top: 0;
      right: 0;
      background: transparent;
      border: none;
      color: var(--accent-color);
    }
    .dialog__list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .list__item {
        padding: 12px 0;
        text-decoration: none;
        font-size: lib-font-size(18);
        font-weight: bold;
        color: var(--accent-color);
      }
    }
  }
}
</style>
