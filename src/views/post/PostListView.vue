<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <div class="row g-3">
    <div v-for="post in posts" :key="post.id" class="col-4">
      <PostItem
        @click="goPage(post.id)"
        :title="post.title"
        :content="post.content"
        :created-at="post.createdAt"
      ></PostItem>
    </div>
  </div>
</template>

<script setup>
import { getPosts } from '@/api/posts'
import PostItem from '@/components/posts/PostItem.vue'

import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const posts = ref([])
const router = useRouter()

const fetchPosts = () => {
  posts.value = getPosts()
}

const goPage = (id) => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  })
}

onMounted(() => {
  fetchPosts()
})
</script>

<style lang="scss" scoped></style>
b
