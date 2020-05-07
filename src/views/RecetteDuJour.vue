<template>
  <div class="recette-du-jour flex-box">
    <div class="py-3" role="heading" aria-label="entête du page" aria-level="1">
      <div class="title" aria-label="Salade de fruits">Salade de fruits</div>
    </div>
    <div role="main">
      <b-card
        img-src="~@/assets/images/salade.jpg"
        img-alt="salade de fruit"
        img-top
        tag="div"
        style="max-width: 30rem; color: black;"
        class="mb-2 card"
      >
        <label
          for="person-range"
          aria-label="Sélectionez le nombre de personnes"
          id="range-label"
          >Sélectionez le nombre de personnes</label
        >
        <b-form-input
          id="person-range"
          aria-describedby="range-label"
          v-model="nbrPerson"
          type="range"
          min="1"
          max="4"
        ></b-form-input>
        <div class="subtitle my-2" aria-label="nombre de personne">
          {{ nbrPerson }} Personne(s)
        </div>
        <div class="ingredients mt-2">
          <div class="mt-3 text-left subtitle">Ingredients</div>
          <div
            class="element"
            v-for="ingredient in ingredients"
            :key="ingredient.name"
          >
            <div class="row w-100 py-2">
              <div class="col-4 ">
                <img
                  :src="require(`../assets/images/${ingredient.image}`)"
                  :alt="`photo of ${ingredient.name}`"
                  class="icon"
                />
              </div>
              <div class="col-8 text-left inner-flex-box mt-2 p-0">
                <span
                  class="count"
                  v-bind:class="{ 'mr-1': !ingredient.unit }"
                  >{{ ingredient.value * nbrPerson }}</span
                >
                <span v-if="ingredient.unit" class="mr-1">
                  {{ ingredient.unit }}
                </span>
                {{ ingredient.name }}
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ingredients } from "../data/saladeFruits";

@Component
export default class RecetteDuJourComponent extends Vue {
  data() {
    return {
      nbrPerson: 1,
      ingredients: ingredients
    };
  }
}
</script>

<style lang="scss">
@import "@/styles/components/recettes.scss";
</style>
