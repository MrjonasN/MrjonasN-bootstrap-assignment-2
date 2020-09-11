<template>
  <div class="top-rated-products mt-4">
    <p class="filter-headline font-weight-bold theme-color mb-2">Top Rated Products</p>
    <div class="product d-flex align-items-start mt-3">
        <div class="top-product-img">
            <img src="@/assets/img/products/product-thumbs/Product-thumb-shirt.svg" alt="">
        </div>
        <div class="top-product-info ml-2">
            <p class="m-0">Circle pattern girls...</p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <p class="font-weight-bold mb-0">$190</p>
        </div>
    </div>
    <div class="product d-flex align-items-start mt-3">
        <div class="top-product-img">
            <img src="@/assets/img/products/product-thumbs/Product-thumb-shoes.svg" alt="">
        </div>
        <div class="top-product-info ml-2">
            <p class="m-0">Circle pattern girls...</p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <p class="font-weight-bold mb-0">$190</p>
        </div>
    </div>
    <div class="product d-flex align-items-start mt-3">
        <div class="top-product-img">
            <img src="@/assets/img/products/product-thumbs/Product-thumb-watch.svg" alt="">
        </div>
        <div class="top-product-info ml-2">
            <p class="m-0">Circle pattern girls...</p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <p class="font-weight-bold mb-0">$190</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter-headline p {
  margin: 0.32rem 0;
}

.top-product-img {
    background: #eeee;
    border-radius: .5rem;
}

.top-product-info i {
    color: var(--theme-color);
    font-size: .8rem;
}
</style>