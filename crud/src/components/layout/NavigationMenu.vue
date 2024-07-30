<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/logo.jpeg" alt="Logo" class="navbar-logo">
        <h3 class="title is-3 navbar-title">Eternal Elegance</h3>
      </router-link>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isOpen }" @click.prevent="toggleMenu"
        aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/products">Productos</router-link>
        <router-link class="navbar-item" to="/orders">Órdenes</router-link>
        <router-link class="navbar-item" to="/tarea-formulario">Tareas</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="user" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">{{ user.displayName || user.email }}</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/dashboard">Dashboard</router-link>
              <a class="navbar-item" @click.prevent="logout">Cerrar sesión</a>
            </div>
          </div>
          <div v-else class="buttons">
            <router-link class="button is-primary" to="/register">
              <strong>Registrarme</strong>
            </router-link>
            <router-link class="button is-light" to="/login">Iniciar sesión</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  data() {
    return {
      isOpen: false,
      user: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    async logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        this.$router.push({ name: 'login' });
      } catch (error) {
        console.error('Error signing out: ', error);
      }
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.user = user ? user : null;
    });
  },
};
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
  background-color: #868e99;
  padding: 1rem;
}

.navbar-logo {
  height: 50px;
  margin-right: 15px;
}

.navbar-title {
  margin-left: 10px;
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 2rem;
}

.navbar-burger {
  border: none;
  outline: none;
  color: #ffffff;
}

@media (max-width: 768px) {
  .navbar-title {
    font-size: 1.5rem;
  }
}

.button {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.5rem;
}

.button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  transition: background-color 0.3s ease;
}

.button.is-light {
  background-color: #f5f5f5;
  color: #363636;
  border: 1px solid #8a2f2f;
  transition: background-color 0.3s ease;
}

.button.is-light:hover {
  background-color: #e1e1e1;
}
</style>
