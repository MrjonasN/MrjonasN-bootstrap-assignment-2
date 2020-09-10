<template>
  <div class="product-grid">
      <div class="row">
              <Card class="col-md-4 card-grid" v-for="cardMockup in cardMockups" :key="cardMockup.id" :cardMockup="cardMockup" />
      </div>
  </div>
</template>

<script>
import Card from '../../components/card/Card'

export default {
    components: {
        Card
    },
    props: ['cardMockup'],
    data() {
    return {
      cardMockups: [
        {
          id: 1,
          title: "Blue silk flare sleeved top",
          image: 'sleeved-top.svg',
          badge: "New",
          badge2: '',
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 2,
          title: "Another great product",
          image: 'sleeved-top.svg',
          badge: "-25%",
          badge2: '',
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 3,
          title: "Wow!",
          image: 'pattern-shirt.svg',
          badge: "Hot",
          badge2: '',
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 4,
          title: "Another great product",
          image: 'sleeved-top.svg',
          badge: "New",
          badge2: '-25%',
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
        {
          id: 5,
          title: "Blue silk flare sleeved top",
          image: 'sleeved-top.svg',
          badge: "",
          badge2: '',
          productInfo: "New look men´s coat",
          category: "Fashion",
          oldPrice: "$220.00",
          newPrice: "$190.00",
        },
        {
          id: 6,
          title: "Another great product",
          image: 'sleeved-top.svg',
          badge: "Hot",
          badge2: '',
          productInfo: "New fresh look",
          category: "Fresh",
          oldPrice: "$500.00",
          newPrice: "$390.00",
        },
      ],
    };
  },
}
</script>

<style scoped>
.card-product {
    padding: 0;
}
</style>