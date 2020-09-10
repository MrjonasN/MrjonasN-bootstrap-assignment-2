<template>
  <div class="filter-by-price mt-4">
      <p class="font-weight-bold theme-color mb-2">Filter By price</p>
        <div class="filter-price-bar">
            <!-- Price bar here -->
            <img src="../../assets/img/Price slider.svg" class="img-fluid" alt="">
        </div>
        <div class="filter-price mt-3 d-flex justify-content-between align-items-center">
        <p class="m-0 p-0">Price: $0 - $10,000</p>
        <button class="btn btn-sm btn-primary px-4 py-1 btn-filter">Filter</button>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-filter {
  border-radius: 3rem;
  background: var(--theme-color) !important;
  border: none;
}
</style>