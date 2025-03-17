import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
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
import MyPage from '@/views/MyPage.vue';

const routes = [
  { path: '/', component: HomeView, name: 'homeName' },
  { path: '/about', component: AboutView, name: 'aboutName' },

  { path: '/posts', component: PostListView, name: 'postListName' },
  { path: '/posts/create', component: PostCreateView, name: 'postCreateName' },
  // /: 동적 라우팅 => 여러 url을 하나의 컴포넌트에 매핑
  // props: true => /:id 와 같은 파라미터가 해당 컴포넌트에 props로 전달된다.
  { 
    path: '/posts/:id',
    component: PostDetailView,
    name: 'postDetailName',
    //props: true
    props: (route) => {
      return {
        id: parseInt(route.params.id)
      }
    }
  },
  { path: '/posts/:id/edit', component: PostEditView, name: 'postEditName' },

  { path: '/nested', component: NestedView, name: 'nestedName', children: [
    { path: '', component: NestedHomeView, name: 'nestedHomeName' },
    { path: 'one', component: NestedOneView, name: 'nestedOneName' },
    { path: 'two', component: NestedTwoView, name: 'nestedTwoName' },
  ] },

  { path: '/my', component: MyPage, name: 'myPageName',
    // 라우트 내 네비게이션 가드(라우트 가드)
    // beforeEnter: (to, from) => {
    //     //console.log('to', to);
    //     //console.log('from', from);
    //     //return '/';
    //     console.log(to.query)
    //     // Object.keys => 객체의 키를 배열로 반환
    //     if(Object.keys(to.query).length > 0){
    //         return { path: to.path, query: {} }  // 쿼리스트링 제거
    //     }
    // }
    beforeEnter: [removeQueryString]  // 함수로 분리한뒤 배열로 전달 => 여러개의 네비게이션 가드 적용
   },

  { path: '/:pathMatch(.*)*', component: NotFoundView, name: 'notFoundName' },
];

function removeQueryString(to){
    if(Object.keys(to.query).length > 0){
        return { path: to.path, query: {} }  // 쿼리스트링 제거
    }
}

const router = createRouter({
  // 히스토리 모드로 동작
  history: createWebHistory('/'),

  // 해시모드로 동작 
  //history: createWebHashHistory(),
  routes,
});

// 네비게이션 가드
// router.beforeEach((to, from) => {
//     // to: 이동할 페이지
//     // from: 이동 전 페이지
//   console.log('to', to);
//   console.log('from', from);

//   // 리턴값이 없으면 원하는 페이지로 바로 이동(to)
//   // 리턴값이 false이면 이동 취소
//   if (to.name === 'myPageName') {
//     // return false;
//     //return { name: 'homeName' };
//     //return { path: '/' };
//     return '/';
//   }
// });

export default router;
