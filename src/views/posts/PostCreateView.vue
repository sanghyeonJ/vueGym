<template>
  <div>
    <h2>PostCreate</h2>
    <hr class="my-4" />
    <!-- <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" v-model="form.title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3" v-model="form.content"></textarea>
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
    </form> -->
    <!-- submit 이벤트는 컴포넌트의 상위태그인 form에 상속된다 -->
    <PostForm @submit.prevent="save" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
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
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const save = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now()
    })
    router.push({ name: 'postListName' })
  } catch(error){
    console.error('error : ' , error);
  }
}

const goListPage = () => {
  router.push({
    name: 'postListName',
  });
};
</script>

<style scoped></style>
