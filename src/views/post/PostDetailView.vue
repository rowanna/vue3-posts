<template>
  <h2>{{ postData.title }}</h2>
  <p>{{ postData.content }}</p>
  <p class="text-muted">{{ postData.createdAt }}</p>
  <hr class="my-4" />
  <div class="row g-2">
    <div class="col-auto">
      <button @click="goPrevPost" class="btn btn-outline-dark">이전 글</button>
    </div>
    <div class="col-auto">
      <button @click="goNextPost" class="btn btn-outline-dark">다음 글</button>
    </div>
    <div class="col-auto me-auto"></div>
    <div class="col-auto">
      <button class="btn btn-outline-dark" @click="goListPage">목록</button>
    </div>
    <div class="col-auto">
      <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
    </div>
    <div class="col-auto">
      <button @click="remove" class="btn btn-outline-danger">삭제</button>
    </div>
  </div>
</template>

<script setup>
import { deletePost, getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
})
const postData = ref({})
const router = useRouter()

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id)
    postData.value = data
  } catch (err) {
    console.error(err)
  }
}
fetchPost()

const goPrevPost = async () => {
  try {
    router.push({
      name: 'PostDetail',
      params: props.id - 1,
    })
  } catch (err) {
    console.error(err)
  }
}

const goNextPost = () => {
  try {
    router.push({
      name: 'PostDetail',
      params: props.id + 1,
    })
  } catch (err) {
    console.error(err)
  }
}
const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}

const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: {
      id: props.id,
    },
  })
}

const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?') === false) return
    await deletePost(props.id)
    goListPage()
  } catch (err) {
    console.error(err)
  }
}
</script>

<style lang="scss" scoped></style>
