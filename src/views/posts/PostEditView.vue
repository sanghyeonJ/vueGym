<template>
  <div>
    <h2>Edit</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
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
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});
const fetchPost = async() => {
  try{
    const {data} = await getPostById(id);
    setForm(data)
  } catch(error){
    console.error('error : ', error);
  }
}
const setForm = ({title, content}) => {
  form.value.title = title;
  form.value.content = content;
}
fetchPost();

const edit = async () => {
  try{
    await updatePost(id, {...form.value});
    router.push({ name: 'postDetailName', params: {id} })
  } catch(error){
    console.error('error : ' , error);
  }
}

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
