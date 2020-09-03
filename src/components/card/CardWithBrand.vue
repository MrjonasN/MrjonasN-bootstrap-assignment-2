<template>
  <div class="item">
    <div class="card d-inline-block card-product" style="width: 21rem;">
      <div class="badge badge-primary">logo</div>

      <img src="../../assets/img/products/men-coat.svg" class="card-img-top" alt />
      <div class="card-footer">
        <p class="card-text text-white">Mens denim shirt Full</p>
      </div>

      <div class="overlay">
        <div class="overlay-nav d-inline-block ml-auto">
          <div class="d-flex flex-column align-items-center">
            <div class="overlay-color pb-2">
              <i class="fas fa-circle"></i>
            </div>
            <div class="overlay-heart py-2">
              <img src="../../assets/img/nav/Heart-icon.svg" alt />
            </div>
            <div class="overlay-compare py-2">
              <img src="../../assets/img/nav/Compare-icon.svg" alt />
            </div>
            <div class="overlay-search py-2">
              <img src="../../assets/img/nav/search-icon-dark.svg" alt />
            </div>
            <div class="overlay-cart pt-2">
              <img src="../../assets/img/nav/cart-icon.svg" alt />
            </div>
          </div>
        </div>
        <div class="overlay-text">
          <p class="text-white overlay-info py-0 my-0">New Look. Just Wow!</p>
          <button
            class="btn btn-outline-light btn-card-overlay my-2"
          >Fresh</button>
          <p class="text-white card-price py-0 my-0">$1000</p>
          <p class="card-current-price py-0 my-0">$49</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardCarouselMockup"],
};
</script>

<style scoped>
.card-product {
  background: #eeeeee;
  border: none;
  border-radius: 0.4rem;
  position: relative;
}

.blue {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background: var(--theme-color);
  padding: 1.3rem 0.8rem;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}

.red {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background: #fe4545;
  padding: 1.3rem 0.8rem;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}

.green {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background: #64cb83;
  padding: 1.4rem 0.9rem;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}

.green-badge-2 {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background: #64cb83;
  padding: 1.4rem 0.9rem;
  border-radius: 50%;
  position: absolute;
  top: 85px;
  left: 20px;
}

.card-text {
  background: var(--dark-blue);
  border-radius: 0 0 0.4rem 0.4rem;
  font-size: 1.125rem;
  padding: 0.7rem 0 0.7rem 1.3rem;
}

.card-footer {
  padding: 0;
}

/* OVERLAY */
.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: rgba(14, 21, 61, 0.85);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.15s ease;
}

.card-product:hover .overlay {
  bottom: 0;
  height: 100%;
}

.overlay-nav {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #ffff;
  border-radius: 2rem;
  padding: 1.4rem 0.7rem;
}

.overlay-color i {
  font-size: 1.3rem;
  color: tomato;
}

.overlay-text {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.overlay-info {
  font-size: 1.125rem;
}

.btn-card-overlay {
  padding: 0rem 0.5rem;
  border-radius: 0;
}

.card-price {
  text-decoration: line-through;
}

.card-current-price {
  color: var(--theme-color);
  font-size: 1.5rem;
  font-weight: 500;
}
</style>