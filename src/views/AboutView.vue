<template>
  <div>
    <h2>About</h2>
    <button class="btn btn-primary" @click="$router.push('/')">Home</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>

<style scoped></style>
