import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import funcPlugins from './plugins/func'
// import objPlugins from './plugins/obj'
import person from './plugins/person'
// import globalComponents from './components/app/global-components'
import globalDirectives from './plugins/global-directives'
import day from './plugins/day'

const app = createApp(App)
app.use(router)
app.mount('#app')

// app.use(funcPlugins)
// app.use(objPlugins)
app.use(person)
app.use(globalDirectives)
app.use(day)
// app.use(globalComponents)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
