<template>
  <div class="shop-grid container mt-4">
    <div class="row">
      <div class="col-md-3">
        <FilterProductCategories />
        <FilterByPrice />
        <FilterByColor />
        <FilterBySize />
        <FilterByBrand />
        <FilterByStatus />
        <TopRatedProducts />
      </div>
      <div class="col-md-9">
        <ProductGrid />
      </div>
    </div>
  </div>
</template>

<script>
import FilterProductCategories from "../../components/filter-product-categories/FilterProductCategories";
import FilterByPrice from "../../components/filter-by-price/FilterByPrice";
import FilterByColor from "../../components/filter-by-color/FilterByColor";
import FilterBySize from "../../components/filter-by-size/FilterBySize";
import FilterByBrand from "../../components/filter-by-brand/FilterByBrand";
import FilterByStatus from '../../components/filter-product-status/FilterProductStatus'
import TopRatedProducts from '../../components/top-rated-products/TopRatedProducts'
import ProductGrid from '../../components/product-grid/ProductGrid'
// import Card from '../../components/card/Card'

export default {
  components: {
    FilterProductCategories,
    FilterByPrice,
    FilterByColor,
    FilterBySize,
    FilterByBrand,
    FilterByStatus,
    TopRatedProducts,
    ProductGrid,
    // Card
  },
 
};
</script>

<style>
</style>