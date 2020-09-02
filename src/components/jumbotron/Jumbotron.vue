<template>
  <div class="jumbotron py-0">
    <div class="container">
      <div class="row align-items-center align-items-md-end align-items-lg-center">
        <div class="col-md-6 pt-5 pb-md-5 pb-lg-0 pt-lg-0">
          <h1 class>Shopping is</h1>
          <h1 class="jumbotron-title-green">More Fun</h1>
          <p
            class="py-3"
          >Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
          <a class="btn btn-light btn-white" href="#" role="button">shop now</a>
        </div>
        <div class="col-md-6 mt-5 pt-md-0">
          <img src="@/assets/img/header/Banner-thumb.png" alt="banner" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.jumbotron {
  background: #eeeeee;
}

.jumbotron h1 {
  font-family: "Play", sans-serif;
  font-size: 3.75rem;
}

.jumbotron-title-green {
  color: var(--theme-color);
  font-weight: bold;
  text-transform: uppercase;
}
</style>