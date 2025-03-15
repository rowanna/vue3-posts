import { postsAxios } from '.'

export async function getPosts(params) {
  return postsAxios.get('/', { params })
}

export function getPostById(id) {
  return postsAxios.get(`/${id}`)
}

export function createPost(data) {
  return postsAxios.post('/', data)
}
export function editPost(id, data) {
  return postsAxios.put(`/${id}`, data)
}
export function deletePost(id) {
  return postsAxios.delete(`/${id}`)
}
