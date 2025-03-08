<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />
  <div v-else>
    <h2>Edit</h2>
    <hr class="my-4" />
    <AppError v-if="editError" :message="editError.message" />
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
          <button class="btn btn-primary" :disabled="editLoading">
            <template v-if="editLoading">
              <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span class="visually-hidden" role="status">Loading...</span>
            </template>
            <template v-else>
              save
            </template>
          </button>
        </div>
      </template>
    </PostForm>
    <!-- <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" /> -->
     <AppAlert :items="alerts"></AppAlert>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';
import AppAlert from '@/components/app/AppAlert.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/useAxios.js';
const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const route = useRoute();
const id = route.params.id;
// const loading = ref(false);
// const error = ref(null);

// const form = ref({
//   title: null,
//   content: null,
// });

const { data: form, error, loading } = useAxios(`/posts/${id}`)

// const fetchPost = async() => {
//   try{
//     loading.value = true;
//     const {data} = await getPostById(id);
//     setForm(data)
//   } catch(error){
//     console.error('error : ', error);
//     error.value = error;
//   } finally {
//     loading.value = false;
//   }
// }
// const setForm = ({title, content}) => {
//   form.value.title = title;
//   form.value.content = content;
// }
// fetchPost();


const { error: editError, loading: editLoading, execute } = useAxios(`/posts/${id}`, { method: 'patch' }, {
  immediate: false,
  onSuccess: () => {
    router.push({ name: 'postDetailName', params: {id} })
    vSuccess('수정이 완료되었습니다.');
  },
  onError: (err) => {
    vAlert(err.message);
  }
});

const edit = () => {
  execute({
    ...form.value,
  })
}

// const editError = ref(null);
// const editLoading = ref(false);
// const edit = async () => {
//   try{
//     editLoading.value = true;
//     await updatePost(id, {...form.value});
//     vSuccess('수정이 완료되었습니다.');
//     router.push({ name: 'postDetailName', params: {id} })
//   } catch(err){
//     console.error('error : ' , err);
//     editError.value = err;
//       vAlert(err.message);
//   } finally {
//     editLoading.value = false;
//   }
// }

const goDetail = () => {
  router.push({
    name: 'postDetailName',
    params: {
      id,
    },
  });
};

// const showAlert = ref(false);
// const alertMessage = ref('');
// const alertType = ref('');
// const alerts = ref([]);
// const vAlert = (message, type = 'error') => {
//   alerts.value.push({message, type});
//   // showAlert.value = true;
//   // alertMessage.value = message;
//   // alertType.value = type;
//   setTimeout(() => {
//     //showAlert.value = false;
//     alerts.value.shift();
//   }, 2000);
// }
</script>

<style scoped></style>
