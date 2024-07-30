<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">Joyeria La Excelencia</router-link>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/orders">Ordenes</router-link></li>
      <li><router-link to="/tarea-formulario">NuevoProducto</router-link></li>
      <li><router-link to="/tareas">Productos</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
      <li v-else><a @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isAuthenticated() {
      return localStorage.getItem('authenticated') === 'true';
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authenticated');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1em;
  color: white;
}
.navbar-brand {
  font-size: 1.5em;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 1em;
}
.navbar-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}
.navbar-links a:hover {
  color: #ddd;
}
</style>
