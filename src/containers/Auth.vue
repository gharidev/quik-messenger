<template>
  <div>
    <!-- <v-app-bar app color="primary" v-if="$route.name != 'Chat'">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span class="shrink mt-1 text-h6">Quik Messenger</span>
      </div>

      <v-spacer></v-spacer>

      <v-menu left bottom v-if="$store.getters.currentUser">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" plain>
            <v-icon left>mdi-account</v-icon>
            {{ $store.getters.currentUser.displayName }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar> -->

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { loadStyle, unloadStyle } from "../utils";
import { chatsWatcher } from "../utils/chats-watcher";
export default {
  name: "Auth",
  created() {
    this.$store.dispatch("bindChats", this.$store);
    this.unwatch = this.$store.watch(
      (_, getters) => getters.chats,
      chatsWatcher
    );
    loadStyle(
      `html {
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
}`,
      "scroll-limiter"
    );
  },
  beforeDestroy() {
    this.$store.dispatch("unbindChats");
    this.unwatch();
  },
  destroyed() {
    unloadStyle("scroll-limiter");
  },
};
</script>
<style lang="">
</style>