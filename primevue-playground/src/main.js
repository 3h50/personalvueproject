// Libraries
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import PrimeVue from "primevue/config";

// CSS
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .mount("#app");