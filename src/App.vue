<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header class="flex w-full justify-between mx-auto items-center text-center mb-6">
      <nav class="flex  w-full gap-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

