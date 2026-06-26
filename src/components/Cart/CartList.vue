<script setup>
import { useCartStore } from './store/cartStore'
const cartStore = useCartStore()
</script>

<template>
  <ul>
    <li v-for="item in cartStore.cart" :key="item.id">
      {{ item.name }} - ${{ item.price }}
      <button @click="cartStore.removeFromCart(item.id)">Remove</button>
    </li>
  </ul>
</template>