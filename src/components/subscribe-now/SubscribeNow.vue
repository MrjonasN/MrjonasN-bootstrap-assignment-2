<template>
  <div class="subscribe-bg py-5 py-md-0">
    <div class="subscribe container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 col-lg-5">
          <div class="section-headline">
            <h2 class="text-uppercase">
              subscribe
              <span class="headline-green">now</span>
            </h2>
            <p class="py-3">
              Signup for awesome news about our new products and
              know our special discounts on products.
            </p>
          </div>
          <div class="mb-3 subscribe-input">
            <input
              type="email"
              class="form-control subscribe-field"
              placeholder="Enter email address"
              aria-describedby="button-addon"
            />
            <div class="btn-input">
              <button class="btn btn-theme-color" type="button" id="button-addon">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 d-none d-md-block">
          <div class="subscribe-right-block"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.subscribe-bg {
  background: #f6f6f6;
  margin-top: 8rem;
}

.section-headline {
  margin-top: 0rem;
}

.section-headline h2 {
  font-family: "Play", sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
}

.section-headline span {
  color: var(--theme-color);
}

.subscribe-input {
  position: relative;
}

.subscribe-field {
  padding: 1.5rem 1.5rem;
  border-radius: 3rem;
}

::placeholder {
  color: #aaa;
}

.btn-input {
  position: absolute;
  right: 5px;
  top: 4px;
}

.subscribe-right-block {
  background: #cccccc;
  height: 22rem;
}
</style>
