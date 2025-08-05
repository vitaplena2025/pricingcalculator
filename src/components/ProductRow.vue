<template>
  <tr>
    <td class="border px-2">
      <input v-model.number="landedCost" type="number" class="w-full" />
    </td>
    <td class="border px-2">
      <input v-model.number="marginMe" type="number" step="0.01" class="w-full" />
    </td>
    <td class="border px-2">
      <input v-model.number="marginRetail" type="number" step="0.01" class="w-full" />
    </td>
    <td class="border px-2">{{ wholesalePrice.toFixed(2) }}</td>
    <td class="border px-2">{{ finalPrice.toFixed(2) }}</td>
  </tr>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  initialCost: { type: Number, required: true }
})

const landedCost   = ref(props.initialCost)
const marginMe     = ref(0.2)
const marginRetail = ref(0.1)

const wholesalePrice = computed(() => landedCost.value / (1 - marginMe.value))
const finalPrice     = computed(() => wholesalePrice.value / (1 - marginRetail.value))
</script>
