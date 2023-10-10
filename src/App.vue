<template>
  <router-view />
</template>

<script>
import axios from "axios";
import { useUserStore } from "./store/user";
const useStore = useUserStore;
export default {
  mounted() {
    this.getUser();
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
      "Enter",
    ];
    let konamiIndex = 0;

    const keyHandler = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Konami code entered, trigger your easter egg action here
          alert("Super duper secret feature enabled!");
          // You can also navigate to a specific route or perform any other action.
          konamiIndex = 0; // Reset the index for future inputs
        }
      } else {
        konamiIndex = 0; // Reset the index if a wrong key is pressed
      }
    };

    // Add the event listener to the window
    window.addEventListener("keydown", keyHandler);
  },
  methods: {
    async getDriverProfile() {
      axios
        .get(`${import.meta.env.VITE_APP_URI}/driver/check`, {
          withCredentials: true,
        })
        .then((res) => {
          return res.data.driver;
        })
        .catch((err) => {
          if (err.response.data.driver == null) return null;
        });
    },
    async getUser() {
      // get the fucking user from hell, aka the fucking back-end
      axios
        .get(`${import.meta.env.VITE_APP_URI}/auth/whoami`, {
          withCredentials: true,
        })
        .then((res) => {
          const { id, username, avatar, isAdmin } = res.data.user;
          // Set the fucking user in the shitty ass store. Morron.
          useStore.setUser({
            userId: id,
            username,
            avatar,
            profile: this.getDriverProfile(),
            isAdmin,
          });
        })
        .catch((err) => {
          console.log("User is not logged in");
          return console.log(err);
        });
    },
  },
};
</script>
<script setup>
//
</script>
