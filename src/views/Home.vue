<template>
  <b-container
    fluid
    aria-label="Page principale"
    id="main-container"
    role="main"
  >
    <div class="home flex-box">
      <b-card
        title="Bienvenue à la cuisine de Bell"
        img-src="~@/assets/images/banner.jpeg"
        img-alt="photo of app banner"
        img-top
        tag="div"
        class="mb-2 card"
      >
        <router-link
          to="/recette-du-jour"
          tag="b-button"
          class="nav-btn"
          aria-label="Accedez à la recette du jour"
          >Accedez à la recette du jour</router-link
        >
      </b-card>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {}
</script>

<style lang="scss">
@import "@/styles/components/home.scss";
</style>
