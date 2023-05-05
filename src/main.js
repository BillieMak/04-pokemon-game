import { createApp } from 'vue'
import App from './App.vue'
import './css/animations.css'
import './css/styles.css'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";     

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');


// createApp(App).mount('#app')
