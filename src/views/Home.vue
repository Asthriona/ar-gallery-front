<template>
  <div class="hero">
    <v-container class="fill-height fill-width">
      <v-responsive class="align-center text-center fill-height">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Asthriona Racing</h1>
        <div class="text-h5 font-weight-bold mb-n1">Photo Gallery</div>

        <div class="py-14" />
        <!-- More content to be added in here after the second season! -->
        <div class="soon" style="display: none">
          More stuff will be added here after the first event of next season!
        </div>
      </v-responsive>
    </v-container>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12"><h1>Race Logs:</h1></v-col>
      <v-col cols="4" v-for="race in races" :key="race.name">
        <v-card class="mr-4 ml-4 mx-auto">
          <v-img :src="race.images[0]"></v-img>
          <v-card-title>{{ race.title }}</v-card-title>
          <v-card-actions>
            <router-link :to="`/race/${race.name}`">
              <v-btn>View Races</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "home-view",
  data() {
    return {
      races: [],
    };
  },
  mounted() {
    this.getRaces();
  },
  methods: {
    getRaces() {
      axios.get("http://localhost:3000/api/race").then((res) => {
        console.log(res.data.races);
        this.races = res.data.races;
      });
    },
  },
};
</script>
<style scoped>
.hero {
  height: 100vh;
  background-image: url(https://cdn.asthriona.com/i/2023/09/20969916530404174.jpg);
  background-size: cover;
  background-attachment: fixed;
}
</style>
