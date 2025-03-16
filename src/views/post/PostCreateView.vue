<template>
  <h2>게시글 등록</h2>
  <hr class="my-4" />
  <AppError v-if="isError" :message="isError.message" />
  <PostForm @submit.prevent="savePost" v-model:title="form.title" v-model:content="form.content">
    <template #actions>
      <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>

      <button class="btn btn-primary" :disabled="isLoading">
        <template v-if="isLoading">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </template>
        <template v-else>
          <span class="sr-only">저장</span>
        </template>
      </button>
    </template>
  </PostForm>
  <AppAlert :show="showAlert" :message="alertMessage" :type="alertType"></AppAlert>
</template>

<script setup>
import { createPost } from '@/api/posts'
import PostForm from '@/components/posts/PostForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAlert } from '@/composables/usealert'

const { showAlert, alertMessage, alertType, vSuccess } = useAlert()
const form = ref({
  title: null,
  content: null,
})
const isLoading = ref(false)
const isError = ref(null)
const router = useRouter()

const goListPage = () => {
  router.push({
    name: 'PostList',
  })
}
const savePost = async () => {
  try {
    isLoading.value = true
    await createPost({
      ...form.value,
      createdAt: String(Date.now()),
    })
    vSuccess('등록이 완료되었습니다.')
    goListPage()
  } catch (error) {
    isError.value = error
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped></style>
