<script setup>
import { useCounterStore } from './store/counterStore'

const counter = useCounterStore()
</script>

<template>
  <div class="card">
    <p>Current Count: {{ counter.count }}</p>
    <p>Double Count: {{ counter.doubleCount }}</p>

    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
    <button @click="counter.reset">Reset</button>
  </div>
</template>