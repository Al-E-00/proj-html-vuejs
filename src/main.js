import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  }, 
  render: h => h(App),
}).$mount('#app')
