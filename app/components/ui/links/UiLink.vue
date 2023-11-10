<template>
  <div class="ui-link">
    <NuxtLink
      :to="pageLink"
      active-class="--default-active"
      class="ui-link__link"
      :class="{ '--default-hover': needHoverEffect }"
    >
      <div class="link__prepend-text">
        <slot name="prepend" />
      </div>
      <span
        class="link__text"
      >
        {{ text }}
      </span>
      <div class="link__append-text">
        <slot name="append" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  pageLink: string,
  needHoverEffect?: boolean,
  text: string,
}

const props = defineProps<Props>()
const { pageLink, needHoverEffect, text } = toRefs(props)

</script>

<style lang="scss">
.ui-link {
  cursor: pointer;
  .ui-link__link {
    transition: color 200ms linear;
    text-decoration: none;
    display: flex;
    align-items: center;

    .link__prepend-text,
    .link__append-text {
      color: $primary-color;
      display: flex;
      align-items: center;
    }
    .link__prepend-text {
      margin-right: 10px;
    }
    .link__append-text {
      margin-left: 10px;
    }
    .link__text {
      color: $secondary-color;
    }
    &.--default-active {
      .link__text,
      .link__prepend-text,
      .link__append-text {
        color: $accent-color;
      }
    }
    &.--default-hover:hover {
      .link__text,
      .link__prepend-text,
      .link__append-text {
        transition: color 0.2s;
        color: $accent-color;
      }
    }
  }
}
</style>
