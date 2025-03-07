<template>
  <div>
    <h2>PostCreate</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message" />
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

          <button class="btn btn-primary" :disabled="loading">
            <template v-if="loading">
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
    <!-- <AppAlert :items="alerts"></AppAlert> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const loading = ref(false);
const error = ref(null);

const save = async () => {
  try {
    loading.value = true;
    await createPost({
      ...form.value,
      createdAt: Date.now()
    })
    router.push({ name: 'postListName' })
    vSuccess('게시글이 저장되었습니다.');
  } catch(err){
    console.error('error : ' , err);
    vAlert(err.message);
    error.value = err;
  } finally {
    loading.value = false;
  }
}

const goListPage = () => {
  router.push({
    name: 'postListName',
  });
};
// const alerts = ref([]);
// const vAlert = (message, type = 'error') => {
//   alerts.value.push({message, type});
//   setTimeout(() => {
//     alerts.value.shift();
//   }, 2000);
// }

// const vSuccess = (message) => vAlert(message, 'success');
// 컴포저블함수로 대체
</script>

<style scoped></style>
