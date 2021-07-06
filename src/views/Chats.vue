<template>
  <v-main>
    <v-container>
      <h1>Chats</h1>
      <p @click="openChat(chat)" v-for="chat in chats" :key="chat.id">
        {{ chat.id + ", " + getUserNameFromId(chat.id) }}
      </p>
      <users :chats="chats"></users>
    </v-container>
  </v-main>
</template>
<script>
import { db } from "../db";
import Users from "../components/Users.vue";
export default {
  data() {
    return {
      chats: null,
      chatUsers: {},
    };
  },
  components: {
    Users,
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  watch: {
    chats(val) {
      const userIdList = val.map((chat) => {
        console.log("Chat", chat);
        return chat.users.filter((u) => u != this.currentUser.uid)[0];
      });
      let chatUsers = {};
      console.log(userIdList);
      if (userIdList.length == 0) return;
      db.collection("users")
        .where("uid", "in", userIdList)
        .get()
        .then((data) => {
          data.docs.forEach((user) => {
            val.forEach((chat) => {
              if (chat.users.includes(user.data().uid))
                chatUsers[chat.id] = user.data();
            });
            this.chatUsers = chatUsers;
            console.log("Chat Users", chatUsers);
          });
        });
    },
  },
  methods: {
    getUserNameFromId(chatId) {
      return this.chatUsers[chatId]?.displayName;
    },
    openChat(chat) {
      this.$router.push("/chat/" + chat.id);
    },
  },
  created() {
    if (!this.chats)
      this.$bind(
        "chats",
        db
          .collection("chats")
          .where("users", "array-contains", this.currentUser.uid)
      );
  },
};
</script>
<style>
</style>