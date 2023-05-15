<template>
  <v-row class="d-flex user-birthday-form" no-gutters>
    <v-col cols="4">
      <v-text-field
        rounded="0"
        variant="outlined"
        :label="$t('user.sign_up.input.birthday.day.label')"
        color="success"
        type="number"
        v-model="day"
      />
    </v-col>
    <v-col cols="4">
      <v-select
        v-model="selectedMounth"
        rounded="0"
        :items="mounths"
        item-value="id"
        item-title="label"
        return-object
      />
    </v-col>
    <v-col cols="4">
      <v-text-field
        rounded="0"
        variant="outlined"
        :label="$t('user.sign_up.input.birthday.year.label')"
        color="success"
        type="number"
        v-model="year"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

const emit = defineEmits<{
  (e: 'update-birthday', payload: number): void
}>()

const mounths = ref<any>([
  {
    id: 1,
    label: 'январь'
  },
  {
    id: 2,
    label: 'февраль'
  },
  {
    id: 3,
    label: 'март'
  },
  {
    id: 4,
    label: 'апрель'
  },
  {
    id: 5,
    label: 'май'
  },
  {
    id: 6,
    label: 'июнь'
  },
  {
    id: 7,
    label: 'июль'
  },
  {
    id: 8,
    label: 'август'
  },
  {
    id: 9,
    label: 'сентябрь'
  },
  {
    id: 10,
    label: 'октябрь'
  },
  {
    id: 11,
    label: 'ноябрь'
  },
  {
    id: 12,
    label: 'декабрь'
  },
])
const day = ref<string>('')
const year = ref<string>('')
const selectedMounth= ref<any>(mounths.value[0])
const birthdayTimestamp = computed<void>(() => {
  const timeStamp: number = Date.parse(`${day.value}-${selectedMounth.value.id}-${year.value} 00:00:00 GMT`) / 1000
  emit('update-birthday', timeStamp)
})
</script>
