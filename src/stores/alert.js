import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({ showAlert: false }),
  actions: {
    vAlert(message, type, callback) {
      this.showAlert = true
      this.alertMessage = message
      this.alertType = type
      setTimeout(() => {
        this.showAlert = false
        this.alertMessage = ''
        this.alertType = ''
        callback && callback()
      }, 2000)
    },
    vSuccess(message) {
      this.vAlert(message, 'success')
    },
  },
})
