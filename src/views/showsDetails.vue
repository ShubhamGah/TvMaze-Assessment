<template>
  <div class="show-details-container">
    <!-- show-image-container -->
    <div class="show-image-container col-md-12">
      <v-col class="show-image col-md-6">
        <v-img
          class="white--text show-image col-md-12"
          :src="showDetails.image.original"
          aspect-ratio="1"
        >
        </v-img>
      </v-col>
    </div>
    <!-- show-details-container -->
    <div class="show-details-container col-md-6">
      <div class="show-details">
        <v-card class="text-center">
          <h3>{{ showDetails.name }}</h3>
          <h5>{{ showDetails.language }} | {{ showDetails.type }}</h5>
          <h5>
            <span v-for="(gen, idx) in showDetails.genres" :key="idx">
              &nbsp;
              <span v-if="idx != 0">|</span>
              {{ gen }}
            </span>
          </h5>
          <h5>Runtime : {{ showDetails.runtime }} mins</h5>
          <h5 v-if="showDetails.rating">
            Rating : {{ showDetails.rating.average }}/10
          </h5>
          <h3 class="text">
            <u>Summary</u>
          </h3>
          <p class="pa-4" v-html="showDetails.summary"></p>
        </v-card>
      </div>
    </div>

    <!-- show-cast-container -->
    <div
      class="show-cast-container col-12 pb-8"
      v-if="getCastDetaiils.length > 0"
    >
      <v-toolbar-title class="cast-title" align="center">Cast</v-toolbar-title>
      <hr />
      <div
        class="search-items justify-space-around d-flex flex-wrap"
        color="dark"
      >
        <v-card
          dard
          class="m-1 cast-images-card"
          v-for="(item, idx) in getCastDetaiils"
          :key="idx"
          elevation="20"
        >
          <v-img
            lazy-src="../assets/logo.png"
            class="white--text align-end cast-persons-images"
            :src="item.person.image.medium"
            aspect-ratio="1"
            :alt="item.person.name"
          >
          </v-img>
          <p class="text-capitalize">{{ item.person.name }}</p>
        </v-card>
      </div>
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
import { mapState, mapGetters } from "vuex";

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
    ...mapGetters(["getCastDetaiils"]),
  },
  mounted() {
    if (this.showDetails) {
      this.getShowDetailsbyId(this.id);
      this.getCastDetails(this.id);
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
    async getCastDetails(id) {
      this.contentLoading = true;
      this.contentError = false;
      try {
        await this.$store.dispatch("getCastDetails", id);
      } catch (error) {
        this.contentLoading = false;
        this.contentError = true;
        throw error.message;
      }
      this.contentLoading = false;
    },
  },
};
</script>
<style scoped>
.show-cast-container.col-12 {
  float: left;
}

.show-image {
  float: left;
}
.show-details-container {
  float: right;
}
.show-image-container.mt-16 {
  display: inline-block;
}
.cast-images-card {
  height: 14rem;
}
</style>
