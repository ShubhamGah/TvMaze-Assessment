<template>
  <div class="shows-container">
    <!-- content loading loader -->
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
    <!-- top shows container -->
    <div class="top-show-container">
      <div v-if="getTopShows.length > 0">
        <v-sheet tile color="dark" class="mx-auto">
          <v-toolbar-title class="top-shows-title" align="center"
            >Top Five</v-toolbar-title
          >
          <v-slide-group class="images-slide" center-active show-arrows>
            <v-slide-item
              class="image-slide-items"
              v-for="(show, idx) in getTopShows"
              :key="idx"
            >
              <v-card
                class="m-1 image-card"
                id="top-images"
                hover
                elevation="20"
              >
                <v-img
                  @click="getShowDetails(show.id)"
                  lazy-src="../assets/logo.png"
                  :src="show.image.medium"
                  class="white--text align-end show-image-slider"
                  aspect-ratio="1"
                  :alt="show.name"
                >
                </v-img>
                <v-card-text class="show-name"
                  ><b>{{ show.name }}</b></v-card-text
                >
                <v-card-text class="show-rating"
                  >rating-{{ show.rating.average }} /10</v-card-text
                >
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
    <!-- comedy show container -->
    <div class="comedy-show-container">
      <div v-if="getComedyShows.length > 0">
        <v-sheet tile color="dark" class="mx-auto">
          <v-toolbar-title class="comedy-show-title" align="center"
            >Comedy</v-toolbar-title
          >
          <v-slide-group class="images-slide" center-active show-arrows>
            <v-slide-item v-for="(show, idx) in getComedyShows" :key="idx">
              <v-card
                class="m-1 zoom cardImage"
                @click="getShowDetails(show.id)"
                hover
                elevation="20"
              >
                <v-img
                  lazy-src="../assets/logo.png"
                  :src="show.image.medium"
                  class="white--text align-end show-image-slider"
                  aspect-ratio="1"
                  :alt="show.name"
                >
                </v-img>
                <v-card-text class="show-name"
                  ><b>{{ show.name }}</b></v-card-text
                >
                <v-card-text class="show-rating">
                  rating-{{ show.rating.average }} /10</v-card-text
                >
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
    <!-- Science Fiction show container -->
    <div class="science-fiction-show-container">
      <div v-if="getScienceFictionshows.length > 0">
        <v-sheet tile color="dark" class="mx-auto">
          <v-toolbar-title class="science-fictions-show-title" align="center"
            >Science Fiction
          </v-toolbar-title>
          <v-slide-group class="images-slide pb-9" center-active show-arrows>
            <v-slide-item
              v-for="(show, idx) in getScienceFictionshows"
              :key="idx"
            >
              <v-card
                class="m-1 zoom"
                @click="getShowDetails(show.id)"
                hover
                elevation="20"
              >
                <v-img
                  lazy-src="../assets/logo.png"
                  :src="show.image.medium"
                  class="white--text align-end show-image-slider"
                  aspect-ratio="1"
                  :alt="show.name"
                >
                </v-img>
                <v-card-text class="show-name"
                  ><b>{{ show.name }}</b></v-card-text
                >
                <v-card-text class="show-rating"
                  >rating-{{ show.rating.average }} / 10</v-card-text
                >
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "AllShows",
  props: ["allShowsDetails"],
  data() {
    return {
      contentLoading: false,
      contentError: false,
      rating: null,
    };
  },
  computed: {
    ...mapGetters(["getTopShows", "getComedyShows", "getScienceFictionshows"]),
  },
  methods: {
    getShowDetails(id) {
      this.$router.push({ name: "ShowDetails", params: { id } });
    },
  },
};
</script>
<style scoped>
.show-rating {
  padding: 1px;
  padding-left: 4rem;
}
.show-name {
  padding: 1px;
  padding-left: 4rem;
}
.show-image-slider {
  width: 245px;
}
</style>
