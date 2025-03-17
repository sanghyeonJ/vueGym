<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="error" :message="error.message" />
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ $dayjs( post.createdAt ).format('YYYY.MM.DD HH:mm:ss') }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">prev</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">next</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">list</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          edit
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';
import { useAxios } from '@/composables/useAxios.js';
import AppLoading from '@/components/app/AppLoading.vue';
import AppError from '@/components/app/AppError.vue';

// props 전달 받기 ( router/index.js 확인 )
const props = defineProps({
  id: Number
})

const router = useRouter();
// const post = ref({});
// const loading = ref(false);
// const error = ref(null);
/**
 * reactive 사용시 
 * 대입 할 시 post = {...data} 로 대입해야 함
 * 그러나 반응성을 잃어버림
 * 그래서 
 * post.title = data.title / post.content = data.content / post.createdAt = data.createdAt 로 대입해야 함
 * 
 * ref 사용시 
 * 대입 할 시 post.value = {...data} 로 대입해야 함
 * 한꺼번에 객체할당을 할수있고 반응성을 유지함
 */

const { data: post, error, loading } = useAxios(`/posts/${props.id}`)

// const fetchPost = async() => {
//   try{
//     loading.value = true;
//     const {data} = await getPostById(props.id);
//     setPost(data)
//     // 스프레드 연산자를 사용하면 객체의 새로운 복사본이 생성되어 원본데이터와 분리됨, vue의 반응성 시스템에서 더 안정적
//     // 스프레드 연산자로 객체 복사 => data가 변경되어도 post의 값이 변경되지 않음
//   } catch(err){
//     console.error('error : ', err);
//     error.value = err;
//   } finally {
//     loading.value = false;
//   }
// }
// const setPost = ({title, content, createdAt}) => {
//   post.value.title = title;
//   post.value.content = content;
//   post.value.createdAt = createdAt;
// }
// fetchPost()

// 삭제
const { error: removeError, loading: removeLoading, execute } = useAxios(`/posts/${props.id}`, { method: 'delete' }, {
  immediate: false,
  onSuccess: () => {
    router.push({ name: 'postListName' });
  },
  onError: (err) => {
    console.error('error : ', err);
  }
})


const remove = async () => {
  if(confirm('삭제하시겠습니까?') === false){
    return;
  }
  execute();
}

const goListPage = () => {
  router.push({
    name: 'postListName',
  });
};
const goEditPage = () => {
  router.push({
    name: 'postEditName',
    params: {
      id: props.id,
    },
  });
};

onBeforeRouteUpdate(() => {
    console.log('onBeforeRouteUpdate')
});
onBeforeRouteLeave(() => {
    console.log('onBeforeRouteLeave')
})
</script>

<!-- <script>
export default{
    beforeRouteEnter(){
        console.log('beforeRouteEnter')
    }
}
</script> -->

<style scoped></style>
