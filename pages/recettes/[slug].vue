<template>
  <v-container>
    <div v-if="recipePending">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-else>
      <span></span>
      <h1 class="text-h4 font-weight-thin mb-4">
        {{ recipe.recipe.titre }}
      </h1>

      <v-parallax :src="recipe.recipe.image.url" class="img"> </v-parallax>
      <div class="content">
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                title="Ingrédients Pour 6 personnes"
                :text="recipe?.recipe.content"
              ></v-card>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                title="Recette"
                :text="recipe?.recipe.ingredient"
              ></v-card>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                title="Conseil"
                :text="recipe?.recipe.conseil"
              ></v-card>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <v-card
                title="Intérêt"
                :text="recipe?.recipe.intRT"
              ></v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
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

<style scoped>
span {
  min-height: 50vh;
  z-index: -1;
  position: absolute;
  top: -250%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: #d96941;
  border-radius: 50%;
  margin: 0 auto;
}
h1 {
  font-size: 70px;
  font-family: "Roboto Serif", serif;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-top: 20%;
}
h2 {
  font-size: 35px;
  font-family: "Roboto Serif", serif;
  /* color: white; */
  position: relative;
}
p {
  font-size: 22px;
  font-family: "Roboto Serif", serif;
  /* color: white; */
  text-align: center;
}

.img {
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  position: relative;
  top: 5em;
}

.content {
  position: relative;
  top: 8em;
  margin-bottom: 10em;
}
</style>
