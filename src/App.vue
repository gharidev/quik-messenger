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
html {
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
  /* overflow-y: hidden; */
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(90, 90, 90);
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}
</style>