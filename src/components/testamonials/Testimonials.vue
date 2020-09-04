<template>
  <div class="testamonials-bg">
    <div class="container">
      <div class="owl-carousel owl-testamonial-carousel owl-theme">
        <TestamonialCard  />
        <TestamonialCard  />
        <TestamonialCard  />
      </div>
    </div>


  </div>
</template>

<script>
import owlCarousel from "@/assets/js/owlCarousel.js";
import TestamonialCard from "../testamonial-card/TestamonialCard";
export default {
  components: {
    TestamonialCard,
  },
};
</script>

<style>

/* CAROUSEL */

.owl-prev .arrow-white,
.owl-next .arrow-white {
  font-size: 2.2rem;
  padding: 1rem 1.4rem;
  border:  none;
  border-radius: 50% !important;
  background:white !important;
}

.owl-prev .arrow-white {
  left: -0%;
}

.owl-next .arrow.white {
  right: -0%;
}

.testamonials-bg {
  margin-top: 8rem;
  background: var(--dark-blue);
  padding-bottom: 5rem;
}

.owl-carousel .owl-item img {
    display: flex;
    width: 100%;
    }
</style>