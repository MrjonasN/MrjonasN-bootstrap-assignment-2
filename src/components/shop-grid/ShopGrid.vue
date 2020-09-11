<template>
  <div class="shop-grid mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <button
            class="btn btn-dark btn-block btn-filter my-2 visible-xs d-md-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >Filter
          <i class="fas fa-chevron-down theme-color ml-2 text-white"></i>
          </button>
          <div class="collapse dont-collapse-lg mt-4 mt-md-0" id="collapseExample">
            <FilterProductCategories />
            <FilterByPrice />
            <FilterByColor />
            <FilterBySize />
            <FilterByBrand />
            <FilterByStatus />
            <TopRatedProducts />
          </div>
        </div>
        <div class="col-md-9">
          <ProductGrid />
          <Pagination />
        </div>
      </div>
    </div>
    <SubscribeNow />
    <BrandBanner />
  </div>
</template>

<script>
import FilterProductCategories from "../../components/filter-product-categories/FilterProductCategories";
import FilterByPrice from "../../components/filter-by-price/FilterByPrice";
import FilterByColor from "../../components/filter-by-color/FilterByColor";
import FilterBySize from "../../components/filter-by-size/FilterBySize";
import FilterByBrand from "../../components/filter-by-brand/FilterByBrand";
import FilterByStatus from "../../components/filter-product-status/FilterProductStatus";
import TopRatedProducts from "../../components/top-rated-products/TopRatedProducts";
import ProductGrid from "../../components/product-grid/ProductGrid";
import Pagination from "../../components/pagination/Pagination";
import SubscribeNow from "../../components/subscribe-now/SubscribeNow";
import BrandBanner from "../../components/brand-banner/BrandBanner";

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
    Pagination,
    SubscribeNow,
    BrandBanner,
  },
};
</script>

<style scoped>
.btn-filter {
  padding: 1rem 1.5rem;
  background: var(--theme-color);
  border: none;
}
@media (min-width: 768px) {
  .collapse.dont-collapse-lg {
    display: block;
    height: auto !important;
    visibility: visible;
  }
}
</style>