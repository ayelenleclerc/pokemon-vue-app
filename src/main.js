
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)  //crea la app


app.use(createPinia()) //gestor de estados para la app
app.use(router) //gestor de rutas

app.mount('#app')
