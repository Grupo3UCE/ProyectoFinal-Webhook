<template>
  <div class="container mt-50">
    <div class="columns is-centered">
      <div class="column is-6">
        <div class="box">
          <h3 class="title is-3">Crear cuenta</h3>
          <hr>
          <form @submit.prevent="register">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.j Alex Smith" v-model="name">
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.j. alexsmith@gmail.com" v-model="email">
              </div>
            </div>

            <div class="field">
              <label class="label">Contraseña</label>
              <div class="control">
                <input class="input" type="password" v-model="password">
              </div>
            </div>
            <hr>
            <button type="submit" class="button is-primary is-fullwidth">Registrarse</button>
          </form>
          <hr>
          <div class="notification is-danger" v-if="error">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default {
  name: 'UserRegister',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async register() {
      this.error = '';
      if (this.name && this.email && this.password) {
        const auth = getAuth();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;
          if (user) {
            await updateProfile(user, {
              displayName: this.name
            });
            console.log('Perfil actualizado con éxito');
            this.name = '';
            this.email = '';
            this.password = '';
            this.$router.push({ name: 'dashboard' }); // Redirige al dashboard
          }
        } catch (err) {
          this.error = err.message;
          console.error(err);
        }
      } else {
        this.error = 'Todos los campos son requeridos';
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}

.box {
  padding: 20px;
  border: 1px solid #4A90E2; /* Azul claro para el borde */
  border-radius: 6px;
  background-color: #E3F2FD; /* Azul muy claro para el fondo */
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.title {
  text-align: center;
  color: #1976D2; /* Azul más oscuro para los títulos */
}

.input {
  border-color: #90CAF9; /* Borde más suave para los campos de entrada */
}

.button.is-primary.is-fullwidth {
  background-color: #0D47A1; /* Azul oscuro para el botón */
  color: #ffffff; /* Texto blanco para contraste */
}

.notification.is-danger {
  background-color: #FFCDD2; /* Rojo claro para las notificaciones */
  color: #D32F2F; /* Texto rojo oscuro */
}
</style>
