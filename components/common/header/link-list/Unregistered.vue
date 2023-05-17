<template>
  <div class="d-flex app-header-unregistered-link-list link-list">
    <div class="link-list__content">
      <v-btn
        v-for="item in itemList"
        :key="item.id"
        size="large"
        variant="text"
        :ripple="false"
        class="link-list__content-item item"
      >
        <nuxt-link :to="localePath(item.url)" class="text-decoration-none item__content">
          {{ item.label }}
        </nuxt-link>
      </v-btn>
    </div>
    <v-divider
      :thickness="1"
      vertical
      inset
      color="#fff"
      class="link-list__content-divider border-opacity-100"
    />
    <div class="link-list__actions">
      <v-btn
        size="large"
        variant="text"
        :ripple="false"
        class="link-list__actions-item item"
      >
      <nuxt-link :to="localePath({ name: 'sign-up' })" class="text-decoration-none item__content">
          {{ $t('header.unregistered.actions.sign_up') }}
        </nuxt-link>
      </v-btn>
      <v-btn
        size="large"
        rounded
        flat
        color="#fff"
        class="link-list__actions-item --button item"
      >
        <nuxt-link to="/sign-in" class="text-decoration-none item__content">
          {{ $t('header.unregistered.actions.sign_in') }}
        </nuxt-link>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { TLinkItem } from "~/types/linkList"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const itemList = ref<TLinkItem[]>([
  {
    id: 0,
    label: t('header.unregistered.links.support'),
    url: "/us"
  },
  {
    id: 1,
    label: t('header.unregistered.links.donate'),
    url: "/donate"
  },
])
</script>

<style lang="scss">
.app-header-unregistered-link-list {
  .link-list__content, .link-list__actions {
    .link-list__content-item, .link-list__actions-item {
      .v-btn__overlay {
        display: none;
      }
      .item__content {
        font-size: 14px;
        color: #a7a7a7;
      }
      &:hover {
        .item__content {
          color: #fff;
          font-weight: bold;
        }
      }
      &.--button {
        .item__content {
          color: #000;
          font-weight: bold;
          &:hover {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>