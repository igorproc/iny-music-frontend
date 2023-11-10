<template>
  <div
    v-if="conditionStore.switchLanguageModalIsVisible"
    class="app-language-modal"
  >
    <div class="modal__dialog dialog">
      <div class="dialog__content">
        <div class="content__header">
          <h2
            class="header__title"
          >
            {{ $t('Выбрать язык') }}
          </h2>
          <span
            class="header__description"
          >
            {{ $t('Информация на сайте specto.su будет обновлена.') }}
          </span>
          <button
            :aria-label="$t('languageModal.closeAction.ariaLabel')"
            class="content__close-modal-action"
            @click="conditionStore.closeSwitchLanguageModal"
          >
            <Icon name="ci:close-md" size="24" />
          </button>
        </div>
        <div class="content__locales-list list">
          <button
            v-for="item in locales"
            :key="item.code"
            class="list__item"
            :disabled="item.code === locale"
            @click="setLocale(item.code)"
          >
            <span class="item__locale-name">
              {{ item.name }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConditionStore } from '~/store/condition'

const conditionStore = useConditionStore()
const { locales, locale, setLocale } = useI18n()
</script>

<style lang="scss">
.app-language-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  .modal__dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: $surface-color;
    border-radius: 8px;

    .dialog__content {
      .content__header {
        position: relative;
        padding: 10px 8px;
        text-align: start;
        padding-bottom: 5px;
        border-bottom: 1px solid;

        .header__title {
          color: $primary-color;
          margin-top: 0;
          margin-bottom: 0.75rem;
        }
        .header__description {
          color: $primary-color;
        }
      }
      .content__locales-list {
        padding: 10px 8px;
        display: flex;
        flex-wrap: wrap;

        .list__item {
          margin-right: 10px;
          margin-bottom: 10px;
          padding: 8px 12px;
          background: transparent;
          border: 1px solid;
          border-radius: 20px;
          color: $primary-color;
          cursor: pointer;

          &[disabled] {
            opacity: 0.6;
            cursor: unset;
          }
        }
      }
      .content__close-modal-action {
        padding: 5px;
        background: transparent;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: map-get($display-breakpoints, 'md')) {
    .modal__dialog {
      width: auto;

      .dialog__content {
        padding: 10px 18px;
      }
      .content__locales-list {
        padding: 10px 18px;
      }
    }
  }
}
</style>
