<template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item v-bind="attrs" v-on="on">
        <v-list-item-title>Delete Chat</v-list-item-title>
      </v-list-item>
    </template>

    <v-card>
      <v-card-title class="text-subtitle-1">
        Delete chat with "{{ user.displayName }}"?
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> CANCEL </v-btn>

        <v-btn
          color="primary"
          text
          :loading="loading"
          :disabled="loading"
          @click="deleteChat"
        >
          DELETE
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["chat", "user"],
  data() {
    return {
      dialog: false,
      loading: false,
    };
  },
  methods: {
    async deleteChat() {
      this.loading = true;
      await this.$store.dispatch("deleteChat", this.chat);
      this.loading = false;
    },
  },
};
</script>