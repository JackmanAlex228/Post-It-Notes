import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret, faLock, faKey } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

/* add icons to the library */
library.add(faUserSecret, faLock, faKey)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
