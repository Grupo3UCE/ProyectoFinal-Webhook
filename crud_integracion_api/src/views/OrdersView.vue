<template>
  <div class="container">
 
    <Tabla />
  </div>
</template>

<script setup lang="ts">
import Tabla from '@/components/TablaOrders.vue';
import {useRouter} from "vue-router";

const router = useRouter();
const irAlFormulario = ()=>{
  router.push('/tarea-formulario')
}
</script>

<style scoped>

</style>