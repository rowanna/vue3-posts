import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import funcPlugins from './plugins/func'
import objPlugins from './plugins/obj'
import person from './plugins/person'

const app = createApp(App)
app.use(router)
app.mount('#app')

app.use(funcPlugins)
app.use(objPlugins)
app.use(person)

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
