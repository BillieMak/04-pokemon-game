import { createApp } from 'vue'
import App from './App.vue'
import './css/animations.css'
import './css/styles.css'
// import '@/assets/threeIntent.css'
import '@/assets/custom-theme.css'
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import ToastService from 'primevue/toastservice';


const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService)
app.mount('#app');


// createApp(App).mount('#app')
