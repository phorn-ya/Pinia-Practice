<script setup>
import { useTodoStore } from './store/todoStore'
const todoStore = useTodoStore()
</script>

<template>
  <ul>
    <li v-for="todo in todoStore.todos" :key="todo.id">
      {{ todo.title }}

      <button @click="todoStore.toggleTodo(todo.id)">
        {{ todo.completed ? 'Undo' : 'Complete' }}
      </button>

      <button @click="todoStore.deleteTodo(todo.id)">
        Delete
      </button>
    </li>
  </ul>
</template>