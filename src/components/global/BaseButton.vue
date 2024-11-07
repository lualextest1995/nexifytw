<template>
  <button class="base_button" @click="onClick">{{ props.text }}</button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'button',
  },
  textSize: {
    type: String,
    default: '20px',
  },
  textColor: {
    type: String,
    default: 'black',
  },
  buttonColor: {
    type: String,
    default: 'blue',
  },
  onClick: {
    type: Function,
    default: () => {
      console.log('Button clicked')
    },
  },
})
</script>

<style lang="scss" scoped>
.base_button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: v-bind(textSize);
  color: v-bind(textColor);
  background-color: v-bind(buttonColor);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    // 立體感
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
