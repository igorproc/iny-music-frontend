<template>
  <header class="app-header">
    <div class="header__actions">
      <UiLogo />
      <AppStoryActions />
      <AppHeaderDrawerTrigger />
    </div>
    <div v-if="!userStore.isAuth" class="app-header__links">
      <UiLink
        v-for="link in headerLinks"
        :key="link.id"
        :need-hover-effect="link.needHoverEffect"
        :text="link.text"
        :page-link="link.pageLink"
      />
      <hr class="links__divider" />
    </div>
    <div v-if="!userStore.isAuth" class="app-header__authorize-action">
      <UiLink need-hover-effect :text="$t('Зарегестрироваться')" :page-link="localePath({ name: 'auth-sign-up' })" />
      <UiLink :text="$t('Войти')" :page-link="localePath({ name: 'auth-sign-in' })" class="action__sign-in" />
    </div>
  </header>
</template>

<script setup lang="ts">
import type { IDefaultLink } from '~/types/links'
import { useUserStore } from '~/store/user'
import UiLink from '~/components/ui/links/UiLink.vue'
import UiLogo from '~/components/ui/UiLogo.vue'
import AppStoryActions from '~/components/common/header/AppStoryActions.vue'
import AppHeaderDrawerTrigger from '~/components/common/header/drawer/AppHeaderDrawerTrigger.vue'

const { t } = useI18n()
const localePath = useLocalePath()
const userStore = useUserStore()

const headerLinks: IDefaultLink[] = [
  {
    id: 0,
    needHoverEffect: true,
    text: t('Справка'),
    pageLink: localePath({ name: 'faq' }),
    iconName: '',
  },
  {
    id: 1,
    needHoverEffect: true,
    text: t('Скачать'),
    pageLink: localePath({ name: 'download' }),
    iconName: '',
  },
]
</script>

<style lang="scss">
.app-header {
  padding: 12px 24px;
  background-color: transparentize(#000, 0.5);
  display: grid;
  grid-template-columns: 12fr;

  .header__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .app-story-actions {
      display: none;
    }
  }
  .app-header__links,
  .app-header__authorize-action {
    display: none;
  }
  @media screen and (min-width: map-get($display-breakpoints, 'md')) {
    grid-template-columns: 2fr 7fr 2fr;

    .header__actions {
      .ui-logo {
        display: none;
      }
      .app-story-actions {
        display: block;
      }
      .app-header-drawer-trigger {
        display: none;
      }
    }
    .app-header__links {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .link__text {
        font-weight: bold;
      }
      .links__divider {
        margin: 0;
        height: lib-font-size(18);
      }
    }
    .app-header__authorize-action {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .link__text {
        font-size: lib-font-size(18);
        font-weight: bold;
      }
      .action__sign-in {
        padding: 8px 12px;
        border-radius: 20px;
        border: 1px solid var(--accent-color);

        .link__text {
          color: var(--accent-color);
          font-size: lib-font-size(16);
          font-weight: normal;
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
