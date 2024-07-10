<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  event.stopPropagation(); // イベントの伝播を停止
  emit('click');
};
</script>
