<template>
  <div class="filter-product-categories mt-4">
    <p class="filter-headline font-weight-bold theme-color mb-2">Filter by Color</p>
    <div class="filter-categories">
      <div class="d-flex justify-content-between">
        <p class="filter-category">
          <i class="fas fa-square mr-2"></i>Black
        </p>
        <p class="filter-qty border rounded px-1">12</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">
          <i class="fas fa-square square-gray mr-2"></i>Gray
        </p>
        <p class="filter-qty border rounded px-1">20</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">
          <i class="fas fa-square square-red mr-2"></i>Red
        </p>
        <p class="filter-qty border rounded px-1">18</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">
          <i class="fas fa-square square-green mr-2"></i>Green
        </p>
        <p class="filter-qty border rounded px-1">25</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">
          <i class="fas fa-square square-orange mr-2"></i>Orange
        </p>
        <p class="filter-qty border rounded px-1">9</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="filter-category">
          <i class="fas fa-square square-brown mr-2"></i>Brown
        </p>
        <p class="filter-qty border rounded px-1">7</p>
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

.filter-qty:hover {
  color: white;
  background: var(--theme-color);
  cursor: pointer;
}

.square-gray {
  color: #eeee;
}
.square-red {
  color: #ff2d2d;
}
.square-green {
  color: #64cb83;
}
.square-orange {
  color: #ffaa00;
}
.square-brown {
  color: #542323;
}
</style>