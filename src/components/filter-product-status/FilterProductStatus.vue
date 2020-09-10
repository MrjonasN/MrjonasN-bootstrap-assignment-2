<template>
  <div class="filter-product-categories mt-4">
    <p class="filter-headline font-weight-bold theme-color mb-2">Product Status</p>
    <div class="filter-categories">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value id="onSale" />
        <label class="form-check-label" for="onSale">On sale</label>
      </div>

      <div class="form-check mt-2">
        <input class="form-check-input" type="checkbox" value id="inStock" />
        <label class="form-check-label" for="inStock">In Stock</label>
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