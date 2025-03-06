<template>
  <div>
    <h2>Home</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAbout">about</button>
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="(item, index) in items" :key="index" class="col-4">
        <AppCard>{{ item }}</AppCard>
      </div>
    </div>
    <AppGrid :items="items" v-slot="{ item }" col-class="col-6">  <!-- 만약 여기에 클래스를 추가하면 AppGrid컴포넌트에는 class props가 선언되지 않았기 때문에 nonprop 으로 최상단태그에 상속된다 -->
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4">
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.say">click person</button>
</div>
</template>

<script>
// main.js에서의 plugins (person)
// 컴포넌트 인스턴스는 setup 라이프사이클 이후에 생성되기때문에 script setup 에서 사용할 수 없다.
// options api의 created 훅을 사용해야한다.
// setup안에서 사용하고 싶으면 provide inject 를 사용해야한다.
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  }
}
</script>

<script setup>
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';
import { ref, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// router 페이지의 이동을 제어하는 객체 (push, replace, back, forward)
// route 현재 페이지의 정보를 가져오는 객체

const route = useRoute();
console.log(route.path);

const router = useRouter();

const goAbout = () => {
  // router.push('/about');
  router.push({
    name: 'aboutName',
  });
};

const items = ref(['사과', '딸기', '포도', '바나나']);


// provide inject 를 사용해서 자식컴포넌트에서 사용할 수 있도록 제공
const person = inject('person');
console.log('person.name provide', person.name);
</script>

<style scoped></style>
