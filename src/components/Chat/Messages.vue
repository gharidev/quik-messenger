<template>
  <div>
    <div
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
      <!-- <div class="content primary white--text">
        <div>
          {{ message.content }}
        </div>
        <div class="text-caption blue-grey--text text-right">
          {{ convertTime(message.created) }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { VChip } from "vuetify/lib";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["room", "user"],
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
  methods: {
    isFromSameDay(previous, current) {
      return moment(new Date(current * 1000)).isSame(
        moment(new Date(previous * 1000)).startOf("day"),
        "d"
      );
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

<style>
span.emoji {
  font-size: 20px;
  vertical-align: middle;
  line-height: 2;
}
</style>