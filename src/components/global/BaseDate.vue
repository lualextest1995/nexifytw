<template>
  <input type="date" v-model="date" />
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    default: new Date().toISOString().substr(0, 10),
  },
})
const emit = defineEmits(['update:modelValue'])
const date = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<style lang="scss" scoped></style>
