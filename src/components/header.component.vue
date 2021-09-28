<template>
  <div class="header-container">
    <!-- header main container -->
    <v-app-bar app color="dark" name="app=header" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <!-- tvm image -->
          <v-img
            name="tvm-image"
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/tvm-header-logo.png"
            transition="scale-transition"
            width="100"
          />
        </router-link>
        <v-toolbar-title class="title">Tv Show</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <!-- search input field -->
      <v-text-field
        @keyup.enter="getSearchResults"
        v-model="SearchString"
        class="mt-7"
        solo
        label="Search Show"
      ></v-text-field>
    </v-app-bar>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      SearchString: null,
    };
  },
  computed: {
    ...mapState(["searchedResult"]),
  },
  watch: {
    SearchString() {
      this.SearchString = this.SearchString.replace(/\s/g, " ");
      this.getSearchResults();
    },
  },

  methods: {
    getSearchResults() {
      if (this.SearchString.trim() !== "") {
        this.$router.push("/show/" + this.SearchString);
      }
    },
  },
};
</script>
<style scoped></style>
