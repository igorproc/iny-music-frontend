<template>
  <div class="ui-text-field field">
    <label v-if="inputLabel" :for="id" class="field__label">
      {{ inputLabel }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      class="field__input"
      @change="onInputValue"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string
  type: 'text' | 'password' | 'email'
  label?: string
  placeholder?: string
}
interface Emits {
  (e: 'update:modelValue', payload: string): void
}

const emits = defineEmits<Emits>()
const props = defineProps<Props>()
const { id, type, label, placeholder } = toRefs(props)

const inputValue = ref('')

const inputLabel = computed(() => {
  if (label?.value) {
    return label.value
  }
  return ''
})

const onInputValue = (payload: Event) => {
  const target = payload.target as HTMLInputElement

  emits('update:modelValue', target.value)
  if (!target.value) {
    return
  }

  inputValue.value = target.value
}
</script>

<style lang="scss">
.ui-text-field {
  width: 100%;
  display: flex;
  flex-direction: column;

  .field__label {
    color: var(--accent-color);
  }
  .field__input {
    margin-top: 0.5rem;
    padding: 12px 8px;
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    color: var(--accent-color);
  }
}
</style>
