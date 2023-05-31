<template>
  <div class="sign-up-form">
    <v-form>
      <v-text-field
        v-model="userData.email"
        variant="outlined"
        :label="$t('user.sign_up.input.email.label')"
        color="success"
      />
      <v-text-field
        v-model="userData.password"
        variant="outlined"
        :label="$t('user.sign_up.input.password.label')"
        color="success"
        type="password"
      />
      <v-text-field
        v-model="repeatPassword"
        variant="outlined"
        :label="$t('user.sign_up.input.repeat_password.label')"
        color="success"
        type="password"
      />
      <v-text-field
        v-model="userData.name"
        variant="outlined"
        :label="$t('user.sign_up.input.name.label')"
        color="success"
      />
      <v-text-field
        v-model="userData.surname"
        variant="outlined"
        :label="$t('user.sign_up.input.surname.label')"
        color="success"
      />
      <v-radio-group v-model="userData.gender" inline>
        <v-radio value="male" label="male" color="surface" />
        <v-radio value="female" label="female" color="surface" />
      </v-radio-group>
      <UserSignUpBirthdayForm @update-birthday="updateBirthday" />
      <v-text-field
        v-model="userData.phone"
        variant="outlined"
        :label="$t('user.sign_up.input.phone.label')"
        color="success"
      />
      <div class="d-flex justify-end">
        <v-btn color="surface" :loading="isLoading" @click="registerUser">sign up</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { TGqlVariables } from '~/types/gql'
import UserSignUpBirthdayForm from '~/components/user/sign-up/BirthdayForm.vue'
import { createAccount } from '~/store/user/auth'

const emit = defineEmits<{
  (e: 'sucsess-sign-up'): void
}>()

const isLoading = ref<boolean>(false)
const userData = ref<TGqlVariables<'createAccountMutation'>['accountData']>({
  name: '',
  surname: '',
  email: '',
  password: '',
  birthday: 0,
  gender: '',
  phone: '',
})
const repeatPassword = ref<string>('')
const updateBirthday = (timeStamp: number) => {
  userData.value.birthday = timeStamp
}
const registerUser = async () => {
  isLoading.value = true
  const isSuccsess = await createAccount(userData.value)
  if (isSuccsess) emit('sucsess-sign-up')
  isLoading.value = false
}
</script>
