<script setup>
import { useThemeStore } from '../store/themeStore'

const themeStore = useThemeStore()
</script>

<template>
  <div
    class="card"
    :class="{ 'dark-card': themeStore.darkMode }"
  >
    <h2>Exercise 5: Theme Store</h2>

    <p>
      Current Mode:
      <strong>{{ themeStore.darkMode ? '🌙 Dark Mode' : '☀️ Light Mode' }}</strong>
    </p>

    <button @click="themeStore.toggleTheme">
      Switch to {{ themeStore.darkMode ? 'Light' : 'Dark' }} Mode
    </button>
  </div>
</template>