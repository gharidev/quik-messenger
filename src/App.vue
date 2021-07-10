<template>
  <div
    @contextmenu="(e) => e.preventDefault()">
    <v-app
      v-touch="{
        start: onInteraction,
      }"
    >
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
    onInteraction(e) {
      if (e && e?.type == "touchstart") {
        this.$store.state.isTouch = true;
      }
    },
  },
  created() {
    const theme = this.$vuetify.theme;
    const scrollColor = theme.isDark
      ? theme.themes.dark.primary
      : theme.themes.light.primary;
    loadStyle(
      `::-webkit-scrollbar-thumb {
  background: ${scrollColor};
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background: ${scrollColor}50;
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
.height-100 {
  height: calc(var(--vh, 1vh) * 100);
}
.min-height-100 {
  min-height: calc(var(--vh, 1vh) * 100);
}
.fixed-appbar-full-body {
  min-height: calc((var(--vh, 1vh) * 100) - 64px);
}
body {
  -webkit-touch-callout: none !important;
}
* {
  user-select: none !important;
  -webkit-user-select: none !important;
}
</style>