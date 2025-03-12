import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// pinia 추가
import { createPinia } from 'pinia';

// 플러그인 등록
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';
import dayjs from './plugins/dayjs';

// 전역 컴포넌트 등록
// 전역적으로 사용되는 컴포넌트는 전역 컴포넌트로 등록하여 매번 import 하지 않아도 사용할 수 있도록 한다.
import globalComponents from './plugins/global-components';
// 전역 디렉티브 등록
//import focus from './directive/focus';
// 전역 디렉티브를 하나의 플러그인에 묶어서 관리
import globalDirective from './plugins/global-directive';

const app = createApp(App);
app.use(funcPlugins);
app.use(objPlugins, {name: '길동'});
app.use(person, {name: '변경된 길동'});

// 전역 컴포넌트 등록
app.use(globalComponents);
// 전역 디렉티브 등록
//app.directive('focus', focus);
// 전역 디렉티브를 하나의 플러그인에 묶어서 관리
app.use(globalDirective);
app.use(dayjs);
app.use(router);
app.use(createPinia());
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
