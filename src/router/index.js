import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Entregas from '@/views/Entregas.vue';
import Registro from '@/views/Registro.vue';
import Redefinir from '@/views/Redefinir-senha.vue';
import About from '@/views/About.vue';

// import Roteamento from '@/views/Roteamento.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  // //   path: '/roteamento',
  // //   name: 'Roteamento',
  // //   component: Roteamento
  // // },
  {
    path: '/redefinir-senha',
    name: 'Redefinir',
    component: Redefinir
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dashboard
  },
  {
    path: '/entregas',
    name: 'Entregas',
    component: Entregas
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
