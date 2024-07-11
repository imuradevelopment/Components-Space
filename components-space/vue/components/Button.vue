<template>
  <button :style="style">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    size: String,
    color: String,
    display: {
      type: String,
      default: 'inline-block'
    }
  },
  computed: {
    style() {
      return {
        backgroundColor: this.color,
        padding: this.size === 'small' ? '5px 10px' : this.size === 'medium' ? '10px 20px' : '15px 30px',
        margin: '5px',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontSize: this.size === 'small' ? '12px' : this.size === 'medium' ? '14px' : '16px',
        cursor: 'pointer',
        display: this.display,
        boxSizing: 'border-box'
      };
    }
  }
}
</script>
