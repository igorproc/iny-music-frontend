<template>
  <div class="sign-in-page">
    <UserLoginInformation />
    <UserSignInForm @succsess-login="$router.push(localePath({ name: 'index' }))" />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"
import UserLoginInformation from "~/components/user/LoginInformation.vue"
import UserSignInForm from "~/components/user/sign-in/SignInForm.vue"

definePageMeta({
  layout: 'login',
})
</script>

<style lang="scss">
.sign-in-page {
  width: 400px;
}
</style>