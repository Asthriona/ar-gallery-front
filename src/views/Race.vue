<template>
  <v-img :src="race.images[0]" max-height="250" cover></v-img>
  <v-container class="align-center text-center">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h2 font-weight-bold">{{ race.title }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> Race information: </v-col>
      <v-col cols="12">
        <h2>
            Race Winner: <v-avatar size="64">
            <v-img :src="race.winner.image" cover></v-img>
          </v-avatar>
          {{ `${race.winner.team} - ` || "" }}
          {{ race.winner.name || "" }} #{{ race.winner.carNbr || "" }}
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="(image, index) in race.images" :key="index">
        <v-img :src="image" @click="openFullScreenPreview(index)" cover></v-img>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog
    v-model="showPreview"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon @click="closeFullScreenPreview">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="navigate(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon @click="navigate(1)">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-toolbar>
      <v-img :src="currentImage" contain></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  name: "race-view",
  data() {
    return {
      raceCode: this.$route.params.raceCode,
      race: {
        images: [], // Initialize an empty array for images
        winner: {},
      },
      showPreview: false,
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.race.images[this.currentImageIndex]; // Provide a default value
    },
  },
  mounted() {
    this.getRace();
  },
  methods: {
    getRace() {
      axios
        .get(`http://localhost:3000/api/race/${this.raceCode}`)
        .then((res) => {
          this.race = res.data.race;
        });
    },
    openFullScreenPreview(index) {
      console.log(index);
      this.currentImageIndex = index;
      this.showPreview = true;
    },
    closeFullScreenPreview() {
      this.showPreview = false;
    },
    navigate(direction) {
      // Update the current image index based on the navigation direction
      this.currentImageIndex += direction;

      // Ensure the index stays within the bounds of the images array
      if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.race.images.length - 1;
      } else if (this.currentImageIndex >= this.race.images.length) {
        this.currentImageIndex = 0;
      }
    },
  },
};
</script>
