<template>
  <div>
    <h2>Home</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAbout">about</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
// router 페이지의 이동을 제어하는 객체 (push, replace, back, forward)
// route 현재 페이지의 정보를 가져오는 객체

const route = useRoute();
console.log(route.path);

const router = useRouter();

const goAbout = () => {
  // router.push('/about');
  router.push({
    name: 'aboutName',
  });
};
</script>

<style scoped></style>
