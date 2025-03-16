<template>
  <AppLoading v-if="isLoading" />
  <AppError v-else-if="isError" :message="isError.message" />

  <template v-else>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <AppError v-if="editError" :message="editError.message" />
    <PostForm @submit.prevent="edit" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
        <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button class="btn btn-primary" :disabled="isLoading">
          <template v-if="editLoading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </template>
          <template v-else>
            <span class="sr-only">수정</span>
          </template>
        </button>
      </template>
    </PostForm>

    <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
  </template>
</template>

<script setup>
import { editPost, getPostById } from '@/api/posts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PostForm from '@/components/posts/PostForm.vue'
import { useAlert } from '@/composables/usealert'

const isError = ref(null)
const isLoading = ref(false)

const editError = ref(null)
const editLoading = ref(false)
const { showAlert, alertMessage, alertType, vSuccess } = useAlert()
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
    isLoading.value = true
    const { data } = await getPostById(props.id)
    form.value.title = data.title
    form.value.content = data.content
  } catch (err) {
    console.error(err)
    vAlert('API 호출이 실패되었습니다. ', 'danger')
    isError.value = err
  } finally {
    isLoading.value = false
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
    editLoading.value = true
    await editPost(props.id, { ...form.value, createdAt: String(Date.now()) })
    vSuccess('수정이 완료되었습니다!')
    goDetailPage()
  } catch (err) {
    editError.value = err
  } finally {
    editLoading.value = false
  }
}
</script>

<style lang="scss" scoped></style>
