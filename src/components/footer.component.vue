<template>
  <div class="footer-container">
    <b-container fluid class="footer">
      Copyright &copy; —
      <a class="footer-tv-maze" href="https://www.tvmaze.com/api"
        ><strong>TVmaze.com</strong></a
      >
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: #475b59;
  color: #ffff;
}
</style>
