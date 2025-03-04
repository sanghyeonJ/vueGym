<template>
  <div>
    <h2>Edit</h2>
    <hr class="my-4" />
    <!-- <form @submit.prevent="edit">
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
    </form> -->

    <PostForm @submit.prevent="edit" v-model:title="form.title" v-model:content="form.content">
      <template #actions>
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
      </template>
    </PostForm>
    <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
    //router.push({ name: 'postDetailName', params: {id} })
    vAlert('수정이 완료되었습니다.', 'success');
  } catch(error){
    console.error('error : ' , error);
    vAlert('네트워크 오류', 'error')
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

const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('');
const vAlert = (message, type = 'error') => {
  showAlert.value = true;
  alertMessage.value = message;
  alertType.value = type;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
}
</script>

<style scoped></style>
