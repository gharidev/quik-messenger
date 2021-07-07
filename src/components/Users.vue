<template>
  <div>
    <h1>Users</h1>
    <p v-for="user in filteredUsers" :key="user.uid" @click="startChat(user)">
      {{ user.uid + ", " + user.displayName }}
    </p>
  </div>
</template>
<script>
import { db, Timestamp } from "../db";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [],
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((u) => u.uid != this.currentUser.uid);
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
            this.$router.push("chat/" + data.id);
          });
      } else {
        this.$router.push("chat/" + chat.id);
      }
    },
  },
  firestore: {
    users: db.collection("users"),
  },
  created() {
    console.log(this.currentUser);
  },
};
</script>
<style lang="">
</style>