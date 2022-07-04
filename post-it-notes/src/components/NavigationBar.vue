<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" style="align-items: center;">
      <img
        src="https://vuejs.org/images/logo.png"
        style="height: 50px; margin: 20px;"
      />
      <span class="has-text-weight-medium is-size-4">
        Post-it Notes!
      </span>
    </div>

    <div id="navbarBasicExample" class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">

            <!-- Display only if the user has not been authenticated -->
            <template v-if="!isUserAuth">
              <router-link
                v-for="item of navItems"
                :key="item.name"
                :to="item.to"
                class="button is-primary"
              >
                <span class="icon">
                  <font-awesome-icon :icon="`fa-solid fa-${item.icon}`" />
                </span>
                <strong>{{ item.name }}</strong>
              </router-link>
            </template>

            <!-- Display only if the user has been authenticated -->
            <template v-if="isUserAuth">
              <button
                @click="signOutAction" 
                class="button is-primary">
                <span class="icon">
                  <font-awesome-icon :icon="`fa-sign-out-alt`"/>
                </span>
                <strong>Logout</strong>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      navItems: [
        { name: "Login", to: "/login", icon: "lock" },
        { name: "Register", to: "/register", icon: "key" }
      ]
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      this.signOutAction();
    }
  }
};
</script>
view raw
authentication-navbar-1.vue hosted with ❤ by GitHub
