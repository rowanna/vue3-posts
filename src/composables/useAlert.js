import { ref } from 'vue'
// const showAlert = ref(false)
export function useAlert() {
  const showAlert = ref(false)
  const alertMessage = ref('')
  const alertType = ref('')
  const vAlert = (message, type, callback) => {
    showAlert.value = true
    alertMessage.value = message
    alertType.value = type
    setTimeout(() => {
      showAlert.value = false
      alertMessage.value = ''
      alertType.value = ''
      callback && callback()
    }, 5000)
  }
  const vSuccess = (message) => vAlert(message, 'success')

  return {
    showAlert,
    alertMessage,
    alertType,
    vAlert,
    vSuccess,
  }
}
