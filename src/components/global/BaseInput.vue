<template>
  <input type="text" :placeholder="placeholder" v-model="text" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const text = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<style lang="scss" scoped></style>
