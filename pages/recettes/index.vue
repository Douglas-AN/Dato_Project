<template>
  <v-container>
  <h1>Recettes</h1>
  <ul class="d-flex justify-space-between">
    <li v-for="recipe in recipes.allRecipes" :key="recipe.id">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="align-end text-white"
          height="200"
          :src="recipe.image.url"
          cover
        >
          <v-card-title>{{ recipe?.titre }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">Number 10</v-card-subtitle>

        <v-card-text>
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange"> Share </v-btn>

          <v-btn color="orange">
            <NuxtLink
              :to="{ name: 'recettes-slug', params: { slug: recipe.slug } }"
              >Voir la recette
            </NuxtLink>
          </v-btn>
        </v-card-actions>
      </v-card>
    </li>
  </ul>
  </v-container>
</template>

<script setup>
import recipe from "~~/cms/queries/recipes";

const { data: recipes, pending: recipesPending } = await useLazyAsyncQuery(
  recipe
);
</script>

<style scoped>

li {
  list-style: none;
}

</style>