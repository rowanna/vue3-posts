<template>
  <h2>게시글 수정</h2>
  <hr class="my-4" />

  <PostForm @submit.prevent="edit" v-model:title="form.title" v-model:content="form.content">
    <template #actions>
      <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">취소</button>
      <button class="btn btn-primary">수정</button>
    </template>
  </PostForm>
</template>

<script setup>
import { editPost, getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PostForm from '@/components/posts/PostForm.vue'

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
    await editPost(props.id, { ...form.value, createdAt: String(Date.now()) })
    goDetailPage()
  } catch (err) {
    console.error(err)
  }
}
</script>

<style lang="scss" scoped></style>
