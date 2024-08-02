import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init();

createApp(App).mount('#app')
