<template>
  <div>
    <h2>PostDetail</h2>
    <p>내용</p>
    <p class="text-muted">날짜</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">prev</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">next</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">list</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          edit
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goListPage = () => {
  router.push({
    name: 'postListName',
  });
};
const goEditPage = () => {
  router.push({
    name: 'postEditName',
    params: {
      id,
    },
  });
};
</script>

<style scoped></style>
