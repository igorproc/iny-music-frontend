<template>
  <UiCard
    :class="{ '--hidden': !conditionStore.asideIsVisible }"
    class="app-aside-actions actions"
  >
    <div class="actions__top-side">
      <UiLogo
        v-if="conditionStore.asideIsVisible"
        text-size="32"
      />
      <button
        class="top-side__aside-toggle-action"
        @click="conditionStore.toggleAside"
      >
        <Icon :name="currentToggleIcon" size="20" />
      </button>
    </div>
    <div class="actions__bottom-side">
      <div
        v-for="link in topSideLinks"
        :key="link.id"
        class="bottom-side__link"
      >
        <UiLink
          :need-hover-effect="link.needHoverEffect"
          :text="conditionStore.asideIsVisible ? link.text : ''"
          :page-link="link.pageLink"
        >
          <template #prepend>
            <Icon
              :name="link.iconName"
              size="24"
              class="action__icon"
            />
          </template>
        </UiLink>
      </div>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { useLocalePath } from '#i18n'

import { useConditionStore } from '~/store/condition'
import UiLogo from '~/components/ui/UiLogo.vue'
import UiCard from '~/components/ui/UiCard.vue'
import UiLink from '~/components/ui/links/UiLink.vue'
import type { IDefaultLink } from '~/types/links'

const { t } = useI18n()
const localePath = useLocalePath()
const conditionStore = useConditionStore()

const topSideLinks: IDefaultLink[] = [
  {
    id: 0,
    needHoverEffect: true,
    pageLink: localePath({ name: 'index' }),
    text: t('aside.homeLink.text'),
    iconName: 'ph:house-bold'
  },
  {
    id: 1,
    needHoverEffect: true,
    pageLink: localePath({ name: 'search' }),
    text: t('aside.searchLink.text'),
    iconName: 'ph:magnifying-glass'
  }
]

const currentToggleIcon = computed(() => {
  if (conditionStore.asideIsVisible) {
    return 'ph:arrow-left-light'
  }
  return 'ph:arrow-right-light'
})
</script>

<style lang="scss">
.app-aside-actions {
  .actions__top-side {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .top-side__aside-toggle-action {
      padding: 0.375rem;
      background: transparent;
      border: none;
      color: $accent-color;
      cursor: pointer;
      &:first-child {
        padding: 0;
      }
    }
  }
  .actions__bottom-side {
    margin-top: 0.625rem;

    .bottom-side__link {
      margin-top: 0.5rem;
      .action__icon {
        margin-right: 0.313rem;
      }
    }
  }

  &.--hidden {
    .actions__top-side {
      justify-content: center;
    }
    .actions__bottom-side {
      .bottom-side__link {
        .ui-link__link {
          display: block;

          .link__prepend-text {
            justify-content: center;
            margin-right: 0;
            .action__icon {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
