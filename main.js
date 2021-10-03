import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'

Vue.config.productionTip = false

App.mpType = 'app'
// Vue.use(ElementUI)

const app = new Vue({
    ...App
})
app.$mount()
