<template>
  <div class="sign-up">
    <UserSignUpForm />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from "#imports"

definePageMeta({
  layout: 'login'
})
</script>