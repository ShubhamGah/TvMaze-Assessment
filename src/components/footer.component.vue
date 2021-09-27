<template>
  <div class="footer-container">
    <b-container fluid class="footer">
      Copyright &copy; —
      <a href="https://www.tvmaze.com/api"><strong>TVmaze.com</strong></a>
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
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px; /* Height of the footer */
  background: #475b59;
  color: #ffff;
}
</style>
