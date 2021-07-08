<template>
  <div>
    <v-app-bar color="primary" dark tag="div" elevation="0">
      <v-btn icon class="back-button d-sm-none" @click="$router.back()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <template v-if="!showSearch">
        <v-app-bar-title>Users</v-app-bar-title>
        <v-spacer></v-spacer>
      </template>
      <v-text-field
        hide-details=""
        placeholder="Search Users"
        v-model="searchText"
        v-if="showSearch"
        class="max-width"
        ref="searchInput"
      ></v-text-field>
      <v-btn icon @click="showSearch = !showSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-list class="pa-0 transparent" rounded>
      <v-list-item-group active-class="border" color="dark">
        <v-list-item
          v-for="user in filteredUsers"
          :key="user.uid"
          @click="startChat(user)"
          class="py-1"
        >
          <v-list-item-avatar>
            <v-img
              :alt="`${user.displayName} Avatar`"
              :src="require('../assets/profile_placeholder.png')"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.displayName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import { db, Timestamp } from "../db";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [],
      searchText: "",
      showSearch: false,
    };
  },
  watch: {
    showSearch(val) {
      if (!val) {
        this.searchText = "";
      } else {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },
  },
  computed: {
    filteredUsers() {
      let query = this.users.filter((u) => u.uid != this.currentUser.uid);
      if (this.searchText)
        query = query.filter((u) =>
          u.displayName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      return query;
    },
    ...mapGetters(["chats", "currentUser"]),
  },
  methods: {
    startChat(user) {
      if (user.uid == this.currentUser.uid) return;
      const chat = this.chats.find((c) => c.users.includes(user.uid));
      console.log("Chat", chat);
      if (!chat) {
        db.collection("chats")
          .add({
            users: [this.currentUser.uid, user.uid],
            personal: true,
            messages: [],
            created: Timestamp.now(),
            updated: Timestamp.now(),
          })
          .then((data) => {
            this.$router.replace({ name: "Chat", params: { id: data.id } });
          });
      } else {
        this.$router.replace({ name: "Chat", params: { id: chat.id } });
      }
    },
  },
  created() {
    db.collection("users")
      .get()
      .then((data) => {
        data.docs.forEach((user) => {
          this.users.push(user.data());
        });
      });
  },
};
</script>
<style lang="">
</style>