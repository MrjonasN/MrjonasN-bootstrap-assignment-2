<template>
  <div class="product-grid">
    <div class="row justify-content-center justify-content-md-start justify-content-lg-center">
      <CardGrid
        class="col-lg-4 col-md-6 card-grid mt-4 ml-md-4"
        v-for="cardMockup in cardMockups"
        :key="cardMockup.id"
        :cardMockup="cardMockup"
      />
    </div>
  </div>
</template>

<script>
import CardGrid from "../../components/card/CardGrid";

export default {
  components: {
    CardGrid,
  },
  props: ["cardMockup"],
  data() {
    return {
      cardMockups: [
        {
          id: 1,
          title: "Blue silk flare sleeved top",
          image: "girl-shirt.svg",
          badge: "New",
          badge2: "",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 2,
          title: "Another great product",
          image: "circle-girl-shirt.svg",
          badge: "",
          badge2: "",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 3,
          title: "Wow!",
          image: "pattern-girl-shirt.svg",
          badge: "-20%",
          badge2: "",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 4,
          title: "Another great product",
          image: "men-shirt.svg",
          badge: "Hot",
          badge2: "-25%",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 5,
          title: "Blue silk flare sleeved top",
          image: "bra.svg",
          badge: "",
          badge2: "",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 6,
          title: "Another great product",
          image: "glasses.svg",
          badge: "Hot",
          badge2: "",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 7,
          title: "Another great product",
          image: "watch.svg",
          badge: "",
          badge2: "",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 8,
          title: "Another great product",
          image: "watch-sport.svg",
          badge: "New",
          badge2: "",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 9,
          title: "Another great product",
          image: "hat.svg",
          badge: "",
          badge2: "",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 10,
          title: "Blue silk flare sleeved top",
          image: "girl-shirt.svg",
          badge: "New",
          badge2: "",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 11,
          title: "Another great product",
          image: "circle-girl-shirt.svg",
          badge: "",
          badge2: "",
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 12,
          title: "Wow!",
          image: "pattern-girl-shirt.svg",
          badge: "-20%",
          badge2: "",
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-product {
  padding: 0;
}

.card {
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .card {
    max-width: 15rem;
  }
}

.overlay-info-grid{
  font-size: 1rem;
}

</style>