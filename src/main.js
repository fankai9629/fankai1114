import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from 'swiper'
import * as filters from './filters'
import 'vant/lib/button/style';
import { Toast } from 'vant';
import {Button,List,Sticky,IndexBar,IndexAnchor,Cell,Search} from 'vant'
Vue.use(Sticky);
Vue.use(Button).use(List).use(Sticky).use(IndexAnchor).use(Search).use(IndexBar).use(Cell)
Vue.config.productionTip = false
Vue.use(Toast);
for(let k in filters){
  Vue.filter(k,filters[k])
}
new Vue({
  router,
  store,
  Swiper,
  render: h => h(App)
}).$mount('#app')
