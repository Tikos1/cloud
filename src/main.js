import * as Sentry from "@sentry/vue";
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

Sentry.init({
  Vue,
  dsn: "https://840c0d8ce48047e5bcf30bb78afe4b92@o4506386949734400.ingest.sentry.io/4506386975817728",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [],
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});


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
