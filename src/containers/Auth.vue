<template>
  <div @contextmenu="(e)=>e.preventDefault()">
    <v-app>
      <!-- <v-app-bar app color="primary" dark v-if="$route.name != 'Chat'">
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
    </v-app>
  </div>
</template>
<script>
import { db } from "../db";
export default {
  name: "Auth",
  created() {
    this.$store.dispatch("bindChats", this.$store);
    this.unwatch = this.$store.watch(
      (_, getters) => getters.chats,
      (chats) => {
        if (!chats) return;
        const userIds = chats.map((chat) => {
          return chat.users.find(
            (u) => u != this.$store.getters.currentUser.uid
          );
        });
        let chatUsers = {};
        if (userIds.length == 0) return;
        const prevUserIds = Object.values(this.$store.state.chatUsers).map(
          (u) => u.uid
        );
        console.log("Previous", prevUserIds);
        if (prevUserIds.length > 0) {
          const difference = userIds.filter((u) => !prevUserIds.includes(u));
          console.log("Difference", difference);
          if (difference == 0) return;
        }
        db.collection("users")
          .where("uid", "in", userIds)
          .get()
          .then((users) => {
            users.docs.forEach((user) => {
              chats.forEach((chat) => {
                if (chat.users.includes(user.data().uid))
                  chatUsers[chat.id] = user.data();
              });
              this.$store.state.chatUsers = chatUsers;
            });
            console.log("Chat Users", chatUsers);
          });
      }
    );
  },
  beforeDestroy() {
    this.$store.dispatch("unbindChats");
    this.unwatch();
  },
};
</script>
<style lang="">
</style>