<template>
  <div class="searched-show-container col-12">
    <v-toolbar-title class="top-shows-title" align="center"> </v-toolbar-title>
    <!-- content loading loader -->
    <div v-if="contentLoading">
      <div class="loading-gif mt-14" align="center">
        <img class="loaderGIF" src="../assets/loader.gif" alt="image" />
      </div>
    </div>
    <!-- content error -->
    <div class="error-message mt-14" v-if="searchedResult.length == 0">
      <div class="shows-error-message" align="center">
        <h4>Please search with other shows</h4>
      </div>
    </div>
    <!-- content error -->
    <div class="m-5" v-if="contentError">
      <div class="shows-error-message" align="center">
        <h4>Error found, plasae check with TV maze API team</h4>
      </div>
    </div>

    <!-- searched shows container -->
    <div class="search-shows pb-9">
      <div v-if="searchedResult.length > 0">
        <!-- search shows title -->

        <v-toolbar-title class="top-shows-title" align="center"
          >Showing results for:
          <i>
            <span class="searched-query">{{ searchQuery }}</span></i
          >
        </v-toolbar-title>
        <div
          class="search-items justify-space-around d-flex flex-wrap"
          color="dark"
        >
          <v-card
            dard
            id="shows-card"
            class="m-1 dark show-item-card"
            v-for="(item, idx) in searchedResult"
            :key="idx"
            hover
            elevation="20"
          >
            <v-img
              lazy-src="../assets/logo.png"
              @click="getShowDetails(item.show.id)"
              class="white--text align-end show-image-slider"
              :src="item.show.image ? item.show.image.medium : ''"
              aspect-ratio="1"
              width="245"
              :alt="item.name"
            >
            </v-img>
          </v-card>
        </div>
      </div>
    </div>
    <!-- Item Not Found -->
    <div v-if="searchedResult.length < 0">
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
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["searchedResult"]),
  },
  created() {
    this.$watch(
      () => this.$route.params.showData,
      () => {
        (this.searchedString = this.$route.params.showData),
          this.getSearchedShow();
      }
    );
    this.getSearchedShow();
  },
  methods: {
    getShowDetails(id) {
      this.$router.push({ name: "ShowDetails", params: { id } });
    },
    async getSearchedShow() {
      this.searchedString = this.$route.params.showData;
      this.searchQuery = this.searchedString;
      this.contentLoading = true;
      this.contentError = false;
      if (this.searchedString) {
        this.$store.dispatch("getSearchedShows", this.searchedString);
      }
      this.searchedString = "";
      this.contentLoading = false;
    },
  },
};
</script>

<style scoped>
.search-items {
  justify-content: center !important;
}
.show-image-slider {
  width: 213px;
  height: 244px;
}
.v-image__image.v-image__image--cover {
  height: 244px !important;
  width: 176px !important;
}
div#shows-card {
  width: 177px;
}
</style>
