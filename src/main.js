
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

import 'primeicons/primeicons.css'

import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';

const app = createApp(App)  //crea la app

// componentes
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Column', Column);
//Middlewares
app.use(createPinia()) //gestor de estados para la app
app.use(router) //gestor de rutas
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
