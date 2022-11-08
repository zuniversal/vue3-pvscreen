import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia,  } from 'pinia'// 

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)
const pinia = createPinia()
app
  .use(pinia)
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app')

// app.use(router).use(store).mount('#app')