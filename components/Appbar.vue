<template>
  <v-toolbar app>
    <v-toolbar-title>
      <router-link to="/" style="cursor: pointer">
        <img src="~assets/logo.png" alt="logo" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appLogo: "~assets/logo.png",
      sidebar: false,
      menuItems: [
        { title: "Coin des recettes", path: "/recettes" },
      ],
    };
  },
};
</script>
<style scoped>
img {
  width: 50px;
}
</style>
