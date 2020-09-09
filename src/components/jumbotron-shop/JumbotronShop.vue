<template>
  <div class="jumbotron py-0" :style="{ background: jumbotron.background }">
    <div class="container">
      <div class="row align-items-center align-items-md-end align-items-lg-center">
        <div class="col-md-6 pt-5 pb-md-5 pb-lg-0 pt-lg-0 text-white">
          <h1 class="font-weight-bold" :style="{ fontSize: jumbotron.fontSize }">{{ jumbotron.headline }}</h1>
          <h1
            :style="{ fontSize: jumbotron.fontSize }"
            class="jumbotron-title-green"
          >{{ jumbotron.headlineGreen }}</h1>
          <p class="py-1">{{ jumbotron.text }}</p>
          <router-link
            to="/shop"
            class="btn btn-light btn-white"
            role="button"
          >{{ jumbotron.buttonText }}</router-link>
        </div>
        <div class="col-md-6 mt-5 pt-md-0">
          <img
            :src="require('@/assets/img/header/' + jumbotron.image)"
            alt="banner"
            class="img-fluid py-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["jumbotron"],
};
</script>

<style scoped>
.jumbotron h1 {
  font-family: "Play", sans-serif;
}

.jumbotron-title-green {
  color: var(--theme-color);
  font-weight: bold;
}
</style>