<template>
  <div class="sign-up">
    <UserSignUpInformation />
    <UserSignUpForm />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"

definePageMeta({
  layout: 'login'
})
</script>

<style lang="scss">
.sign-up {
  width: 400px;
}
</style>