<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ content }}</p>
    <p class="text-muted">{{ createdAt }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button class="btn p-0" @click.stop="$emit('modal')">  <!-- stop을 넣으면 이벤트 전파를 막는다 -->
          <i class="bi bi-lightbulb-fill"></i>
        </button>
      </div>
    </template>
  </AppCard>
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

defineEmits(['modal']);
</script>

<style scoped></style>
