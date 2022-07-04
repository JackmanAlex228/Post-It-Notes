<template>
  <div id="app">

    <!-- Navigation bar, on top-->
    <NavigationBar />
    <section class="section">
      <div class="container is-desktop">
        <router-view />
      </div>
    </section>

    <!-- Main section of the page -->
    <section v-if="isUserAuth" class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="row">
            Welcome {{ getUser.email }}
          </div>
          <div class="row">
            <CreateNote />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import CreateNote from './components/CreateNote.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    NavigationBar,
    CreateNote
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
