import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostListView from '@/views/post/PostListView.vue'
import PostEditView from '@/views/post/PostEditView.vue'
import PostDetailView from '@/views/post/PostDetailView.vue'
import PostCreateView from '@/views/post/PostCreateView.vue'

// Set Route
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
]

// Set Router
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
