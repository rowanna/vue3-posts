<template>
  <h2>게시글 목록</h2>
  <hr class="my-4" />
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <label for="title-filter">제목으로 검색하기</label>
        <input id="title-filter" v-model="params.title_like" type="text" class="form-control" />
      </div>
      <div class="col-3">
        <label for="select-limit"></label>
        <select v-model="params._limit" id="select-limit" class="form-select">
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
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

  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: !(1 < params._page) }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="() => --params._page">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="count in pageCount"
        :key="count"
        class="page-item"
        :class="{ active: params._page === count }"
      >
        <a class="page-link" href="#" @click.prevent="() => (params._page = count)">{{ count }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !(pageCount > params._page) }">
        <a class="page-link" href="#" aria-label="Next" @click.preven t="() => ++params._page">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { getPosts } from '@/api/posts'
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
b
