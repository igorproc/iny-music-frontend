<template>
  <div class="app-player-unregister-blank">
    <div class="blank__content">
      <span class="content__title">
        {{ $t('Предварительный просмотр Specto.su') }}
      </span>
      <p class="content__description">
        {{ $t('Зарегистрируйся, чтобы слушать музыку и подкасты без ограничений. Иногда мы будем показывать рекламу, но ты сможешь пользоваться сервисом бесплатно!') }}
      </p>
    </div>
    <NuxtLink
      :to="localePath({ name: 'sign-up' })"
      :aria-label="$t('Нажмите чтобы зарегестрироваться')"
      class="blank__action"
    >
      {{ $t('Зарегистрироваться') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="scss">
.app-player-unregister-blank {
  display: none;

  @media screen and (min-width: map-get($display-breakpoints, 'md')) {
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $background-unregister-blank;

    .blank__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .content__title,
      .content__description {
        color: $accent-color;
      }
      .content__title {
        font-size: lib-font-size(14);
      }
      .content__description {
        margin: 5px 0;
      }
    }
    .blank__action {
      padding: 12px 16px;
      border: 1px solid var(--accent-color);
      background-color: var(--accent-color);
      border-radius: 20px;
      font-size: lib-font-size(14);
      font-weight: bold;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
