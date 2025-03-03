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
</div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';
import { ref } from 'vue';
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
</script>

<style scoped></style>
