<template>
  <v-container>
    <v-row>
      <v-app-bar>
        <router-link to="/">
          <div class="d-flex align-center">
            <v-img
              alt="Asthriona Logo"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="100"
              src="https://cdn.asthriona.com/i/2023/09/Asthriona%202023%20Logo%20Light.png"
              width="300"
            />
          </div>
        </router-link>
        <v-spacer />
        <router-link to="/">
          <v-btn>Home</v-btn>
        </router-link>
        <v-spacer /><v-spacer />
      </v-app-bar>
    </v-row>
  </v-container>
</template>
