import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://localhost:7044', 
});

const app = createApp(App);


app.config.globalProperties.$axios = axiosInstance;


app.use(router);


app.mount('#app');
