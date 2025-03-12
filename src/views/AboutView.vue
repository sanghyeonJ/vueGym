<template>
  <div>
    <h2>About</h2>
    <button class="btn btn-primary" @click="$router.push('/')">Home</button>

    <h2>Store</h2>
    <p>counter: {{ store.counter }}</p>
    <p>doubleCount: {{ store.doubleCount }}</p>
    <p>doubleCountPlusOne: {{ store.doubleCountPlusOne }}</p>
    <button @click="store.increment()">click!!</button>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>doubleCountPlusOne: {{ doubleCountPlusOne }}</p>
    <button @click="increment()">click!!</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '../store/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log(route.path);

const store = useCounterStore();

// reactive객체이므로 구조분해할당을 하게되면 반응성연결이 끊어진다.
// const {counter} = store;
const {counter, doubleCount, doubleCountPlusOne} = storeToRefs(store);
// storeToRefs를 사용하면 반응성을 유지하면서 구조분해할당을 할 수 있다.
const { increment } = store;
// actions에 정의된 함수는 storeToRefs를 사용하지 않는다.
</script>

<style scoped></style>
