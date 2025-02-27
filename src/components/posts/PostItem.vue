<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <p class="text-muted">{{ createdAt }}</p>
    </div>
  </div>
</template>

<script setup>
// props를 선언할때 defineProps를 사용
defineProps({
  title: {
    type: String,
    required: true, // 필수 속성
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
</script>

<style scoped></style>
