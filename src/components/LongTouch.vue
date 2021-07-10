<template>
  <v-sheet
    class="no-style"
    v-touch="{
      move: onTouchMove,
      start: onTouchStart,
      end: onTouchEnd,
    }"
  >
    <slot></slot>
  </v-sheet>
</template>
<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      touchTimer: null,
      position: {
        startX: null,
        startY: null,
        moveX: null,
        moveY: null,
      },
    };
  },
  methods: {
    onTouchStart(e) {
      const touches = e.touches[0];
      this.position.startX = this.position.moveX = touches.clientX;
      this.position.startY = this.position.moveY = touches.clientY;
      this.touchTimer = setTimeout(this.onLongTouch, this.duration);
    },
    onTouchMove(e) {
      const touches = e.touches[0];
      this.position.moveX = touches.clientX;
      this.position.moveY = touches.clientY;
    },
    onTouchEnd() {
      if (this.isSameOffset()) this.$emit("long-press-end");
      this.position.startX =
        this.position.startY =
        this.position.moveX =
        this.position.moveY =
          null;
      if (this.touchTimer) clearTimeout(this.touchTimer);
    },
    onLongTouch() {
      if (this.isSameOffset()) this.$emit("long-press-start");
    },
    isSameOffset() {
      return (
        this.position.startX == this.position.moveX &&
        this.position.startY == this.position.moveY
      );
    },
  },
};
</script>
<style scoped>
.no-style {
  all: unset;
}
</style>