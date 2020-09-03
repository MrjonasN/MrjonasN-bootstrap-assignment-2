<template>
  <div class="flash-banner mb-5">
    <div class="container">
      <div class="row justify-content-between align-items-start">
        <div class="col-lg-3 col-md-4 text-uppercase text-center flash-sale-banner">
          <h1 class="text-white">Flash sale</h1>
          <p class="text-white text-uppercase m-0 p-0">Up to 50% off</p>
          <button
            class="mt-3 btn btn-dark btn-dark-custom text-uppercase d-md-none d-sm-inline"
          >shop now</button>
        </div>
        <div class="col-lg-6 col-md-7 flash-sale-info d-none d-md-block">
          <div class="sale-stats d-flex justify-content-between">
            <div
              class="circle-stat d-flex flex-column align-items-center justify-content-center text-center rounded-circle bg-white"
            >
              <h5 class="p-0 m-0">7</h5>
              <p class="p-0 m-0">Days</p>
            </div>
            <div
              class="circle-stat d-flex flex-column align-items-center justify-content-center text-center rounded-circle bg-white"
            >
              <h5 class="p-0 m-0">23</h5>
              <p class="p-0 m-0">Hours</p>
            </div>
            <div
              class="circle-stat d-flex flex-column align-items-center justify-content-center text-center rounded-circle bg-white"
            >
              <h5 class="p-0 m-0">46</h5>
              <p class="p-0 m-0">Minuts</p>
            </div>
            <div
              class="circle-stat d-flex flex-column align-items-center justify-content-center text-center rounded-circle bg-white"
            >
              <h5 class="p-0 m-0">12</h5>
              <p class="p-0 m-0">Seconds</p>
            </div>
          </div>
          <button class="mt-5 btn btn-white d-block mx-auto">shop now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flash-banner {
  margin-top: 7rem;
  background: var(--dark-blue);
  /* padding-bottom: 10rem; */
}

.flash-sale-banner {
  background: var(--theme-color);
  padding: 3rem 2rem;
}

.flash-sale-banner h1 {
  font-family: "Play", sans-serif;
  font-weight: 700;
  font-size: 3.75rem;
}

.flash-sale-banner p {
  font-size: 1.5rem;
  font-weight: 500;
}

.flash-sale-info {
    padding: 8rem 0;
}


@media (min-width: 768px) {
  .circle-stat {
    height: 5.5rem;
    width: 5.5rem;
    border: 2px dashed var(--theme-color);
  }

  .circle-stat h5 {
    font-family: "Play", sans-serif;
    color: var(--theme-color) !important;
    font-weight: 700;
    font-size: 1.5rem;
  }
}

@media (min-width: 992px) {
  .circle-stat {
    height: 7.5rem;
    width: 7.5rem;
    border: 3px dashed var(--theme-color);
  }

  .circle-stat h5 {
    font-family: "Play", sans-serif;
    color: var(--theme-color) !important;
    font-weight: 700;
    font-size: 2.25rem;
  }
}
</style>