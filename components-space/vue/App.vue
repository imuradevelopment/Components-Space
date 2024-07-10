<template>
  <div>
    <h1>Vue Component</h1>
    <Button label="Click Me" @click="handleClick" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './components/Button.vue';

const handleClick = () => {
  alert('Button clicked!');
};
</script>
