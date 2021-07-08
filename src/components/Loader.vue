<template>
  <div class="loader-bg">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>
<script>
export default {
};
</script>
<style>
.loader-bg {
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>