<template>
  <div>
    <Jumbotron />
    <DeliveryAndShippingBox />
    <SectionHeadline :sectionHeadline="sectionHeadline.category" />
    <ShopByCategory />
    <SectionHeadline :sectionHeadline="sectionHeadline.arrivals" />
    <ProductCarousel />
    <NewCustomerSaleBanner />
    <SectionHeadline :sectionHeadline="sectionHeadline.products" />
    <ProductCarousel />
    <FlashSaleBanner />
    <SectionHeadline :sectionHeadline="sectionHeadline.sellers" />
    <TopSellers />
  </div>
</template>

<script>
import Jumbotron from "../components/jumbotron/Jumbotron";
import DeliveryAndShippingBox from "../components/delivery-and-shipping-box/DeliveryAndShippingBox";
import SectionHeadline from "../components/section-headline/SectionHeadline";
import ShopByCategory from "../components/shop-by-category/ShopByCategory";
import ProductCarousel from "../components/product-carousel/ProductCarousel";
import NewCustomerSaleBanner from "../components/new-customer-sale-banner/NewCustomerSaleBanner";
import FlashSaleBanner from "../components/flash-sale-banner/FlashSaleBanner";
import TopSellers from "../components/top-sellers/TopSellers";

export default {
  name: "Home",
  components: {
    Jumbotron,
    DeliveryAndShippingBox,
    SectionHeadline,
    ShopByCategory,
    ProductCarousel,
    NewCustomerSaleBanner,
    FlashSaleBanner,
    TopSellers
  },
  data() {
    return {
      sectionHeadline: {
        category: {
          headline: "Shop by",
          headlineGreen: "Category",
          text:
            "We always try to give you the best product within a fast and reliable way",
        },
        arrivals: {
          headline: "New",
          headlineGreen: "Arrivals",
          text: "Check out our latest products from top fashion designers",
        },
        products: {
          headline: "Featured",
          headlineGreen: "Products",
          text: "Check out our monthly featured products from top brands",
        },
        sellers: {
          headline: "Top",
          headlineGreen: "Sellers",
          text: "Check out our weekly top sellers in all category",
        },
      },
    };
  },
};
</script>
