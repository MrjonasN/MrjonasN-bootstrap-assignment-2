<template>
  <div class="container latest-blog mt-5 mb-5">
    <div class="owl-carousel owl-blog-carousel owl-theme">

      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />

    </div>

    


  </div>
</template>

<script>
import carousel from "../../assets/js/owlCarousel";
import BlogCard from '../blog-card/BlogCard'

export default {
  components: {
    BlogCard
  }
};
</script>

<style>


.owl-prev .arrow-border,
.owl-next .arrow-border {
  font-size: 2.2rem;
  padding: 1rem 1.4rem;
  border: 2px solid #e3e3e3;
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