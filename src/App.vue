<template>
  <div @contextmenu="(e) => e.preventDefault()">
    <v-app>
      <router-view></router-view>
      <v-fade-transition>
        <loader v-if="$store.state.authLoading"></loader>
      </v-fade-transition>
    </v-app>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import { loadStyle } from "./utils";
export default {
  name: "App",

  data: () => ({}),
  components: { Loader },
  methods: {
    setCssHeightVar() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
  created() {
    loadStyle(
      `::-webkit-scrollbar-thumb {
  background: ${this.$vuetify.theme.themes.light.primary};
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background: ${this.$vuetify.theme.themes.light.primary}50;
}`,
      "custom-scroll-bar"
    );
  },
  mounted() {
    this.setCssHeightVar();
    window.addEventListener("resize", this.setCssHeightVar, false);
  },
  destroyed() {
    window.removeEventListener("resize", this.setCssHeightVar, false);
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
</style>