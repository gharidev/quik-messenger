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
export default {
  data() {
    return {
      users: [],
    };
  },
  props: ["chats"],
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    filteredUsers() {
      return this.users.filter((u) => u.uid != this.currentUser.uid);
    },
  },
  methods: {
    startChat(user) {
      if (user.uid == this.currentUser.uid) return;
      const chats = this.chats.filter((c) => c.users.includes(user.id));
      if (chats.length == 0) {
        db.collection("chats")
          .add({
            users: [this.currentUser.uid, user.uid],
            personal: true,
            messages: [],
            created: Timestamp.now(),
          })
          .then((data) => {
            this.$router.push("/chat/" + data.id);
          });
      } else {
        this.$router.push("/chat/" + chats[0].id);
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