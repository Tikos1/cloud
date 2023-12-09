import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/main.css'
import { Icon } from '@iconify/vue2';
import CloudFooter from '@/components/CloudFooter.vue'
import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'
import { Image as VanImage } from 'vant';
import { Swipe, SwipeItem, Popup, Switch, Field, Button, Collapse, CollapseItem, Circle, Tab, Tabs, NoticeBar, Sticky, Badge, IndexBar, IndexAnchor, Cell, PasswordInput, NumberKeyboard, Checkbox, CheckboxGroup } from 'vant';
import AudioPlayer from '@/components/AudioPlayer'
// Vue.$use = function (module){
//   if(typeof module === 'function'){
//     module(this)
//   }else if(typeof module.install === 'function'){
//     module.install(this)
//   }
// }

Vue.config.productionTip = false
Vue.use(AudioPlayer);
Vue.use(Circle);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NoticeBar);
Vue.use(Sticky);
Vue.use(VanImage);
Vue.use(Badge);
Vue.use(IndexBar);
Vue.use(Cell);
Vue.use(IndexAnchor);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
BScroll.use(ScrollBar)
Vue.component('icon', Icon)
Vue.use(Popup);
Vue.use(Switch);
Vue.use(Field);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.component('CloudFooter', CloudFooter)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
