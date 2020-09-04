<template>
  <div class="item">
    <div class="testamonial-card text-center">
      <div class="testamonial-quote-icon pb-5">
        <img src="@/assets/img/Quote.svg" alt class="img-fluid testamonial-quote mx-auto" />
      </div>
      <div class="testamonial-pic"></div>
      <div class="testamonial-stars pt-4 pb-3">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </div>
      <div class="testamonial-name">
        <h5>Johny Wesmullar</h5>
        <p class="text-white">CEO, Biotech Inc.</p>
      </div>
      <div class="testamonial-text pt-2">
        <p class="text-white mx-auto w-75">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.testamonial-quote {
  max-width: 10%;
}

.testamonial-pic {
  background: #cccccc;
  border: 5px solid white;
  border-radius: 0.4rem;
  display: inline-block;
  width: 200px;
  height: 220px;
}

.testamonial-stars i {
  color: var(--theme-color);
  font-size: 1.2rem;
}

.testamonial-name h5 {
  color: var(--theme-color);
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.25rem;
}

.testamonial-name p {
  font-size: 0.875rem;
}
</style>