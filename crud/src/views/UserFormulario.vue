<template>
  <div class="container">
    <MyFormulario
      :tarea="tarea"
    />
  </div>
</template>

<script setup lang="ts">
import MyFormulario from '@/components/layout/MyFormulario.vue';
import { API, ITarea } from '@/contantes';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute();
const tarea = ref<null | ITarea>(null);

onBeforeMount(async () => {
  if (params.id) {
    const data = await fetch(`${API}${params.id}`);
    tarea.value = await data.json();
  }
});
</script>

<style scoped>

</style>
