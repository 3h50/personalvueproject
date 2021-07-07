import { createApp } from "vue";
import App from "./App.vue";

import router from './router'

import PrimeVue from "primevue/config";
//Ask matt about moving component level imports to components and if there is an overhead increase
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import Card from "primevue/card";
import FileUpload from 'primevue/fileupload';
import Menubar from 'primevue/menubar';

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("Card", Card);
app.component("FileUpload", FileUpload);


app.mount("#app");