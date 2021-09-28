<template>
  <div class="searched-show-container">
    <!-- content loading loader -->
    <div v-if="contentLoading">
      <div class="loading-gif" align="center">
        <img class="loaderGIF" src="../assets/loader.gif" alt="image" />
      </div>
    </div>
    <!-- content error -->
    <div v-if="contentError">
      <div class="shows-error-message" align="center">
        <h3>Sorry some error occured!</h3>
        <h4>Please try again after some time</h4>
      </div>
    </div>

    <!-- searched shows container -->
    <div class="search-shows mt-6">
      <div v-if="searchedResult.length > 0">
        <!-- search shows title -->
        <v-toolbar-title class="top-shows-title mt-16" align="center"
          >Searched Show</v-toolbar-title
        >
        <div
          class="search-items justify-space-around d-flex flex-wrap"
          color="dark"
        >
          <v-card
            dard
            class="m-1 dark"
            v-for="(item, idx) in searchedResult"
            :key="idx"
            @click="getShowDetails(item.show.id)"
            hover
            elevation="20"
            max-height="500px"
            max-width="500px"
          >
            <v-img
              lazy-src="../assets/logo.png"
              class="white--text align-end"
              :src="item.show.image.medium"
              aspect-ratio="1"
              height="350"
              width="270"
              :alt="item.name"
            >
            </v-img>
          </v-card>
        </div>
      </div>
    </div>
    <!-- Item Not Found -->
    <div v-if="searchedResult.length == 0">
      <div class="no-data-found" align="center">
        <h4>Try searching for something else</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SearchedShow",
  data() {
    return {
      searchedString: this.$route.params.showData,
      contentLoading: false,
      contentError: false,
    };
  },
  computed: {
    ...mapState(["searchedResult"]),
  },

  created() {
    this.$watch(
      () => this.$route.params.showData,
      () => {
        this.getSearchedShow();
      }
    );
    this.getSearchedShow();
  },

  // beforeMount() {
  //   this.addparams();
  // },
  methods: {
    // addparams() {
    //   this.searchedString = this.$route.params.showData;
    // },
    getShowDetails(id) {
      this.$router.push({ name: "ShowDetails", params: { id } });
    },
    async getSearchedShow() {
      this.searchedString = this.$route.params.showData;
      this.contentLoading = true;
      this.contentError = false;
      try {
        if (this.searchedString.trim() !== "") {
          await this.$store.dispatch("getSearchedShows", this.searchedString);
        }
      } catch (error) {
        this.contentError = true;
        throw error;
      }
      this.searchedString = "";
      this.contentLoading = false;
    },
  },
};
</script>

<style scoped>
img.loaderGIF {
  width: 14rem;
  margin-top: 6rem;
}
.search-items {
  justify-content: center !important;
}
</style>
