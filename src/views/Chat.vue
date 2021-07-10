<template>
  <div @contextmenu="onContextMenu">
    <v-app-bar tag="div" elevation="0" class="chat-appbar">
      <div class="d-flex align-center flex-grow-1" v-if="user">
        <v-btn icon class="back-button d-sm-none" @click="onBackButton">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <template v-if="selectedMessages.isEmpty">
          <v-img
            :alt="user.displayName"
            class="shrink mr-2 app-bar-user-pic"
            contain
            :src="require('../assets/profile_placeholder.png')"
            transition="fade-transition"
            width="40"
          />
          <div class="chat-title" :key="chatRoom.id + 'chat-title'">
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
          <v-spacer></v-spacer>
          <v-menu left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <delete-chat-dialog
                :chat="chatRoom"
                :user="user"
              ></delete-chat-dialog>
            </v-list>
          </v-menu>
        </template>
        <template v-else>
          <v-btn icon @click="selectedMessages = []"
            ><v-icon>mdi-close</v-icon></v-btn
          >
          <h6 class="mb-0 text-h6">{{ selectedMessages.length }}</h6>
          <v-spacer></v-spacer>
          <v-btn icon @click="copyMessage" v-if="selectedMessages.length == 1">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
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
          <messages
            :room="chatRoom"
            :user="user"
            :selectedMessages="selectedMessages"
            v-if="chatRoom"
            @onSelectedMessages="(val) => (selectedMessages = val)"
          ></messages>
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
import { isMobile } from "../utils";
import DeleteChatDialog from "../components/Chat/DeleteChatDialog.vue";
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
      selectedMessages: [],
    };
  },
  components: {
    Messages,
    ContextMenu,
    DeleteChatDialog,
  },
  methods: {
    sendMessage() {
      let message = this.message;
      if (!message) return;
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
    copyMessage() {
      const message = this.selectedMessages[0];
      this.$copyText(message.content).then(() => {
        this.selectedMessages = [];
      });
    },
    scrollToBottom(ease = true) {
      this.$nextTick(() => {
        const container = this.$refs.chatContainer;
        if (container.scrollTop == 0) ease = false;
        if (ease)
          this.$vuetify.goTo(
            document.querySelectorAll(
              ".v-list.message-list .v-list-item-group div.message"
            ).last,
            {
              container: this.$refs.chatContainer,
            }
          );
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
      if (isMobile()) return;
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
        if (this.$store.getters.chats.find((c) => c.id == this.chatId) == null)
          this.$router.replace({ name: "Chats" });
      },
    },
    user: {
      immediate: true,
      handler(val) {
        if (!val) return;
        this.$rtdbBind("activityStatus", rtdb.ref("status/" + val.uid));
      },
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
.chat-background {
  position: relative;
  width: 100%;
  background: url(../assets/background.svg) center;
}
.app-bar-user-pic {
  height: 40px;
  width: 40px;
  border-radius: 40px;
}
</style>