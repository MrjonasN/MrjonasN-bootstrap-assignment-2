<template>
  <div>
    <Jumbotron :jumbotron="jumbotron.home" />
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
    <Testamonials />
    <SectionHeadline :sectionHeadline="sectionHeadline.blog" />
    <LatestBlog />
    <SubscribeNow />
    <BrandBanner />
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
import Testamonials from "../components/testamonials/Testimonials";
import LatestBlog from "../components/latest-blog/LatestBlog";
import SubscribeNow from "../components/subscribe-now/SubscribeNow";
import BrandBanner from "../components/brand-banner/BrandBanner";

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
    TopSellers,
    Testamonials,
    LatestBlog,
    SubscribeNow,
    BrandBanner,
  },
  data() {
    return {
      jumbotron: {
        home: {
          headline: "Shopping is",
          headlineGreen: "More fun",
          fontSize: '3.75rem',
          text: "Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed",
          buttonText: "Shop now",
          image: 'Banner-thumb.png',
          background: '#eeeeee'
        },
      },
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
        blog: {
          headline: "Latest",
          headlineGreen: "Blog",
          text: "Read our latest posts about our events and trending news",
        },
      },
    };
  },
};
</script>
