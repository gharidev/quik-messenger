<template>
  <div>
    <v-app-bar app v-if="$route.name != 'Chat'">
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
    </v-app-bar>
    <v-main>
      <v-container class="fixed-appbar-full-body d-flex align-center">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { loadStyle, unloadStyle } from "../utils";
export default {
  name: "UnAuth",
  created() {
    loadStyle(
      `html{
  overflow-y: auto;
}`,
      "html-overflow"
    );
  },
  destroyed() {
    unloadStyle("html-overflow");
  },
};
</script>
<style>
</style>
