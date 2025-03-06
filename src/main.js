import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';

// 전역 컴포넌트 등록
// 전역적으로 사용되는 컴포넌트는 전역 컴포넌트로 등록하여 매번 import 하지 않아도 사용할 수 있도록 한다.
import globalComponents from './plugins/global-components';

const app = createApp(App);
app.use(funcPlugins);
app.use(objPlugins, {name: '길동'});
app.use(person, {name: '변경된 길동'});

// 전역 컴포넌트 등록
app.use(globalComponents);
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
