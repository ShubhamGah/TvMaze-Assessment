<template>
  <div class="header-container">
    <div>
      <b-navbar toggleable="lg" type="light" variant="info">
        <div class="d-flex align-center">
          <router-link to="/">
            <!-- tvm image -->
            <v-img
              name="tvm-image"
              alt="Vuetify Logo"
              class="shrink mr-2 logo-img"
              contain
              src="../assets/tvm-header-logo.png"
            />
          </router-link>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form class="header-input-form">
              <b-nav-form>
                <b-form-input
                  v-model="SearchString"
                  class="mr-sm-2 search-input"
                  placeholder="Search"
                ></b-form-input>
                <b-button
                  :disabled="!SearchString"
                  @click="getSearchResults()"
                  variant="outline-success"
                  class="my-2 my-sm-0 search-button-btn"
                  type="submit"
                  >Search</b-button
                >
              </b-nav-form>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
  mounted() {
    this.getSearchResults();
  },
  methods: {
    getSearchResults() {
      if (this.SearchString.trim() !== "") {
        this.$router.push("/show/" + this.SearchString);
      }
      this.SearchString = "";
    },
  },
};
</script>
<style scoped>
.logo-img {
  width: 8rem;
  margin-left: 1rem;
}
.header-input-form .form-inline {
  display: inline-flex !important;
}
.header-input-form {
  margin: 10px;
}
</style>
