<template>
  <div class="ui-tip-card card">
    <div class="card__content">
      <span class="card__title">{{ title }}</span>
      <span class="card__description">{{ description }}</span>
    </div>
    <div class="card__link-wrapper">
      <NuxtLink :to="link" class="card__link">
        <div class="card__link-prepend-slot">
          <slot name="link-prepend" />
        </div>
        <span class="card__link-text">{{ linkText }}</span>
        <div class="card__link-append-slot">
          <slot name="link-append" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  link: string
  linkText: string
}

const props = defineProps<Props>()
const { title, description, link, linkText } = toRefs(props)
</script>

<style lang="scss">
.ui-tip-card {
  margin: 8px 0;
  padding: 8px 16px;
  background-color: var(--surface-variant);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .card__content {
    display: flex;
    flex-direction: column;

    .card__title,
    .card__description {
      font-size: lib-font-size(13);
      font-weight: bold;
      text-wrap: balance;
      color: var(--primary-color);
    }
    .card__description {
      margin-top: 5px;
    }
  }
  .card__link-wrapper {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .card__link {
      padding: 4px 16px;
      background-color: var(--accent-color);
      border-radius: 20px;
      cursor: pointer;

      .card__link-text {
        font-size: lib-font-size(14);
        font-weight: bold;
        color: var(--secondary-color);
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
