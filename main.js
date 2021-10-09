import Vue from 'vue'
import App from './App'
// import './src/plugins/element'
import './src/plugins/ant'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
