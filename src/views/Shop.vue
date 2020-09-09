<template>
  <div>
    <jumbotronShop :jumbotron="jumbotron.shop" />
    <SortingProduct />
    <ShopGrid />
  </div>
</template>

<script>
import jumbotronShop from "../components/jumbotron-shop/JumbotronShop";
import SortingProduct from "../components/sorting-products/SortingProduct";
import ShopGrid from '../components/shop-grid/ShopGrid'

export default {
  name: "Shop",
  components: {
    jumbotronShop,
    SortingProduct,
    ShopGrid
  },
  data() {
    return {
      jumbotron: {
        shop: {
          headline: "New Customer Can Get",
          headlineGreen: "30% Off",
          fontSize: "2.25rem",
          text: "",
          buttonText: "Learn more",
          image: "shop-header.png",
          background: "#0E153D",
        },
      },
    };
  },
};
</script>

<style>
</style>