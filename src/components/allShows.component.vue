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
        <v-sheet tile color="dark" class="mx-auto mt-16">
          <v-toolbar-title class="top-shows-title" align="center"
            >Top Five Show</v-toolbar-title
          >
          <v-slide-group class="pa-4 images-slide" center-active show-arrows>
            <v-slide-item v-for="(show, idx) in getTopShows" :key="idx">
              <v-card
                class="m-1 zoom image-card"
                id="top-images"
                hover
                elevation="20"
                max-height="500px"
                max-width="500px"
              >
                <v-img
                  @click="getShowDetails(show.id)"
                  lazy-src="../assets/logo.png"
                  :src="show.image.medium"
                  class="white--text align-end show-image"
                  aspect-ratio="1"
                  height="350"
                  width="270"
                  :alt="show.name"
                >
                </v-img>
                <v-card-text
                  ><b>{{ show.name }}</b></v-card-text
                >
                <v-card-text>rating-{{ show.rating.average }} /10</v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
    <!-- comedy show container -->
    <div class="comedy-show-container">
      <div v-if="getComedyShows.length > 0">
        <v-sheet tile color="dark" class="mx-auto mt-4">
          <v-toolbar-title class="comedy-show-title" align="center"
            >Comedy Show</v-toolbar-title
          >
          <v-slide-group class="pa-4" center-active show-arrows>
            <v-slide-item v-for="(show, idx) in getComedyShows" :key="idx">
              <v-card
                class="m-1 zoom cardImage"
                @click="getShowDetails(show.id)"
                hover
                elevation="20"
                max-height="500px"
                max-width="500px"
              >
                <v-img
                  lazy-src="../assets/logo.png"
                  :src="show.image.medium"
                  class="white--text align-end"
                  aspect-ratio="1"
                  height="350"
                  width="270"
                  :alt="show.name"
                >
                </v-img>
                <v-card-text
                  ><b>{{ show.name }}</b></v-card-text
                >
                <v-card-text>rating-{{ show.rating.average }} /10</v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
    <!-- Science Fiction show container -->
    <div class="science-fiction-show-container">
      <div v-if="getScienceFictionshows.length > 0">
        <v-sheet tile color="dark" class="mx-auto mt-4">
          <v-toolbar-title class="science-fictions-show-title" align="center"
            >Science Fiction Show</v-toolbar-title
          >
          <v-slide-group class="pa-4" center-active show-arrows>
            <v-slide-item
              v-for="(show, idx) in getScienceFictionshows"
              :key="idx"
            >
              <v-card
                class="m-1 zoom"
                @click="getShowDetails(show.id)"
                hover
                elevation="20"
                max-height="500px"
                max-width="500px"
              >
                <v-img
                  lazy-src="../assets/logo.png"
                  :src="show.image.medium"
                  class="white--text align-end"
                  aspect-ratio="1"
                  height="350"
                  width="270"
                  :alt="show.name"
                >
                </v-img>
                <v-card-text
                  ><b>{{ show.name }}</b></v-card-text
                >
                <v-card-text>rating-{{ show.rating.average }} / 10</v-card-text>
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
      this.contentLoading = true;
      this.contentError = false;
      try {
        this.$router.push({ name: "ShowDetails", params: { id } });
      } catch (error) {
        this.contentError = true;
        throw error;
      }
      this.contentLoading = false;
    },
  },
};
</script>
<style scoped></style>
