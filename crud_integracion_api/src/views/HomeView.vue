<script setup lang="ts">
import { ref } from 'vue';

const products = ref([
  { id: 1, name: 'Anillo de compromiso', price: 1200.0 },
  { id: 2, name: 'Collar de perlas', price: 800.0 },
  { id: 3, name: 'Pulsera de oro', price: 1500.0 },
  { id: 4, name: 'Aretes de diamantes', price: 2000.0 },
  { id: 5, name: 'Reloj de lujo', price: 3500.0 },
  { id: 6, name: 'Anillo de bodas', price: 900.0 },
]);
</script>

<template>
  <div class="container">
    <h1 class="title">Bienvenido a nuestra Joyería</h1>
    <p class="description">
      Explora nuestra exclusiva colección de joyas y encuentra la pieza perfecta para cada ocasión.
    </p>
    <div class="product-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
}

.description {
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
}

.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-name {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.product-price {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #e91e63;
}
</style>
