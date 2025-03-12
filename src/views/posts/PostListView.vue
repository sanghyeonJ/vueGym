<template>
  <div>
    <h2>PostList</h2>
    <hr class="my-4" />
    <!-- <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input type="text" class="form-control" v-model="params.title_like">
        </div>
        <div class="col-3">
          <select class="form-select" v-model="params._limit">
            <option value="3">3개씩</option>
            <option value="6">6개씩</option>
            <option value="9">9개씩</option>
          </select>
        </div>
      </div>
    </form> -->
    <PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />
    <hr class="my-4" />

    <AppLoading v-if="loading" />
    <AppError v-else-if="error" :message="error.message" />

    <!-- <div class="row g-3">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostItem
          :title="post.title"
          :content="post.content"
          :createdAt="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div> -->
    <template v-else>
      <AppGrid :items="posts">
        <template v-slot="{item}">
          <PostItem
            :title="item.title"
            :content="item.content"
            :createdAt="item.createdAt"
            @click="goPage(item.id)"
            @modal="openModal(item)"
          />
        </template>
      </AppGrid>


      <!-- <nav class="mt-5" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled: params._page === 1}">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="--params._page">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="page in pageCount" :key="page" class="page-item" :class="{active: params._page === page}">
            <a class="page-link" href="#" @click.prevent="params._page = page">{{ page }}</a> --> <!-- prevent를 넣으면 기본동작을 막는다 --> <!--
          </li>
          <li class="page-item" :class="{disabled: params._page === pageCount}">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="++params._page">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav> -->
      <AppPagination :current-page="params._page" :page-count="pageCount" @page="handlePage" />
    </template>
    <Teleport to="#modal">
      <PostModal v-model="show" :title="modalTitle" :content="modalContent" :createdAt="modalCreatedAt" />
    </Teleport>
    <!-- 
    Teleport:
    구조상 현재 컴포넌트 내에 위치하고있지만 ui 구조상 외부에 있어야한다 
    따라서 index.html에 modal 아이디를 가진 div를 만들어서 그 안에 넣어준다.
    -->
    
    <hr class="my-5" />
    <template v-if="posts?.length > 0">
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

import { computed, ref, watchEffect } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios.js';

// const error = ref(null);
// const loading = ref(false);
const router = useRouter();
//const posts = ref([]);
// pagination 파라미터
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: ''
});
// const totalCount = ref(0);
const totalCount = computed(() => response.value.headers['x-total-count']);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));
const handlePage = (page) => params.value._page = page;

// const fetchPosts = () => {
//   getPosts().then(response => {
//     console.log('response : ', response);
//   }).catch(error => {
//     console.error('error : ', error);
//   })
// };
const { data: posts, error, loading, response } = useAxios('/posts', { params })
// useAxios 컴포저블 함수 사용
// const fetchPosts = async () => {
//   try {
//     loading.value = true;
//     const { data, headers } = await getPosts(params.value);
//     posts.value = data
//     totalCount.value = headers['x-total-count']  // -이 있기때문에 대괄호 문자열로 받아옴
//   } catch(err){
//     console.error('error : ' , err);
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// }
// fetchPosts();
// watchEffect(fetchPosts)
// watchEffect는 watch와 다르게 처음에 한번 실행한다.
// fetchPosts 내부의 반응형 상태가 변경되었을때 해당 함수를 다시 실행할 수 있다.

const goPage = id => {
  // router.push(`/posts/${id}`);
  // 바로 path를 넣어서 연결해줄수있다.

  // 객체형태로 전달하면 name을 이용할 수 있다.
  router.push({
    name: 'postDetailName',
    params: {
      id,
    },
    // query: {
    //   searchText: 'hello',
    // },
    // hash: '#world',
    // http://localhost:3000/posts/4?searchText=hello#world
  });
};

// modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const openModal = ({title, content, createdAt}) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreatedAt.value = createdAt;
}
// const closeModal = () => {
//   show.value = false;
// }
</script>

<style scoped></style>
