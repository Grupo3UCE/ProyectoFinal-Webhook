<template>
  <div class="container">
    <button 
      @click="irAlFormulario"
      class="btn btn-success my-2">Agregar</button>
    <MyTabla />
  </div>
</template>

<script setup lang="ts">
import MyTabla from '@/components/layout/MyTabla.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const irAlFormulario = () => {
  router.push('/tarea-formulario');
}
</script>

<style scoped>

</style>
