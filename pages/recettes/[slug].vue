<template>
  <v-container>
    <div v-if="recipePending">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-else>
      <v-parallax
        :src="recipe.recipe.image.url"
      >
        <div
          class="d-flex flex-column fill-height justify-center align-center text-white"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            {{ recipe.recipe.titre }}
          </h1>
          <h4 class="subheading">Build your application today!</h4>
        </div>
      </v-parallax>
    </div>
  </v-container>
</template>

<script setup>
import SingleRecipe from "~~/cms/queries/single_recipe";
const route = useRoute();
const { data: recipe, pending: recipePending } = await useLazyAsyncQuery(
  SingleRecipe,
  { slug: route.params.slug }
);
</script>
