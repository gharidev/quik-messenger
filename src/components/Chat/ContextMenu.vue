<template>
  <v-menu
    v-model="showMenu"
    :position-x="config.x"
    :position-y="config.y"
    absolute
    offset-y
  >
    <v-list dark>
      <v-list-item @click="goBack">
        <v-list-item-title>Go Back</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  props: ["config"],
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  computed: {
    showMenu: {
      get() {
        return this.config.show;
      },
      set(value) {
        this.$emit("visibilityChanged", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  .v-list-item {
    min-height: 30px;
  }
  min-width: 200px;
}
</style>