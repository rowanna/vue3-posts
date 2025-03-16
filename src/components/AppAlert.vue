<template>
  <div v-if="show" class="app-alert alert" :class="styleComputed" role="alert">{{ message }}</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const styleComputed = computed(() => {
  return `alert-${props.type}`
})
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 60px;
  right: 10px;
}
</style>
