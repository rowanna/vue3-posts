import axios from 'axios'
import { isRef, ref, unref, watchEffect } from 'vue'

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL

const defaultOptions = {
  immediate: true,
}
export const useAxios = (url, config = {}, options = {}) => {
  const response = ref(null)
  const data = ref(null)
  const isError = ref(null)
  const isLoading = ref(false)

  const { params } = config
  const { onSuccess, onError, immediate } = {
    ...defaultOptions,
    ...options,
  }

  const execute = (body) => {
    data.value = null
    isError.value = null
    isLoading.value = true
    axios(url, {
      ...defaultOptions,
      ...options,
      params: unref(params),
      data: body,
    })
      .then((res) => {
        response.value = res
        data.value = res.data
        onSuccess && onSuccess()
      })
      .catch((err) => {
        isError.value = err
        onError && onError()
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  if (isRef(params)) {
    watchEffect(execute)
  } else {
    if (immediate) {
      execute()
    }
  }

  return {
    data,
    isError,
    isLoading,
    response,
    execute,
  }
}
