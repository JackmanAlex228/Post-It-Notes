<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavigationBar />
    <section class="section">
      <div class="container is-desktop">
        <router-view />
      </div>
    </section>
    <section v-if="isUserAuth" class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          Welcome {{ getUser.email }}
        </div>
      </div>
    </section>
    <!-- <AddUser/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import AddUser from './components/AddUser.vue'
import NavigationBar from './components/NavigationBar.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavigationBar,
    // AddUser
  },
  data() {
    return {
      kaas: true
    }
  },
  mounted() {
    this.authAction()
  },
  computed: {
    ...mapGetters(['getUser', 'isUserAuth'])
  },
  methods: {
    ...mapActions(['authAction'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
