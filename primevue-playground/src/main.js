import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
//Ask matt about moving component level imports to components and if there is an overhead increase
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
const app = createApp(App);
app.use(PrimeVue);
app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.mount("#app");