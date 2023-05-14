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
      <UserBirthdayForm @update-birthday="updateBirthday" />
      <v-text-field
        variant="outlined"
        :label="$t('user.sign_up.input.phone.label')"
        color="success"
        v-model="userData.phone"
      />
    </v-form>
  </div>  
</template>

<script setup lang="ts">
import { Ref, ref } from "vue"
import { useI18n } from "vue-i18n"
import UserBirthdayForm from "~/components/user/BirthdayForm.vue"
import { TUserSignUp } from "~/types/User"

const { t } = useI18n()
const userData: Ref<TUserSignUp> = ref({})
const repeatPassword: Ref<string> = ref('')
const updateBirthday = (timeStamp: number) => {
  userData.value.birthday = timeStamp
}
</script>
