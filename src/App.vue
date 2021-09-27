<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from "../src/components/header.component.vue";
import Footer from "../src/components/footer.component.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
