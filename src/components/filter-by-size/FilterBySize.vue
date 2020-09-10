<template>
  <div class="filter-product-categories mt-4">
    <p class="filter-headline font-weight-bold theme-color mb-2">Filter By size</p>
    <div class="filter-categories">
      <div class="d-flex justify-content-between">
        <p class="filter-category">XS</p>
        <p class="filter-qty border rounded px-1">18</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">S</p>
        <p class="filter-qty border rounded px-1">23</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">M</p>
        <p class="filter-qty border rounded px-1">32</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">L</p>
        <p class="filter-qty border rounded px-1">12</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">XL</p>
        <p class="filter-qty border rounded px-1">15</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">XXL</p>
        <p class="filter-qty border rounded px-1">12</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter-categories p {
  margin: 0.32rem 0;
}

.filter-category {
  cursor: pointer;
}

.filter-category:hover {
  color: var(--theme-color);
}

.filter-qty:hover {
  color: white;
  background: var(--theme-color);
  cursor: pointer;
}
</style>