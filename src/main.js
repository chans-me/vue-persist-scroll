import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as services from "./services";

Vue.prototype.$services = services.default;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
