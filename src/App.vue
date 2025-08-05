<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">Calculadora Dinámica de Pricing</h1>
    <table class="min-w-full table-auto border-collapse">
      <thead>
        <tr>
          <th class="border px-2">Coste</th>
          <th class="border px-2">Margen Propio</th>
          <th class="border px-2">Margen Retailer</th>
          <th class="border px-2">Precio Mayorista</th>
          <th class="border px-2">Precio Final</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow
          v-for="p in products"
          :key="p.id"
          :initialCost="p.cost"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductRow from './components/ProductRow.vue'

const products = ref([
  { id: 1, cost: 10.0 },
  { id: 2, cost: 25.5 }
])
</script>
