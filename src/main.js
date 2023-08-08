import Vue from 'vue'
import App from './App.vue'
import AllrideJsonView from "allride-json-view";
import "../node_modules/allride-json-view/allride-json-view.css";

Vue.config.productionTip = false
Vue.use(AllrideJsonView)

new Vue({
  render: h => h(App),
}).$mount('#app')
