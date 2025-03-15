<template>
  <form>
    <div class="row g-3">
      <div class="col">
        <label for="title-filter">제목으로 검색하기</label>
        <input
          id="title-filter"
          @input="$emit('update:title', $event.target.value)"
          :value="title"
          type="text"
          class="form-control"
        />
      </div>
      <div class="col-3">
        <label for="select-limit">게시물 보기</label>
        <select
          :value="limit"
          @change="$emit('update:limit', Number($event.target.value))"
          id="select-limit"
          class="form-select"
        >
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  limit: Number,
})
defineEmits(['update:title', 'update:limit'])
</script>

<style lang="scss" scoped></style>
