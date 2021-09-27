<template>
  <div class="show-details-container">
    <!-- show-image-container -->
    <v-row class="col-6 image-position">
      <div class="show-image-container">
        <v-col cols="12" class="show-image">
          <v-img
            class="white--text"
            :src="showDetails.image.original"
            aspect-ratio="1"
          >
          </v-img>
        </v-col>
      </div>
    </v-row>
    <!-- show-details-container -->

    <div class="show-details-container">
      <v-col cols="6">
        <v-card class="pa-2 text-center">
          <h2>{{ showDetails.name }}</h2>
          <h4>{{ showDetails.language }} | {{ showDetails.type }}</h4>
          <h5>
            <span v-for="(gen, idx) in showDetails.genres" :key="idx">
              &nbsp;
              <span v-if="idx != 0">|</span>
              {{ gen }}
            </span>
          </h5>
          <h5>Runtime : {{ showDetails.runtime }} mins</h5>
          <h5 v-if="showDetails.rating.average">
            Rating : {{ showDetails.rating.average }}/10
          </h5>
        </v-card>
      </v-col>
    </div>

    <!-- show-summary-details -->
    <div class="show-summary-container">
      <v-row>
        <v-col class="show-summary">
          <v-card class="pa-2">
            <h3 class="text-center">
              <u>Summary</u>
            </h3>
            <p class="pa-4" v-html="showDetails.summary"></p>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- loading content loader -->
    <div v-if="contentLoading">
      <div class="loading-gif" align="center">
        <img class="loaderGIF" src="/assets/loadingIcon.gif" />
      </div>
    </div>
    <!-- content error -->
    <div v-if="contentError">
      <div class="shows-error-message" align="center">
        <h3>Sorry some error occured!</h3>
        <h4>Please try again after some time</h4>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ShowDetails",
  data() {
    return {
      id: this.$route.params.id,
      contentLoading: false,
      contentError: false,
    };
  },
  computed: {
    ...mapState(["showDetails"]),
  },
  // created() {
  //   this.getShowDetailsbyId(this.id);
  // },
  mounted() {
    if (this.showDetails) {
      this.getShowDetailsbyId(this.id);
    }
  },
  methods: {
    async getShowDetailsbyId(id) {
      this.contentLoading = true;
      this.contentError = false;
      try {
        await this.$store.dispatch("getShowDetailsbyId", id);
      } catch (error) {
        this.contentLoading = false;
        this.contentError = true;
        throw error;
      }
      this.contentLoading = false;
    },
  },
};
</script>
<style scoped>
.image-position {
  float: right;
}
</style>
