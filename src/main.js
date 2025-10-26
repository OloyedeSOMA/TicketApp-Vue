import { createApp } from 'vue'
import './assets/main.css'
import router from './router'
import { plugin as formKitPlugin, defaultConfig } from '@formkit/vue'
import vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.use(formKitPlugin, defaultConfig())

app.use(vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
  pauseOnHover: true,
  theme: 'colored',
})

app.mount('#app')
