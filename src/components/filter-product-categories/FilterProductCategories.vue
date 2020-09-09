<template>
  <div class="filter-product-categories">
    <p class="filter-headline font-weight-bold theme-color mb-2">Product Categories</p>
    <div class="filter-categories">
      <div class="d-flex justify-content-between">
        <p class="filter-category">Men's</p>
        <p class="filter-qty border rounded px-1">18</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">Women</p>
        <p class="filter-qty border rounded px-1">23</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">Kids</p>
        <p class="filter-qty border rounded px-1">32</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">Hats</p>
        <p class="filter-qty border rounded px-1">12</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">Sunglasses</p>
        <p class="filter-qty border rounded px-1">15</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">Shoes</p>
        <p class="filter-qty border rounded px-1">12</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">Watches</p>
        <p class="filter-qty border rounded px-1">20</p>
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