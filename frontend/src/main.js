import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import PrimeVue from 'primevue/config';

// Importing the Nova Light PrimeVue theme styles
import 'primevue/resources/themes/nova/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';

// Vue.config.productionTip = false;

App.use(PrimeVue);

createApp(App).mount("#app");
