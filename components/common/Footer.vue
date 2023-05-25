<template>
  <v-container fluid class="footer">
    <v-row class="footer__links">
      <v-col
        v-for="group in linksList"
        :key="group.id"
        cols="3"
      >
        <CommonFooterLinksGroup :group="group.links" :title="group.title" />
      </v-col>
      <v-spacer />
      <v-col cols="2" class="d-flex justify-end footer-links__social">
        <CommonFooterSocialLinks />
      </v-col>
    </v-row>
    <v-divider class="footer__divider" />
    <div class="footer__copyright">
      <CommonFooterCopyright />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { TFooterLinkList } from "~/types/linkList"
import CommonFooterCopyright from "~/components/common/footer/Copyright.vue"

const { t } = useI18n()
const linksList: TFooterLinkList[] = [
  {
    id: 0,
    title: t('footer.company.title'),
    links: [
      {
        id: 0,
        label: t('footer.company.links.about'),
        url: '/'
      },
      {
        id: 1,
        label: t('footer.company.links.jobs'),
        url: '/'
      },
      {
        id: 2,
        label: t('footer.company.links.for_record'),
        url: '/'
      }
    ]
  },
  {
    id: 1,
    title: t('footer.communities.title'),
    links: [
      {
        id: 0,
        label: t('footer.communities.links.artist'),
        url: '/'
      },
      {
        id: 1,
        label: t('footer.communities.links.developers'),
        url: '/'
      },
      {
        id: 2,
        label: t('footer.communities.links.vendors'),
        url: '/'
      }
    ]
  },
  {
    id: 2,
    title: t('footer.usefull_links.title'),
    links: [
      {
        id: 0,
        label: t('footer.usefull_links.links.support'),
        url: '/'
      },
      {
        id: 1,
        label: t('footer.usefull_links.links.mobile_app'),
        url: '/'
      }
    ]
  }
]
</script>

<style lang="scss">
.footer {
  .footer__divider {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .footer__copyright {
    padding-bottom: 132px;
  }
}
</style>
