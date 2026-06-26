<script setup>
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
</script>

<template>
  <div>
    <p>{{ themeStore.darkMode ? 'Dark Mode' : 'Light Mode' }}</p>
    <button @click="themeStore.toggleTheme">Toggle Theme</button>
  </div>
</template>