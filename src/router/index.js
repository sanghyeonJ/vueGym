import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
  { path: '/', component: HomeView, name: 'homeName' },
  { path: '/about', component: AboutView, name: 'aboutName' },

  { path: '/posts', component: PostListView, name: 'postListName' },
  { path: '/posts/create', component: PostCreateView, name: 'postCreateName' },
  // : 동적 라우팅 => 여러 url을 하나의 컴포넌트에 매핑
  { path: '/posts/:id', component: PostDetailView, name: 'postDetailName' },
  { path: '/posts/:id/edit', component: PostEditView, name: 'postEditName' },

  { path: '/nested', component: NestedView, name: 'nestedName', children: [
    { path: '', component: NestedHomeView, name: 'nestedHomeName' },
    { path: 'one', component: NestedOneView, name: 'nestedOneName' },
    { path: 'two', component: NestedTwoView, name: 'nestedTwoName' },
  ] },


  { path: '/:pathMatch(.*)*', component: NotFoundView, name: 'notFoundName' },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
