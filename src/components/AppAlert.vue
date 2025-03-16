<template>
  <Transition name="slide">
    <div v-if="show" class="app-alert alert" :class="styleComputed" role="alert">
      {{ message }}
    </div>
  </Transition>
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

/* .v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
} */
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
