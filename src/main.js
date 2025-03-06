import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import funcPlugins from './plugins/func';
import objPlugins from './plugins/obj';
import person from './plugins/person';

const app = createApp(App);
app.use(funcPlugins);
app.use(objPlugins, {name: '길동'});
app.use(person, {name: '변경된 길동'});
app.use(router);
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
