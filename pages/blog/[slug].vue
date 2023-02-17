<template>
  <h1>Blog</h1>
  <p>Article: {{ $route.params.slug }}</p>
  <ul v-for="recipe in recipes.allRecipes" :key="recipe.id">
    <li>Title : {{ recipe?.blogSlug }}</li>
  </ul>
</template>

<script setup>
import recipe from "~~/cms/queries/recipe";

const { data: recipes, pending: recipesPending } = await useLazyAsyncQuery(recipe);
</script>
