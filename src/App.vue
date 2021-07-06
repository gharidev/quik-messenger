<template>
  <div>
    <router-view></router-view>
    <loader v-if="$store.state.authLoading"></loader>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
export default {
  name: "App",

  data: () => ({}),
  components: { Loader },
  methods: {
    loadStyle(css) {
      var style =
        document.querySelector('style[id="lastinbody"]') ||
        document.createElement("style");
      style.id = "lastinbody";
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.querySelector("body").appendChild(style);
    },
  },
  created() {
    console.log(this.$vuetify.theme.themes.light.primary);
    this.loadStyle(
      `::-webkit-scrollbar-thumb {
        background: ${this.$vuetify.theme.themes.light.primary};
        border-radius: 10px;
      }`
    );
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
  opacity: 0.5;
}
/* ::-webkit-scrollbar-track {
  background: transparent;
} */
/* ::-webkit-scrollbar-thumb {
  background: var(--primary);
} */
</style>