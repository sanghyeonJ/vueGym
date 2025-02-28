<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
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
        <button class="btn btn-outline-danger">delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

// props 전달 받기 ( router/index.js 확인 )
const props = defineProps({
  id: Number
})

const router = useRouter();
const form = ref({});
/**
 * reactive 사용시 
 * 대입 할 시 form = {...data} 로 대입해야 함
 * 그러나 반응성을 잃어버림
 * 그래서 
 * form.title = data.title / form.content = data.content / form.createdAt = data.createdAt 로 대입해야 함
 * 
 * ref 사용시 
 * 대입 할 시 form.value = {...data} 로 대입해야 함
 * 한꺼번에 객체할당을 할수있고 반응성을 유지함
 */


const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = {...data}; 
  // 스프레드 연산자를 사용하면 객체의 새로운 복사본이 생성되어 원본데이터와 분리됨, vue의 반응성 시스템에서 더 안정적
  // 스프레드 연산자로 객체 복사 => data가 변경되어도 form의 값이 변경되지 않음
}
fetchPost()

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
</script>

<style scoped></style>
