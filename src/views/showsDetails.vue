<template>
  <div class="show-details-main-container">
    <div class="show-details" v-if="showDetails.id">
      <!-- show-image-container -->
      <div class="show-image-container col-md-12">
        <div v-if="showDetails.image">
          <v-col class="show-image col-md-6 pt-6">
            <v-img
              class="white--text show-details-image col-md-6"
              :src="showDetails.image.medium"
              aspect-ratio="1"
            >
            </v-img>
          </v-col>
        </div>
      </div>
      <!-- show-short-details-container -->
      <div class="show-details-container col-md-6">
        <div class="show-details">
          <v-card class="text-center">
            <div class="show-details-name">
              <h3>
                <i>{{ showDetails.name }}</i>
              </h3>
            </div>
            <div class="show-lang-type">
              <span>{{ showDetails.language }} | {{ showDetails.type }}</span>
            </div>
            <div class="show-gern">
              <span>
                <span v-for="(gen, idx) in showDetails.genres" :key="idx">
                  &nbsp;
                  <span v-if="idx != 0">|</span>
                  {{ gen }}
                </span>
              </span>
            </div>
            <div class="run-time">
              <span> Runtime : {{ showDetails.runtime }} mins</span>
            </div>
            <div class="show-rating">
              <span v-if="showDetails.rating">
                Rating : {{ showDetails.rating.average }}/10
              </span>
            </div>
            <hr />
            <div>
              <h3>
                <i>Summary</i>
              </h3>
              <p class="pa-4" v-html="showDetails.summary"></p>
            </div>
            <!-- show-cast-container -->
            <div
              class="show-cast-container col-12 pb-8"
              v-if="getCastDetaiils.length > 0"
            >
              <v-toolbar-title class="cast-title" align="center"
                >Cast</v-toolbar-title
              >
              <hr />
              <div class="search-items d-flex flex-wrap" color="dark">
                <v-card
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
                    :title="item.person.name"
                  >
                  </v-img>
                </v-card>
              </div>
            </div>
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
    <div class="show-data-not-found" v-else>
      <h3>No data available</h3>
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
      if (id) {
        this.$store.dispatch("getShowDetailsbyId", id);
      }
      this.contentLoading = false;
    },

    async getCastDetails(id) {
      this.contentLoading = true;
      this.contentError = false;
      if (id) {
        this.$store.dispatch("getCastDetails", id);
      }
      this.contentLoading = false;
    },
  },
};
</script>
<style scoped>
.show-details-main-container {
  display: inline-block;
}
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
  height: 121px;
  width: 121px;
}
.v-image.show-details-image {
  width: 277px;
  height: 393px;
}
</style>
