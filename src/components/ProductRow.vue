<template>
  <div class="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-md">
    <!-- Coste -->
    <div class="flex-1">
      <label class="block text-lg mb-1">
        Coste: <strong>{{ product.landedCost.toFixed(2) }}</strong>
      </label>
      <input
        type="range"
        v-model.number="product.landedCost"
        min="0"
        max="1000"
        step="0.1"
        class="w-full"
      />
    </div>

    <!-- Margen propio -->
    <div class="flex-1">
      <label class="block text-lg mb-1">
        Mi margen: <strong>{{ formatPct(product.marginMe) }}</strong>
      </label>
      <input
        type="range"
        v-model.number="product.marginMe"
        min="0"
        max="1"
        step="0.01"
        class="w-full"
      />
    </div>

    <!-- Margen retailer -->
    <div class="flex-1">
      <label class="block text-lg mb-1">
        Margen Retailer: <strong>{{ formatPct(product.marginRetail) }}</strong>
      </label>
      <input
        type="range"
        v-model.number="product.marginRetail"
        min="0"
        max="1"
        step="0.01"
        class="w-full"
      />
    </div>

    <!-- Resultados -->
    <div class="flex-1 text-center">
      <p class="text-2xl">
        Mayorista: <span class="font-mono">{{ wholesalePrice.toFixed(2) }}</span>
      </p>
      <p class="text-2xl">
        Final: <span class="font-mono">{{ finalPrice.toFixed(2) }}</span>
      </p>
    </div>

    <!-- Botón eliminar -->
    <button
      @click="$emit('remove')"
      class="self-start text-red-400 hover:text-red-300"
      aria-label="Eliminar producto"
    >
      🗑️
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const formatPct = v => `${Math.round(v * 100)}%`

const wholesalePrice = computed(() =>
  props.product.landedCost / (1 - props.product.marginMe)
)
const finalPrice = computed(() =>
  wholesalePrice.value / (1 - props.product.marginRetail)
)
</script>

<style scoped>
/* Aquí puedes añadir reglas CSS específicas al card si necesitas */
</style>
