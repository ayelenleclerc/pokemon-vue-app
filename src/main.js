
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Column from 'primevue/column';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)  //crea la app

// componentes
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Dialog', Dialog);
app.component('Column', Column);
app.component('Menubar', Menubar);
app.component('Card', Card);

// Middlewares
app.use(createPinia()) //gestor de estados para la app
app.use(router) //gestor de rutas
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
