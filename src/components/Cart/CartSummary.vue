<script setup>
import { useCartStore } from './store/cartStore'
const cartStore = useCartStore()
</script>

<template>
  <div>
    <p>Total Items: {{ cartStore.totalItems }}</p>
    <p>Total Price: ${{ cartStore.totalPrice }}</p>

    <button @click="cartStore.clearCart">Clear Cart</button>
  </div>
</template>