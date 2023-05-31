<template>
  <div class="sign-up-page">
    <UserLoginInformation />
    <UserSignUpForm @sucsess-sign-up="$router.push(localePath({ name: 'index' }))" />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import UserLoginInformation from '~/components/user/LoginInformation.vue'
import UserSignUpForm from '~/components/user/sign-up/SignUpForm.vue'

definePageMeta({
  layout: 'login',
})
const localePath = useLocalePath()
</script>

<style lang="scss">
.sign-up-page {
  width: 400px;
}
</style>
