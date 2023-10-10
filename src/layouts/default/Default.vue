<template>
  <v-app>
    <TheNavBar />
    <default-view />
    <TheFooter />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import TheNavBar from '@/components/TheNavBar.vue';
  import TheFooter from '@/components/TheFooter.vue';
</script>

<script>
  export default {
     name: "default-Layout"
  }
</script>