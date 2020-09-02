<template>
  <div class="container shop-category mt-5 mb-5">
    <div class="card category-men">
      <div class="category-title pl-3 py-2">Men</div>
    </div>
    <div class="card category-women">
      <div class="category-title pl-3 py-2">Women</div>
    </div>
    <div class="card category-kids">
      <div class="category-title pl-3 py-2">Kids</div>
    </div>
    <div class="card category-shoes">
      <div class="category-title pl-3 py-2">Shoes</div>
    </div>
    <div class="card category-hats">
      <div class="category-title pl-3 py-2">Hats</div>
    </div>
    <div class="card category-sunglasses">
      <div class="category-title pl-3 py-2">
        Sunglasses
        <small class="text-white d-block">18 products</small>
      </div>
    </div>
    <div class="card category-watches">
      <div class="category-title pl-3 py-2">Watches</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background: #cccccc;
  padding-top: 230px;
  border: none;
  position: relative;
}

.category-title {
  background: #0e153d;
  color: var(--theme-color);
  font-weight: 500;
  width: 50%;
  border-radius: 0 0.5rem 0 0.2rem;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
}

.shop-category {
  display: grid;
  row-gap: 1rem;
  grid-template-areas:
    "men men men men men"
    "women women women women women"
    "kids kids kids kids kids"
    "shoes shoes shoes shoes shoes"
    "hats hats hats hats hats"
    "sunglasses sunglasses sunglasses sunglasses sunglasses"
    "watches watches watches watches watches ";
}

@media (min-width: 768px) {
  .shop-category {
    row-gap: 0rem;
    gap: 1rem;
    grid-template-areas:
      "men men men women women women"
      "shoes shoes shoes kids kids kids"
      "hats hats sunglasses sunglasses watches watches";
  }
}

@media (min-width: 992px) {
  .shop-category {
    grid-template-areas:
      "men women women kids kids"
      "shoes shoes hats kids kids"
      "shoes shoes sunglasses sunglasses watches";
  }
}

.category-men {
  grid-area: men;
}
.category-women {
  grid-area: women;
}
.category-kids {
  grid-area: kids;
}
.category-shoes {
  grid-area: shoes;
}
.category-hats {
  grid-area: hats;
}
.category-sunglasses {
  grid-area: sunglasses;
}
.category-watches {
  grid-area: watches;
}
</style>