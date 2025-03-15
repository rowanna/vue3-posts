<template>
  <h2>{{ postData.title }}</h2>
  <p>{{ postData.content }}</p>
  <p class="text-muted">{{ postData.createdAt }}</p>
  <hr class="my-4" />
  <div class="row g-2">
    <div class="col-auto">
      <button class="btn btn-outline-dark">이전 글</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-dark">다음 글</button>
    </div>
    <div class="col-auto me-auto"></div>
    <div class="col-auto">
      <button class="btn btn-outline-dark" @click="goListPage">목록</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-danger">삭제</button>
    </div>
  </div>
</template>

<script setup>
import { getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const postData = ref({})
const router = useRouter()
const route = useRoute()
const postId = route.params.id
const fetchPostData = getPostById(postId)

const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}

const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: {
      id: postId,
    },
  })
}
console.log(getPostById(postId), '===')
postData.value = { ...fetchPostData }
</script>

<style lang="scss" scoped></style>
<b></b>
