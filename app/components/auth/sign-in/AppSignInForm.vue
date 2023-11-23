<template>
  <div class="app-sign-in-form form">
    <UiTextField
      id="sign-in-email-input"
      type="email"
      :label="$t('Электронная почта')"
      :placeholder="$t('email')"
      @update:model-value="onEmailInput"
    />
    <UiTextField
      id="sign-in-password-input"
      type="password"
      :label="$t('Пароль')"
      :placeholder="$t('Пароль')"
      @update:model-value="onPasswordInput"
    />
    <div class="form__submit-wrapper">
      <div class="wrapper__tips-list">
        <span class="list__register-action">
          {{ $t('Нет аккаунта?') }}
          <NuxtLink :to="localePath({ name: 'auth-sign-up' })" class="list__register-action--link">
            {{ $t('Зарегестрируйтесь') }}
          </NuxtLink>
        </span>
        <NuxtLink :to="localePath({ name: 'auth-refresh-password' })" class="list__refresh-password-action">
          {{ $t('Забыли пароль?') }}
        </NuxtLink>
      </div>
      <button type="submit" class="wrapper__action" @click="onLoginUser">
        <Icon v-if="isLoading" name="svg-spinners:180-ring" />
        <span v-else>{{ $t('Войти') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginUser } from '~/store/user/auth'
import type { TUserLogin } from '~/types/user'
import UiTextField from '~/components/ui/fields/text-field.vue'

interface Emits {
  (name: 'loadingStatusIsUpdated', val: boolean): void
}

const router = useRouter()
const localePath = useLocalePath()
const emits = defineEmits<Emits>()

const isLoading = ref(false)
const authData: TUserLogin['payload'] = reactive({
  email: '',
  password: '',
})

computed(() => emits('loadingStatusIsUpdated', isLoading.value))

const onEmailInput = (email: string): void => {
  authData.email = email
}
const onPasswordInput = (password: string): void => {
  authData.password = password
}

const onLoginUser = async () => {
  if (!authData.email || !authData.password) {
    return
  }
  isLoading.value = true
  const userIsLogged = await loginUser(authData)

  if (userIsLogged) {
    return await router.push(localePath({ name: 'index' }))
  }
  isLoading.value = false
}
</script>

<style lang="scss">
.app-sign-in-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .ui-text-field {
    margin-top: 1rem;

    &:first-child {
      margin-top: 0;
    }
  }
  .form__submit-wrapper {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .wrapper__tips-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .list__register-action,
      .list__refresh-password-action {
        font-size: lib-font-size(14);
        color: var(--accent-color);
      }
      .list__register-action--link,
      .list__refresh-password-action {
        color: var(--accent-color);
        text-decoration: none;

        &:hover {
          cursor: pointer;
          color: var(--primary-color);
        }
      }
    }
    .wrapper__action {
      margin-left: 0.75rem;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--accent-color);
      border-radius: 20px;
      color: var(--accent-color);
    }
  }
}
</style>
