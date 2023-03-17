<template>
  <v-container>
    <h1>Recettes</h1>
    <ul v-if="!recipesPending" class="d-flex justify-space-between">
      <li v-for="recipe in recipes.allRecipes" :key="recipe.id">
        <v-card class="mx-auto" max-width="400">
          <v-img class="align-end text-white" :src="recipe.image.url" cover>
            <v-card-title>{{ recipe?.titre }}</v-card-title>
          </v-img>

          <v-card-text>
            <div>{{recipe?.content}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange"> Share </v-btn>

            <v-btn
              color="orange"
              :to="{ name: 'recettes-slug', params: { slug: recipe.slug } }"
            >
              Voir la recette
            </v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
  </v-container>
</template>

<script setup>
import AllRecipes from "~~/cms/queries/recipes";

const { data: recipes, pending: recipesPending } = await useLazyAsyncQuery(
  AllRecipes
);

import SingleRecipe from "~~/cms/queries/single_recipe";
</script>

<style scoped>
li {
  list-style: none;
}
</style>
