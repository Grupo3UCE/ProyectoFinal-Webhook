<template>
  <div class="home-container">
    <div class="home-image-container">
      <img src="@/assets/PI.jpg" alt="Eternal Elegance" class="home-image"/>
    </div>
    <div class="home-content">
      <h1 class="home-title">Descubre Eternal Elegance</h1>
      <p class="home-intro">Explora nuestra colección única de joyas finas y accesorios. Cada pieza es una obra de arte diseñada para destacar tu elegancia y estilo personal.</p>
      <router-link class="explore-button" to="/login">Explora Ahora</router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>
<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #404040; /* Cambiado a un gris más suave para mayor suavidad */
  background-color: #e0ebe8; /* Un color de fondo claro y suave */
}

.home-image-container {
  flex: 1;
  max-width: 50%;
  padding-left: 5%; /* Añadido un padding para despegar la imagen del borde */
}

.home-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.home-content {
  flex: 1;
  max-width: 50%;
  padding: 20px;
  text-align: left;
}

.home-title {
  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: #325959; /* Color más oscuro para el título para destacar sobre el fondo claro */
}

.home-intro {
  font-size: 1.2em;
  margin-bottom: 1em;
}

.explore-button {
  padding: 10px 20px;
  background-color: #779990; /* Un verde azulado claro y suave */
  border: none;
  border-radius: 5px;
  font-size: 1em;
  color: #ffffff; /* Texto blanco para contraste */
  cursor: pointer;
  text-decoration: none; /* Elimina el subrayado de los enlaces */
  display: inline-block; /* Asegura el comportamiento del botón */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #343838; /* Un tono más oscuro para el hover */
    color: #ffffff;
  }
}
</style>
