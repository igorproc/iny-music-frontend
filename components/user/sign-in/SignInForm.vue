<template>
  <div class="sign-in-form">
    <v-form>
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.email.label')"
        color="success"
        v-model="loginData.email"
      />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.password.label')"
        color="success"
        type="password"
        v-model="loginData.password"
      />
      <div class="d-flex justify-end">
        <v-btn color="surface" :loading="isLoading" @click="loginUser">sign up</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginAccount } from '~/store/user/auth'
import { TGqlVariables } from '~/types/gql'

type TLoginData = TGqlVariables<'loginAccountMutation'>['loginData']

const emit = defineEmits<{ (e: 'succsess-login'): void }>()

const loginData = ref<TLoginData>({ email: '', password: '' })
const isLoading = ref<boolean>(false)

const loginUser = async() => {
  isLoading.value = true
  const isSuccsess = await loginAccount(loginData.value)
  if(isSuccsess) emit('succsess-login')
  isLoading.value = false
}
</script>
