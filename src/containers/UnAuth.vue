<template>
  <div>
    <v-app-bar app color="primary" dark v-if="$route.name != 'Chat'">
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
    <v-main class="primary lighten-4 scroll-container">
      <v-container>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "UnAuth",
};
</script>
<style>
.scroll-container {
  height: 100vh;
  overflow-y: auto;
}
</style>
