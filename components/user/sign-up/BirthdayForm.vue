<template>
  <v-row class="d-flex user-birthday-form" no-gutters>
    <v-col cols="4">
      <v-text-field
        v-model="inputDate.day"
        rounded="0"
        variant="outlined"
        :label="$t('user.sign_up.input.birthday.day.label')"
        color="success"
        type="number"
      />
    </v-col>
    <v-col cols="4">
      <v-select
        v-model="inputDate.mounth"
        rounded="0"
        :items="mounths"
        item-value="id"
        item-title="label"
        return-object
      />
    </v-col>
    <v-col cols="4">
      <v-text-field
        v-model="inputDate.year"
        rounded="0"
        variant="outlined"
        :label="$t('user.sign_up.input.birthday.year.label')"
        color="success"
        type="number"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

interface IinputDate {
  day: string
  mounth: {
    id: number
    label: string
  }
  year: string
}

const emit = defineEmits<{
  (e: 'update-birthday', payload: number): number
}>()
const mounths = ref<any>([
  {
    id: 1,
    label: 'январь',
  },
  {
    id: 2,
    label: 'февраль',
  },
  {
    id: 3,
    label: 'март',
  },
  {
    id: 4,
    label: 'апрель',
  },
  {
    id: 5,
    label: 'май',
  },
  {
    id: 6,
    label: 'июнь',
  },
  {
    id: 7,
    label: 'июль',
  },
  {
    id: 8,
    label: 'август',
  },
  {
    id: 9,
    label: 'сентябрь',
  },
  {
    id: 10,
    label: 'октябрь',
  },
  {
    id: 11,
    label: 'ноябрь',
  },
  {
    id: 12,
    label: 'декабрь',
  },
])
const inputDate = ref<IinputDate>({
  day: '',
  mounth: mounths.value[0],
  year: '',
})
watch(
  () => inputDate,
  (newDate) => {
    const timeStamp: number =
      Date.parse(`${newDate.value.day}-${newDate.value.mounth.id}-${newDate.value.year} 00:00:00 GMT`) / 1000
    emit('update-birthday', timeStamp)
  },
  { deep: true },
)
</script>
