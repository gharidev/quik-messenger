<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row no-gutters class="primary lighten-4" style="height: 100vh">
        <v-col
          cols="12"
          sm="4"
          md="3"
          xl="2"
          class="d-sm-block"
          :class="{ 'd-none': $route.name != 'Chats' }"
        >
          <v-app-bar color="primary" dark elevation="0" tag="div">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
            <v-app-bar-title>Quik Messenger</v-app-bar-title>

            <v-spacer></v-spacer>

            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item @click="$router.push({ name: 'Users' })">
                  <v-list-item-title>New Chat</v-list-item-title>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
          <v-card style="height: 100%" color="transparent">
            <v-list class="pa-0 transparent" rounded>
              <v-list-item-group active-class="border" color="dark">
                <v-list-item
                  v-for="chat in chats"
                  :key="chat.id"
                  @click="openChat(chat)"
                  class="py-1"
                >
                  <v-list-item-avatar>
                    <v-img
                      :alt="`${getUserNameFromId(chat.id)} Avatar`"
                      :src="require('../assets/profile_placeholder.png')"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      getUserNameFromId(chat.id)
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="8"
          md="9"
          xl="10"
          :class="[$route.name == 'Chats' ? 'd-none' : 'd-sm-block']"
        >
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </v-col>
        <v-col
          sm="8"
          md="9"
          xl="10"
          class="d-none d-sm-block"
          v-if="$route.name == 'Chats'"
        >
          <welcome></welcome>
        </v-col>
      </v-row>
      <!-- <h1>Chats</h1>
      <template v-for="chat in chats">
        <p
          @click="openChat(chat)"
          :key="chat.id"
          v-if="chat.messages.length > 0"
        >
          {{ chat.id + ", " + getUserNameFromId(chat.id) }}
        </p>
      </template> -->

      <!-- <users></users> -->
    </v-container>
    <!-- <v-btn fab color="primary" class="new-chat-fab">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn> -->
  </v-main>
</template>
<script>
// import Users from "../components/Users.vue";
import { auth } from "../db";
import { mapGetters, mapState } from "vuex";
import Welcome from "../components/Welcome.vue";
export default {
  data() {
    return {
      selected: 0,
    };
  },
  components: {
    Welcome,
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    ...mapGetters(["chats"]),
    ...mapState(["chatUsers"]),
  },
  methods: {
    getUserNameFromId(chatId) {
      return this.chatUsers[chatId]?.displayName;
    },
    openChat(chat) {
      const params = {
        name: "Chat",
        params: { id: chat.id, data: chat },
      };
      this.$router.push(params);
      // if (this.$route.name == "Chat") {
      //   this.$router.replace(params);
      //   return;
      // }
    },
    async logout() {
      await auth.signOut();
    },
  },
  created() {
    // if (!this.chats)
    //   this.$bind(
    //     "chats",
    //     db
    //       .collection("chats")
    //       .where("users", "array-contains", this.currentUser.uid)
    //       .orderBy("updated")
    //   );
  },
};
</script>
<style>
.new-chat-fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
.chat-list-user-pic {
  height: 40px;
  width: 40px;
  border-radius: 40px;
}
</style>