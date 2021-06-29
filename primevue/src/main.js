import Vue from 'vue'
import App from './App.vue'

// Importing the Nova Light PrimeVue theme styles
import 'primevue/resources/themes/nova-light/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')