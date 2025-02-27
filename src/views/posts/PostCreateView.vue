<template>
  <div>
    <h2>PostCreate</h2>
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
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          list
        </button>
        <button class="btn btn-primary">save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goListPage = () => {
  router.push({
    name: 'postListName',
  });
};
</script>

<style scoped></style>
