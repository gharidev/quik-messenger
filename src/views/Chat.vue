<template>
  <div @contextmenu="onContextMenu">
    <v-app-bar tag="div" elevation="0" class="chat-appbar">
      <div class="d-flex align-center" v-if="user">
        <v-btn icon class="back-button d-sm-none" @click="onBackButton">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-img
          :alt="user.displayName"
          class="shrink mr-2 app-bar-user-pic"
          contain
          :src="require('../assets/profile_placeholder.png')"
          transition="fade-transition"
          width="40"
        />
        <div class="chat-title">
          <p class="mb-0 text-h6">{{ user.displayName }}</p>
          <v-expand-transition>
            <span
              v-if="activityStatus && activityStatus.online != null"
              class="mt-1 text-subtitle-2 grey--text"
              >{{
                activityStatus.online
                  ? "Online"
                  : getLastSeen(activityStatus.last_changed)
              }}</span
            >
          </v-expand-transition>
        </div>
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
    <div class="chat-background">
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
          <messages :room="chatRoom" :user="user" v-if="chatRoom"></messages>
        </div>
      </div>
    </div>
    <div class="chat-input-container">
      <div class="d-flex align-center py-2 px-3">
        <v-text-field
          type="text"
          placeholder="Type here..."
          outlined
          @keyup.enter="sendMessage"
          v-model="message"
          hide-details="auto"
          class="white--text"
          ref="chatInput"
          autocomplete="off"
        ></v-text-field>
        <v-btn fab class="mx-4" :disabled="!message" @click="sendMessage">
          <v-icon>mdi-send</v-icon>
        </v-btn>
        <!-- <v-btn icon class="blue--text emoji-panel" @click="toggleEmojiPanel">
            <v-icon>mdi-emoticon-outline</v-icon>
          </v-btn> -->
      </div>
    </div>
    <context-menu
      :config="contextMenu"
      @visibilityChanged="(v) => (contextMenu.show = v)"
    ></context-menu>
  </div>
</template>
<script>
import { db, Timestamp, FieldValue, rtdb } from "../db";
import Messages from "../components/Chat/Messages.vue";
import ContextMenu from "../components/Chat/ContextMenu.vue";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      message: "",
      paddingHeight: 120,
      contextMenu: {
        show: false,
        x: 0,
        y: 0,
      },
      activityStatus: null,
    };
  },
  components: {
    Messages,
    ContextMenu,
  },
  methods: {
    sendMessage() {
      let message = this.message;
      if (!message) return;
      console.log(this.chatRoom);
      db.collection("chats")
        .doc(this.chatRoom.id)
        .update({
          updated: Timestamp.now(),
          messages: FieldValue.arrayUnion({
            content: message,
            type: "text",
            userId: this.currentUser.uid,
            created: Timestamp.now(),
          }),
        });
      this.message = "";
      this.$nextTick(() => {
        this.$refs.chatInput.focus();
      });
    },
    onScroll() {},
    scrollToBottom(ease = true) {
      this.$nextTick(() => {
        const container = this.$refs.chatContainer;
        if (container.scrollTop == 0) ease = false;
        if (ease)
          this.$vuetify.goTo(".message:last-child", {
            container: this.$refs.chatContainer,
          });
        else {
          container.scrollTop = container.scrollHeight;
        }
      });
    },
    setChatContainerConstraints() {
      const appBarHeight = document.querySelector(".chat-appbar").offsetHeight;
      const bottomBarHeight = document.querySelector(
        ".chat-input-container"
      ).offsetHeight;
      this.paddingHeight = appBarHeight + bottomBarHeight;
    },
    onResize() {
      this.scrollToBottom(false);
    },
    onBackButton() {
      this.$router.back();
    },
    onContextMenu(e) {
      e.preventDefault();
      const menu = this.contextMenu;
      menu.show = false;
      menu.x = e.clientX;
      menu.y = e.clientY;
      this.$nextTick(() => {
        menu.show = true;
      });
    },
    getLastSeen(timestamp) {
      if (!timestamp) return "";
      const lastSeen = moment(new Date(timestamp));
      let lastSeenText = "last seen ";
      console.log(
        moment().startOf("week").diff(lastSeen.clone().startOf("week"), "week")
      );
      if (moment().isSame(lastSeen, "d"))
        return lastSeenText + "today at " + lastSeen.format("hh:mm a");
      if (
        moment().startOf("day").diff(lastSeen.clone().startOf("day"), "day") ==
        1
      )
        return lastSeenText + "yesterday at " + lastSeen.format("hh:mm a");
      if (
        moment()
          .startOf("week")
          .diff(lastSeen.clone().startOf("week"), "week") <= 1
      )
        return (
          lastSeenText +
          lastSeen.format("dddd") +
          " at " +
          lastSeen.format("hh:mm a")
        );
      if (
        moment().startOf("month").diff(lastSeen, "month") > 0 &&
        moment().startOf("year").diff(lastSeen, "year") <= 1
      )
        return lastSeenText + " at " + lastSeen.format("DD MMM");
      else return lastSeenText + " at " + lastSeen.format("DD MMM, YYYY");
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
    user() {
      return this.$store.getters.chatUsers[this.chatId];
    },
    chatId() {
      return this.$route.params.id;
    },
    chatRoom() {
      return this.$store.getters.chats.find((c) => c.id == this.chatId);
    },
  },
  watch: {
    chatRoom: {
      immediate: true,
      handler() {
        this.scrollToBottom();
      },
    },
    user: {
      immediate: true,
      handler(val) {
        if (!val) return;
        this.$rtdbBind("activityStatus", rtdb.ref("status/" + val.uid));
      },
    },
    activityStatus: {
      immediate: true,
      handler: console.log,
    },
  },
  mounted() {
    this.setChatContainerConstraints();
    window.addEventListener("resize", this.onResize, false);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize, false);
  },
};
</script>
<style lang="scss">
@media (max-width: 600px) {
  .chat-appbar .v-toolbar__content {
    padding-left: 0;
    .back-button {
      width: 30px !important;
      height: 30px !important;
    }
  }
}
.chat-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100vw - 78px);
  p,
  span {
    line-height: 1 !important;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.scrollable {
  overflow-y: auto;
  height: 90vh;
}
.chat-background {
  position: relative;
  width: 100%;
  background: url(../assets/background.svg) center;
}
.chat-container {
  box-sizing: border-box;
  height: calc(100vh - 10.5rem);
  overflow-y: auto;
  padding: 10px;
  .username {
    font-size: 18px;
    font-weight: bold;
  }
  .content {
    padding: 2px 8px;
    min-width: 10%;
    border-radius: 10px;
    display: inline-block;
    max-width: 50%;
    word-wrap: break-word;
  }
  .message {
    margin-bottom: 3px;
  }
  .message.own {
    text-align: right;
  }
}
.chat-input-container {
  // background-color: white;
  position: relative;
  width: 100%;
  bottom: 0;
  left: 0;
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