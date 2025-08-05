<template>
  <div class="min-h-screen bg-gray-900 text-white p-6 font-sans">
    <h1 class="text-3xl font-bold mb-6">Calculadora Dinámica</h1>
    <div class="grid gap-4">
      <ProductCard
        v-for="(p, i) in products"
        :key="p.id"
        :product="p"
        @remove="remove(i)"
      />
      <!-- Botón + para añadir producto -->
      <button
        @click="add()"
        class="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-4xl shadow-lg self-center"
        aria-label="Añadir producto"
      >＋</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './components/ProductCard.vue'

let nextId = 3
const products = ref([
  { id: 1, landedCost: 10, marginMe: 0.2, marginRetail: 0.1 },
  { id: 2, landedCost: 25.5, marginMe: 0.2, marginRetail: 0.1 }
])

const add = () => {
  products.value.push({
    id: nextId++,
    landedCost: 0,
    marginMe: 0.2,
    marginRetail: 0.1
  })
}

const remove = (i) => {
  products.value.splice(i, 1)
}
</script>

<style>
/* Si quieres forzar modo oscuro por defecto, descomenta: */
/* html { color-scheme: dark; } */
</style>
