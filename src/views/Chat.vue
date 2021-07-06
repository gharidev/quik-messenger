<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" v-if="user">
        <v-img
          :alt="user.displayName"
          class="shrink mr-2 app-bar-user-pic"
          contain
          :src="require('../assets/profile_placeholder.png')"
          transition="scale-transition"
          width="40"
        />
        <span class="shrink mt-1 text-h6">{{ user.displayName }} </span>
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
    </v-app-bar>
    <v-main class="chat-background primary lighten-4">
      <div class="d-flex flex-column">
        <div class="message-container">
          <!-- <v-list v-if="chatRoom">
          <v-list-group
            v-for="message in chatRoom.messages"
            :key="message.id"
            no-action
            >{{ message.content }}
          </v-list-group>
        </v-list> -->
          <div
            class="chat-container"
            v-on:scroll="onScroll"
            ref="chatContainer"
            :style="{
              height: 'calc((var(--vh, 1vh)*100) - ' + paddingHeight + 'px)',
            }"
          >
            <message :room="chatRoom" :user="user" v-if="chatRoom"></message>
          </div>
        </div>
      </div>
      <div class="chat-input-container">
        <v-col class="d-flex align-center">
          <v-text-field
            type="text"
            placeholder="Type here..."
            outlined
            v-on:keyup.enter="sendMessage"
            v-model="message"
            hide-details="auto"
          ></v-text-field>
          <v-btn
            icon
            class="mx-4"
            color="primary"
            :disabled="!message"
            @click="sendMessage"
          >
            <v-icon>mdi-send</v-icon>
          </v-btn>
          <!-- <v-btn icon class="blue--text emoji-panel" @click="toggleEmojiPanel">
            <v-icon>mdi-emoticon-outline</v-icon>
          </v-btn> -->
        </v-col>
      </div>
    </v-main>
  </div>
</template>
<script>
import { db, Timestamp, FieldValue } from "../db";
import Message from "../components/Messages.vue";
export default {
  data() {
    return {
      message: "",
      chatRoom: null,
      user: null,
      paddingHeight: 120,
    };
  },
  components: {
    Message,
  },
  methods: {
    sendMessage() {
      let message = this.message;
      console.log(this.chatRoom);
      db.collection("chats")
        .doc(this.chatRoom.id)
        .update({
          messages: FieldValue.arrayUnion({
            content: message,
            type: "text",
            userId: this.currentUser.uid,
            created: Timestamp.now(),
          }),
        });
      this.message = "";
    },
    onScroll() {},
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.chatContainer;
        container.scrollTop = container.scrollHeight;
      });
    },
    setCssHeightVar() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
    setChatContainerConstraints() {
      const appBarHeight = document.querySelector(
        ".v-application header"
      ).offsetHeight;
      const bottomBarHeight = document.querySelector(
        ".chat-input-container"
      ).offsetHeight;
      this.paddingHeight = appBarHeight + bottomBarHeight;
    },
    onResize() {
      this.setCssHeightVar();
      this.scrollToBottom();
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  watch: {
    chatRoom: {
      immediate: true,
      handler(val) {
        console.log("Changed chatroom");
        console.log(val);
        this.scrollToBottom();
        if (val) {
          if (this.user && this.user.uid == this.$route.params.id) return;
          this.$bind(
            "user",
            db
              .collection("users")
              .doc(val.users.filter((u) => u != this.currentUser.uid)[0])
          );
        }
      },
    },
    $route(val) {
      console.log("Route Changed", val);
      if (this.chatRoom) this.$unbind("chatRoom");
      this.$bind("chatRoom", db.collection("chats").doc(val.params.id));
    },
  },
  created() {
    this.$bind("chatRoom", db.collection("chats").doc(this.$route.params.id));
  },
  mounted() {
    this.setCssHeightVar();
    this.setChatContainerConstraints();
    window.addEventListener("resize", this.onResize, false);
    document.querySelector("body").style.overflow = "hidden";
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize, false);
    document.querySelector("body").style.overflow = "auto";
  },
};
</script>
<style lang="scss">
.scrollable {
  overflow-y: auto;
  height: 90vh;
}
.chat-background {
  position: fixed;
  width: 100%;
  background: url(../assets/background.svg);
}
.chat-container {
  box-sizing: border-box;
  height: calc(100vh - 10.5rem);
  overflow-y: auto;
  padding: 10px;
  // background-color: #f2f2f2;
  .username {
    font-size: 18px;
    font-weight: bold;
  }
  .content {
    padding: 2px 8px;
    background-color: lightgreen;
    min-width: 10%;
    border-radius: 10px;
    display: inline-block;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12);
    max-width: 50%;
    word-wrap: break-word;
  }
}
.chat-input-container {
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
.message {
  margin-bottom: 3px;
}
.message.own {
  text-align: right;
  .content {
    background-color: lightskyblue;
  }
}
@media (max-width: 480px) {
  .chat-container .content {
    max-width: 60%;
    min-width: 20%;
  }
}
.app-bar-user-pic {
  height: 40px;
  width: 40px;
  border-radius: 40px;
}
</style>