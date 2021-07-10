<template>
  <div>
    <!-- <div
      class="message"
      v-for="(message, index) in messages"
      v-bind:key="message.id"
      :class="{ own: message.userId == currentUser.uid }"
    >
      <div class="text-uppercase text-center">
        <v-chip
          v-if="
            index > 0 &&
            !isFromSameDay(messages[index - 1].created, message.created)
          "
          >{{ convertTime(message.created, true) }}</v-chip
        >
        <v-chip v-if="index == 0"
          >{{ convertTime(message.created, true) }}
        </v-chip>
      </div>
      <template v-if="!room.personal">
        <div
          class="username"
          v-if="index > 0 && messages[index - 1].userId != message.userId"
        >
          {{ getUsernameFromMessage(message) }}
        </div>
        <div class="username" v-if="index == 0">
          {{ getUsernameFromMessage(message) }}
        </div>
      </template>
      <div style="margin-top: 5px"></div>
      <v-card elevation="2" class="content">
        {{ message.content }}
        <div class="text-caption blue-grey--text text-right">
          {{ convertTime(message.created) }}
        </div>
      </v-card>
    </div> -->
    <v-list class="message-list">
      <v-list-item-group v-model="selected" multiple>
        <template v-for="(message, index) in messages">
          <div
            class="text-uppercase text-center"
            :key="message.created + index + 'date-chip'"
          >
            <v-chip
              v-if="
                index > 0 &&
                !isFromSameDay(messages[index - 1].created, message.created)
              "
              >{{ convertTime(message.created, true) }}</v-chip
            >
            <v-chip v-if="index == 0"
              >{{ convertTime(message.created, true) }}
            </v-chip>
          </div>
          <div
            :key="message.created + index"
            v-long-press="500"
            @long-press-start="toggleMessageSelection(message)"
          >
            <v-list-item
              class="message"
              :class="{ own: message.userId == currentUser.uid }"
              :disabled="selected.isEmpty"
              :value="message"
            >
              <template v-if="!room.personal">
                <div
                  class="username"
                  v-if="
                    index > 0 && messages[index - 1].userId != message.userId
                  "
                >
                  {{ getUsernameFromMessage(message) }}
                </div>
                <div class="username" v-if="index == 0">
                  {{ getUsernameFromMessage(message) }}
                </div>
              </template>
              <div style="margin-top: 5px"></div>
              <v-card elevation="2" class="content">
                {{ message.content }}
                <div class="text-caption blue-grey--text text-right">
                  {{ convertTime(message.created) }}
                </div>
              </v-card>
            </v-list-item>
          </div>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import moment from "moment";
import { VChip } from "vuetify/lib";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selected: [],
    };
  },
  props: ["room", "user", "selectedMessages"],
  components: {
    // 'chat-image': Image
    VChip,
  },
  computed: {
    username() {
      return this.$store.getters.user.username;
    },
    messages() {
      return this.room.messages;
    },
    ...mapGetters(["currentUser"]),
  },
  watch: {
    room(newVal, oldVal) {
      if (newVal?.id == oldVal?.id) return;
      this.selected = [];
    },
    selected(val) {
      if (val == this.selectedMessages) return;
      this.$emit("onSelectedMessages", val);
    },
    selectedMessages(val) {
      this.selected = val;
    },
  },
  methods: {
    isFromSameDay(previous, current) {
      return moment(new Date(current * 1000)).isSame(
        moment(new Date(previous * 1000)).startOf("day"),
        "d"
      );
    },
    toggleMessageSelection(message) {
      if (!this.selected.isEmpty) return;
      if (this.selected.includes(message)) {
        this.selected = this.selected.filter((s) => s != message);
      } else {
        this.selected.push(message);
      }
    },
    imageLoad() {
      // this.$emit('imageLoad')
    },
    convertTime(time, _forChip = false) {
      const _time = new Date(time.seconds * 1000);
      // const textTime = moment(_time);
      // const today = moment().startOf('day');
      if (_forChip) return moment(_time).format("DD MMMM YYYY");
      else return moment(_time).format("hh:mm A");
    },
    getUsernameFromMessage(message) {
      const userId = message.userId;
      const currentUser = this.getters.currentUser;
      if (userId == currentUser.uid) {
        return currentUser.displayName;
      } else {
        return this.user?.displayName;
      }
    },
  },
  created() {},
};
</script>

<style lang="scss">
span.emoji {
  font-size: 20px;
  vertical-align: middle;
  line-height: 2;
}
.chat-container {
  box-sizing: border-box;
  height: calc(100vh - 10.5rem);
  overflow-y: auto;
  padding: 10px 0;
  .username {
    font-size: 18px;
    font-weight: bold;
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
.v-list.message-list {
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  .message {
    padding: 0;
    margin-bottom: 3px;
    padding: 0 10px;
  }
  .message.own {
    text-align: right;
    justify-content: flex-end;
  }
  .content {
    padding: 2px 8px;
    min-width: 10%;
    border-radius: 10px;
    display: inline-block;
    max-width: 50%;
    word-wrap: break-word;
  }
  .v-list-item--active .content {
    opacity: 0.75;
  }
}
</style>