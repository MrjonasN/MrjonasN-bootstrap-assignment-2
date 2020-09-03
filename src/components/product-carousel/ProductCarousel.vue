<template>
  <div class="container mt-5">
    <div id="slider" class="owl-carousel owl-theme" v-if="cardCarouselMockups">
      <Card
        v-for="cardCarouselMockup in cardCarouselMockups"
        :key="cardCarouselMockup.id"
        :cardCarouselMockup="cardCarouselMockup"
      />
    </div>
  </div>
</template>

<script>
import owlCarousel from "@/assets/js/owlCarousel.js";
import Card from "../card/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cardCarouselMockups: [
        {
          id: 1,
          image: "../../assets/img/products/sleeved-top.svg",
          title: "Blue silk flare sleeved top",
          badge: "new",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 2,
          image: "../../assets/img/products/sleeved-top.svg",
          title: "Another great product",
          badge: "new",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 3,
          image: "../../assets/img/products/sleeved-top.svg",
          title: "Blue silk flare sleeved top",
          badge: "new",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 4,
          image: "../../assets/img/products/sleeved-top.svg",
          title: "Another great product",
          badge: "new",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 5,
          image: "../../assets/img/products/sleeved-top.svg",
          title: "Blue silk flare sleeved top",
          badge: "new",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 6,
          image: "../../assets/img/products/sleeved-top.svg",
          title: "Another great product",
          badge: "new",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
      ],
    };
  },
};
</script>

<style>
.owl-prev,
.owl-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block !important;
  color: #e3e3e3 !important;
}

.owl-prev {
  left: -8%;
}

.owl-next {
  right: -6%;
}

.owl-prev i,
.owl-next i {
  font-size: 2.2rem;
  padding: 1rem 1.3rem;
  border: 2px solid #e3e3e3;
  border-radius: 50% !important;
}

.owl-prev i:hover,
.owl-next i:hover {
  background: var(--theme-color) !important;
  border: transparent !important;
}

.owl-nav button.owl-prev:hover,
.owl-nav button.owl-next:hover {
  background: none !important;
}

.owl-theme .owl-dots .owl-dot.active span {
    background: var(--theme-color);
}
</style>