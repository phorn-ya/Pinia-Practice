<script setup>
import { useTodoStore } from './store/todoStore'
const todoStore = useTodoStore()
</script>

<template>
  <div>
    <p>Total: {{ todoStore.totalTodos }}</p>
    <p>Completed: {{ todoStore.completedTodos.length }}</p>
    <p>Pending: {{ todoStore.pendingTodos.length }}</p>
  </div>
</template>