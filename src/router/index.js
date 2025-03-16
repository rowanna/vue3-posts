import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostListView from '@/views/post/PostListView.vue'
import PostEditView from '@/views/post/PostEditView.vue'
import PostDetailView from '@/views/post/PostDetailView.vue'
import PostCreateView from '@/views/post/PostCreateView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import MyPageView from '@/views/MyPageView.vue'
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
    props: (route) => ({ id: Number(route.params.id) }),
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
    props: (route) => ({ id: Number(route.params.id) }),
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
    beforeEnter: [removeQueryString],
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageView,
    beforeEnter: (to, from) => {
      // return '/posts'
      if (Object.keys(to.query).length > 0) {
        return { path: to.path, query: {} }
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
]

function removeQueryString(to) {
  if (Object.keys(to.query).length > 0) {
    return { path: to.path, query: {} }
  }
}

// Set Router
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// router.beforeEach((to, from) => {
//   if (to.name === 'mypage') {
//     return '/posts'
//   }
// })
export default router
