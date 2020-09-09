<template>
  <div class="shop-grid container mt-4">
    <div class="row">
        <div class="col-md-3">
            <FilterProductCategories />
            <FilterByPrice />
        </div>
        <div class="col-md-9"></div>
    </div>
  </div>
</template>

<script>
import FilterProductCategories from '../../components/filter-product-categories/FilterProductCategories'
import FilterByPrice from '../../components/filter-by-price/FilterByPrice'

export default {
    components: {
        FilterProductCategories,
        FilterByPrice
    }
}
</script>

<style>

</style>