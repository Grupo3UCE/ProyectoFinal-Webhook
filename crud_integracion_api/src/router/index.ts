import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import OrdersView from '../views/OrdersView.vue';
import TareaFormularioView from '../views/TareaFormularioView.vue';
import TareasView from '../views/TareasView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
  {
    path: '/tarea-formulario',
    name: 'tarea-formulario',
    component: TareaFormularioView
  },
  {
    path: '/tareas',
    name: 'tareas',
    component: TareasView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(''), // Usar cadena vacía
  routes
});

const isAuthenticated = () => {
  return localStorage.getItem('authenticated') === 'true';
};

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
