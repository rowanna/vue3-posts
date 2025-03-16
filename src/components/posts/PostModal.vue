<template>
  <AppModal v-model:show="isShowModal" title="게시글">
    <template #default>
      <div class="row g-3">
        <div class="col-3 text-muted">제목</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3 text-muted">내용</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3 text-muted">등록일</div>
        <div class="col-9">
          {{ createdAt }}
        </div>
      </div>
    </template>
    <template #actions>
      <button @click="closeModal" type="button" class="btn btn-secondary">Close</button>
    </template>
  </AppModal>
</template>

<script setup>
import { computed } from 'vue'

// 외부에서 받은 props인 isShowModal는 자식컴포넌트에서는 읽기전용이라 값을 수정할 수 없음.
// 그래서 computed의 getter, setter를 이용해 값을 변경하게 해줌
const props = defineProps({
  isShowModal: Boolean,
  title: String,
  content: String,
  createdAt: [String, Number],
})

const emit = defineEmits(['update:isShowModal'])

const isShowModal = computed({
  get() {
    return props.isShowModal
  },
  set(value) {
    emit('update:isShowModal', value) // emit으로 update:isShowModal 이벤트를 새로운 값과 함께 올려줌.
  },
})

const closeModal = () => (isShowModal.value = false)
</script>

<style lang="scss" scoped></style>
