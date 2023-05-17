<template>
  <div class="sign-up-form">
    <v-form>
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.email.label')"
        color="success"
        v-model="userData.email"
      />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.password.label')"
        color="success"
        type="password"
        v-model="userData.password"
      />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.repeat_password.label')"
        color="success"
        type="password"
        v-model="repeatPassword"
      />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.name.label')"
        color="success"
        v-model="userData.name"
      />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.surname.label')"
        color="success"
        v-model="userData.surname"
      />
      <v-radio-group inline v-model="userData.gender">
        <v-radio value="male" label="male" color="surface" />
        <v-radio value="female" label="female" color="surface" />
      </v-radio-group>
      <UserBirthdayForm @update-birthday="updateBirthday" />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.phone.label')"
        color="success"
        v-model="userData.phone"
      />
      <div class="d-flex justify-end">
        <v-btn color="surface" :loading="isLoading" @click="registerUser">sign up</v-btn>
      </div>
    </v-form>
  </div>  
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue"
import { TGqlVariables } from "~/types/gql"
import UserBirthdayForm from "~/components/user/BirthdayForm.vue"
import { createAccount } from "~/store/user/auth"

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
  phone: ''
})
const repeatPassword = ref<string>('')
const updateBirthday = (timeStamp: number) => { userData.value.birthday = timeStamp }
const registerUser = async() => {
  isLoading.value = true
  const isSuccsess = await createAccount({
    name: userData.value.name,
    surname: userData.value.surname,
    email: userData.value.email,
    password: userData.value.password,
    birthday: userData.value.birthday,
    gender: userData.value.gender,
    phone: userData.value.phone
  })
  if(isSuccsess) {
    isLoading.value = false
    emit('sucsess-sign-up')
  }
}
</script>
