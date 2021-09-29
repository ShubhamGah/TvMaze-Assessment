<template>
  <div class="searched-show-container m-4">
    <!-- content loading loader -->
    <div v-if="contentLoading">
      <div class="loading-gif" align="center">
        <img class="loaderGIF" src="../assets/loader.gif" alt="image" />
      </div>
    </div>
    <!-- content error -->
    <div class="m-5" v-if="searchedResult.length == 0">
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
    <div class="search-shows mt-6 pb-9">
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
            id="shows-card"
            class="m-1 dark show-item-card"
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
  margin-top: 6rem;
}
.search-items {
  justify-content: center !important;
}
</style>
