<template>
  <v-app>
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
    </v-app-bar>

    <keep-alive>
      <router-view />
    </keep-alive>
  </v-app>
</template>
<script>
import { auth } from "../db";
export default {
  name: "Auth",
  methods: {
    async logout() {
      await auth.signOut();
    },
  },
};
</script>
<style lang="">
</style>