<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevBtnDisabled">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('update:currentPage', currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="count in pageCount"
        :key="count"
        class="page-item"
        :class="{ active: currentPage === count }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('update:currentPage', count)">{{
          count
        }}</a>
      </li>

      <li class="page-item" :class="isNextBtnDisabled">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('update:currentPage', currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  pageCount: Number,
  currentPage: Number,
})
defineEmits(['update:currentPage'])
const isPrevBtnDisabled = computed(() => {
  return { disabled: !(1 < props.currentPage) }
})

const isNextBtnDisabled = computed(() => {
  return { disabled: !(props.pageCount > props.currentPage) }
})
</script>

<style lang="scss" scoped></style>
