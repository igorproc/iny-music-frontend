<template>
  <div class="sign-up">
    <UserSignUpInformation />
    <UserSignUpForm @sucsess-sign-up="$router.push(localePath({ name: 'index' }))" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "nuxt/app"
import { definePageMeta } from "#imports"

definePageMeta({
  layout: 'login'
})
const router = useRouter()
</script>

<style lang="scss">
.sign-up {
  width: 400px;
}
</style>
