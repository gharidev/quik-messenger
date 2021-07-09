<template>
  <div class="text-center">
    <div class="welcome-logo">
      <v-img
        alt="Vuetify Logo"
        class="shrink mx-auto"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="100"
      />
    </div>
    <h3 class="v-heading text-h4 my-3 font-weight-bold">
      Sign {{ action == "signin" ? "in" : "up" }} to Quik Messenger
    </h3>
  </div>
</template>
<script>
export default {
  props: ["action"],
};
</script>
<style scoped>
.welcome-logo {
  min-height: 115px;
}
</style>