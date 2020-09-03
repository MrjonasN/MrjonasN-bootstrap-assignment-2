<template>
  <div class="sale-banner mb-5">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-3 col-md-5 text-uppercase text-center new-customer-banner">
          <h1 class="text-white">
            30%
            <span>off</span>
          </h1>
          <p class="text-white py-2">For new customers</p>
          <button class="btn btn-dark btn-dark-custom text-uppercase">shop now</button>
        </div>
        <div class="col-lg-5 col-md-6 new-customer-info d-none d-md-block">
          <p class="text-white pb-3">
            Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis.
            Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi,
            aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.
          </p>
          <button class="btn btn-white">learn more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sale-banner {
  margin-top: 7rem;
  background: #cccccc;
}

.new-customer-banner {
  background: var(--theme-color);
  padding: 8rem 2rem;
}

.new-customer-banner h1 {
    font-family: 'Play', sans-serif;
    font-weight: 700;
    font-size: 3.75rem;
}

.new-customer-banner h1 span {
    font-size: 2.25rem;
}


</style>