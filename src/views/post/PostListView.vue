<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <PostFilter @submit.prevent v-model:title="params.title_like" v-model:limit="params._limit" />
  <!-- <PostFilter
    @submit.prevent
    @update:title="(title) => (params.title_like = title)"
    @update:limit="(limit) => (params._limit = limit)"
    :title="params.title_like"
    :limit="params._limit"
  /> -->
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

  <AppPagination
    @update:current-page="(currentPage) => (params._page = currentPage)"
    :pageCount="pageCount"
    :currentPage="params._page"
  ></AppPagination>
</template>

<script setup>
import { getPosts } from '@/api/posts'
import AppPagination from '@/components/AppPagination.vue'
import PostFilter from '@/components/posts/PostFilter.vue'
import PostItem from '@/components/posts/PostItem.vue'
import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const posts = ref([])
const router = useRouter()
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
})

// pagination
const totalCount = ref(0)
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit))

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value)
    posts.value = data
    router.push({ name: 'PostList' })
    totalCount.value = headers['x-total-count']
  } catch (err) {
    console.error(err)
  }
}

const goPage = (id) => {
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
  })
}

// watch와 다르게 처음 한번 실행됨.
watchEffect(fetchPosts)
</script>

<style lang="scss" scoped></style>
