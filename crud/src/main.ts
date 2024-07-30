import { createApp, App as AppType } from 'vue';
import App from './App.vue';
import router from './router';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/init.js'; // Importar solo la autenticación inicializada

const app: AppType<Element> | null = null;

onAuthStateChanged(auth, () => {
  if (!app) {
    createApp(App).use(router).mount('#app');
  }
});
