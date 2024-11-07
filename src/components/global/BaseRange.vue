<template>
  <input
    type="range"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    v-model.number="rangeValue"
  />
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100000 },
  step: { type: Number, default: 1 },
})
const emit = defineEmits(['update:modelValue'])
const rangeValue = computed({
  get: () => props.modelValue ?? props.max / 2,
  set: (value) => emit('update:modelValue', value),
})
</script>

<style lang="scss" scoped></style>
