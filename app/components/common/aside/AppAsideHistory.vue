<template>
  <UiCard class="app-aside-history history">
    <div class="history__content">
      <div class="content__header header">
        <UiLink
          need-hover-effect
          :text="$t('aside.historySection.likesList.text')"
          :page-link="localePath({ name: 'likes' })"
          class="header__go-to-likes-action"
        >
          <template #prepend>
            <Icon name="ph:text-columns-fill" size="24" />
          </template>
        </UiLink>
        <button class="header__add-playlist-action">
          <Icon name="ph:plus-bold" size="18" />
        </button>
      </div>
      <div class="history">
        <div v-if="userHistory.length" class="history__items-list" />
        <div v-else-if="!userHistory.length && conditionStore.asideIsVisible" class="history__tips-list">
          <UiTip
            :title="$t('aside.tip.newPlaylist.title')"
            :description="$t('aside.tip.newPlaylist.description')"
            :link="localePath({ name: 'playlist.create' })"
            :link-text="$t('aside.tip.newPlaylist.linkText')"
            class="list__item"
          />
        </div>
      </div>
    </div>
    <div class="history__footer">
      <UiLanguageToggle />
      <UiThemeToggle />
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import { useConditionStore } from '~/store/condition'
import UiCard from '~/components/ui/UiCard.vue'
import UiLink from '~/components/ui/links/UiLink.vue'
import UiLanguageToggle from '~/components/ui/language/LanguageToggle.vue'
import UiThemeToggle from '~/components/ui/UiThemeToggle.vue'

const userHistory: unknown[] = []

const conditionStore = useConditionStore()
const localePath = useLocalePath()
</script>

<style lang="scss">
.app-aside-history {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .history__content {
    display: flex;
    flex-direction: column;

    .content__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header__add-playlist-action {
        background-color: transparent;
        border: none;
        color: $accent-color;
        cursor: pointer;
      }
    }
    .history__tips-list {
      display: flex;
      flex-direction: column;
    }
  }
  .history__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
