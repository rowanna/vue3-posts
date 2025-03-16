<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <p class="text-muted">{{ createdAt }}</p>
    </div>
    <div class="card-footer d-flex flex-row-reverse">
      <button class="btn p-0" @click.stop="$emit('clickOpenModalBtn')">
        <i class="bi bi-arrows-angle-expand"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
})

defineEmits(['clickOpenModalBtn'])
</script>

<style lang="scss" scoped></style>
