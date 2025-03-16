import { useAlertStore } from '@/stores/alert'
import { storeToRefs } from 'pinia'

export function useAlert() {
  const { showAlert, alertMessage, alertType } = storeToRefs(useAlertStore())
  const { vAlert, vSuccess } = useAlertStore()

  return {
    showAlert,
    alertMessage,
    alertType,
    vAlert,
    vSuccess,
  }
}
