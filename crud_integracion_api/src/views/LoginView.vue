<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        validCredentials: {
          username: 'admin',
          password: 'password123'
        }
      };
    },
    methods: {
      handleLogin() {
        const { username, password, validCredentials } = this;
        if (username === validCredentials.username && password === validCredentials.password) {
          localStorage.setItem('authenticated', 'true');
          this.$router.push('/home');
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 1em;
  }
  .error {
    color: red;
  }
  </style>
  