<template>
  <div class="card mx-auto mt-5" style="width: 350px;">
    <form 
      @submit.prevent="procesarFormulario"
      class="card-body">
      <h1>{{ tarea ? 'Editar' : 'Agregar' }} Tarea</h1>
      <input 
        class="form-control mb-2"
        type="text" 
        v-model="formData.name"
        placeholder="name"
        required>
      <input 
        type="number"
        placeholder="price"
        v-model.number="formData.price"
        class="form-control mb-3"
        required>
      <input 
        type="checkbox"
        v-model="formData.available"
        class="form-check-input mb-3">
      <label class="form-check-label">Available</label>
      <button :disabled="cargando" class="btn btn-primary w-100">Guardar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { API, ITarea } from '@/contantes';
import { useRouter } from 'vue-router';

// Definir propiedades de entrada
const props = defineProps({
  tarea: {
    type: Object as () => ITarea | null,
    default: null
  }
});

// Definir datos reactivos
const formData = reactive({
  name: '',
  price: 0,
  available: false
});
const cargando = ref(false);
const router = useRouter();
const tarea = computed(() => props.tarea);

// Ver cambios en tarea y actualizar formData
watch(tarea, (newTarea) => {
  if (newTarea) {
    formData.name = newTarea.name || '';
    formData.price = newTarea.price || 0;
    formData.available = newTarea.available || false;
  }
}, { immediate: true }); // Añadir immediate para la inicialización inmediata

// Manejar el envío del formulario
const procesarFormulario = async () => {
  cargando.value = true;
  const payload = {
    name: formData.name,
    price: formData.price,
    available: formData.available
  };

  if (tarea.value) {
    await fetch(`${API}/${tarea.value.id}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    await fetch(`${API}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  cargando.value = false;
  router.back();
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
