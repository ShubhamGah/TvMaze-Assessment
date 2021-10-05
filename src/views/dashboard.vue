<template>
  <div class="dashboard-container">
    <AllShows :allShowsDetails="allShows" />
  </div>
</template>

<script>
import AllShows from "../components/allShows.component.vue";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    AllShows,
  },
  computed: {
    ...mapState(["allShows"]),
  },
  created() {
    this.getAllShows();
  },
  methods: {
    async getAllShows() {
      this.$store.dispatch("getAllShows");
    },
  },
};
</script>
