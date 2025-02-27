<template>
  <div>
    <h2>Edit</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetail"
        >
          cancel
        </button>
        <button class="btn btn-primary">save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goDetail = () => {
  router.push({
    name: 'postDetailName',
    params: {
      id,
    },
  });
};
</script>

<style scoped></style>
