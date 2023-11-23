<template>
  <UiCard :class="{ '--is-hidden': !asideIsVisible }" class="app-aside-history history">
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
        <div v-else-if="!userHistory.length && asideIsVisible" class="history__tips-list">
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
import UiCard from '~/components/ui/UiCard.vue'
import UiLink from '~/components/ui/links/UiLink.vue'
import UiLanguageToggle from '~/components/ui/language/LanguageToggle.vue'
import UiThemeToggle from '~/components/ui/UiThemeToggle.vue'

interface Props {
  asideIsVisible: boolean
}
const userHistory: unknown[] = []

const localePath = useLocalePath()
const props = defineProps<Props>()
const { asideIsVisible } = toRefs(props)
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
        color: var(--accent-color);
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
  &.--is-hidden {
    .history__content {
      .content__header {
        display: flex;
        flex-direction: column;
        align-items: center;

        .header__go-to-likes-action {
          .link__prepend-text,
          .link__append-text {
            margin: 0;
          }
          .link__text {
            display: none;
          }
        }
        .header__add-playlist-action {
          margin-top: 0.5rem;
        }
      }
    }
    .history__footer {
      flex-direction: column-reverse;

      .app-language-toggle {
        margin-top: 0.5rem;
        border: none;

        .toggle__text {
          display: none;
        }
      }
    }
  }
}
</style>
