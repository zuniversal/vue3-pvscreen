import '@babel/polyfill';
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/css/index.less'
import installElementPlus from './plugins/element'
import { createPinia,  } from 'pinia'// 

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import VConsole from 'vconsole';
// const vConsole = new VConsole();
// vConsole.destroy();

window.vlog = (...params) => {
  console.log(' vlog ： ', params,  )// 
  console.log(params.forEach((v) => JSON.parse(JSON.stringify(v))));
}

const app = createApp(App)
const pinia = createPinia()
installElementPlus(app)

app
  .use(pinia)
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app')

// app.use(router).use(store).mount('#app')