<template>
  <div>
    <h2>PostList</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div class="col-4" v-for="post in posts" :key="post.id">
        <PostItem
          :title="post.title"
          :content="post.content"
          :createdAt="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();

const goPage = id => {
  // router.push(`/posts/${id}`);
  // 바로 path를 넣어서 연결해줄수있다.

  // 객체형태로 전달하면 name을 이용할 수 있다.
  router.push({
    name: 'postDetailName',
    params: {
      id,
    },
    query: {
      searchText: 'hello',
    },
    hash: '#world',
    // http://localhost:3000/posts/4?searchText=hello#world
  });
};
</script>

<style scoped></style>
