import AppAlert from '../AppAlert.vue'
import AppModal from '../AppModal.vue'
import AppPagination from '../AppPagination.vue'

export default {
  install(app) {
    app.component('AppAlert', AppAlert)
    app.component('AppModal', AppModal)
    app.component('AppPagination', AppPagination)
  },
}
