<template>
  <h2>게시글 등록</h2>
  <hr class="my-4" />

  <PostForm @submit.prevent="savePost" v-model:title="form.title" v-model:content="form.content">
    <template #actions>
      <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
      <button class="btn btn-primary">저장</button>
    </template>
  </PostForm>
</template>

<script setup>
import { createPost } from '@/api/posts'
import PostForm from '@/components/posts/PostForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref({
  title: null,
  content: null,
})
const router = useRouter()

const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}
const savePost = async () => {
  try {
    await createPost({
      ...form.value,
      createdAt: String(Date.now()),
    })
    goListPage()
  } catch (error) {
    console.error(error)
  }
}
</script>

<style lang="scss" scoped></style>
