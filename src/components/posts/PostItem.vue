<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <p class="text-muted">{{ createdDate }}</p>
    </div>
    <div class="card-footer d-flex flex-row-reverse">
      <button class="btn p-0" @click.stop="$emit('clickOpenModalBtn')">
        <i class="bi bi-arrows-angle-expand"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: [String, Number],
    required: true,
  },
})

defineEmits(['clickOpenModalBtn'])

const dayjs = inject('dayjs')
const createdDate = computed(() => dayjs(props.createdAt).format('YYYY. MM .DD HH:mm:ss'))
</script>

<style lang="scss" scoped></style>
