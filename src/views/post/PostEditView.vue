<template>
  <h2>게시글 수정</h2>
  <hr class="my-4" />

  <form @submit.prevent="edit">
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input v-model="form.title" type="text" class="form-control" id="title" />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea v-model="form.content" class="form-control" id="content" rows="3"></textarea>
    </div>
    <div class="pt-4">
      <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">취소</button>
      <button class="btn btn-primary">수정</button>
    </div>
  </form>
</template>

<script setup>
import { editPost, getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  id: Number,
})
const form = ref({
  title: null,
  content: null,
})

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id)
    form.value.title = data.title
    form.value.content = data.content
  } catch (err) {
    console.error(err)
  }
}
fetchPost()
const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: {
      id: props.id,
    },
  })
}

const edit = async () => {
  try {
    await editPost(props.id, { ...form.value, createdAt: Date.now() })
    goDetailPage()
  } catch (err) {
    console.error(err)
  }
}
</script>

<style lang="scss" scoped></style>
b
