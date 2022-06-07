<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavigationBar />
    <AddUser/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AddUser from './components/AddUser.vue'
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavigationBar,
    AddUser
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
