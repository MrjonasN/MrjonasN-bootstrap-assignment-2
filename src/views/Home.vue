<template>
  <div>
    <Jumbotron />
    <DeliveryAndShippingBox />
    <SectionHeadline :sectionHeadline="sectionHeadline.category" />
    <ShopByCategory />
    <SectionHeadline :sectionHeadline="sectionHeadline.arrivals" />
    <ProductCarousel />
  </div>
</template>

<script>
import Jumbotron from "../components/jumbotron/Jumbotron";
import DeliveryAndShippingBox from "../components/delivery-and-shipping-box/DeliveryAndShippingBox";
import SectionHeadline from "../components/section-headline/SectionHeadline";
import ShopByCategory from "../components/shop-by-category/ShopByCategory";
import ProductCarousel from '../components/product-carousel/ProductCarousel'

export default {
  name: "Home",
  components: {
    Jumbotron,
    DeliveryAndShippingBox,
    SectionHeadline,
    ShopByCategory,
    ProductCarousel
  },
  data() {
    return {
      sectionHeadline: {
        category: {
          headline: "Shop by",
          headlineGreen: "Category",
          text: "We always try to give you the best product within a fast and reliable way",
        },
        arrivals: {
          headline: "New",
          headlineGreen: "Arrivals",
          text: "Check out our latest products from top fashion designers",
        },
      },
    };
  },
};
</script>
