<template>
  <div class="container mt-5 top-sellers">
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-12 offset-md-">
        <div class="card d-inline-block card-product card-product-big" style=";">
          <div class="card-brand">
            <img src="../../assets/img/products/brands/Bexim.svg" alt class="img-fluid" />
          </div>

          <img src="../../assets/img/products/men-coat.svg" class="card-img-top img-fluid" alt />
          <div class="card-footer">
            <p class="card-text text-white">Mens denim shirt Full</p>
          </div>

          <div class="overlay">
            <div class="overlay-nav d-inline-block ml-auto">
                       <div class="d-flex flex-column align-items-center">
            <div class="overlay-color pb-2 tooltip-color-picker">
              <i class="fas fa-circle"></i>
              <span class="tooltip-color-picker-text">
                <i class="fas fa-circle circle-green"></i>
                <i class="fas fa-circle circle-purple"></i>
                <i class="fas fa-circle circle-red"></i>
                <i class="fas fa-circle circle-black"></i>
                </span>
            </div>
            <div class="overlay-heart py-2">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="left"
                title="Save product"
                class="tooltip-primary"
              >
                <img src="../../assets/img/nav/Heart-icon.svg" alt />
              </a>
            </div>
            <div class="overlay-compare py-2">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="left"
                title="Compare products"
                class="tooltip-primary"
              >
                <img src="../../assets/img/nav/Compare-icon.svg" alt />
              </a>
            </div>
            <div class="overlay-search py-2">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="left"
                title="More info"
                class="tooltip-primary"
              >
                <img src="../../assets/img/nav/search-icon-dark.svg" alt />
              </a>
            </div>
            <div class="overlay-cart pt-2">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="left"
                title="Add to cart"
                class="tooltip-primary"
              >
                <img src="../../assets/img/nav/cart-icon.svg" alt />
              </a>
            </div>
          </div>
            </div>
            <div class="overlay-text">
              <p class="text-white overlay-info py-0 my-0">New Look. Just Wow!</p>
              <button class="btn btn-outline-light btn-card-overlay my-2">Fresh</button>
              <p class="text-white card-price py-0 my-0">$1000</p>
              <p class="card-current-price py-0 my-0">$49.00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-md-6 col-lg-12 mt-3 mt-lg-0">
            <div class="card d-inline-block card-product p-card-product-wide" style>
              <div class="card-brand">
                <img src="../../assets/img/products/brands/Lighton.svg" alt class="img-fluid" />
              </div>

              <img src="../../assets/img/products/men-coat.svg" class="card-img-top img-fluid" alt />
              <div class="card-footer card-footer-wide">
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
                  <button class="btn btn-outline-light btn-card-overlay my-2">Fresh</button>
                  <p class="text-white card-price py-0 my-0">$1000</p>
                  <p class="card-current-price py-0 my-0">$49.00</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-12 mt-3 mt-xl-4">
            <div class="card d-inline-block card-product p-card-product-wide" style>
              <div class="card-brand">
                <img src="../../assets/img/products/brands/Bexim.svg" alt class="img-fluid" />
              </div>
              <img src="../../assets/img/products/men-coat.svg" class="card-img-top" alt />
              <div class="card-footer card-footer-wide">
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
                  <button class="btn btn-outline-light btn-card-overlay my-2">Fresh</button>
                  <p class="text-white card-price py-0 my-0">$1000</p>
                  <p class="card-current-price py-0 my-0">$49.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tooltip from "../../assets/js/tooltip";
export default {
  components: {},
};
</script>

<style scoped>

.tooltip-color-picker {
  position: relative;
  display: inline-block;
}

.tooltip-color-picker .tooltip-color-picker-text {
  visibility: hidden;
  width: 130px;
  background-color: white;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: .42rem 0;
  position: absolute;
  z-index: 1;
  top: -10px;
  right: 190%;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-color-picker .tooltip-color-picker-text::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent white;
}

.tooltip-color-picker:hover .tooltip-color-picker-text {
  visibility: visible;
  opacity: 1;
}

.tooltip-color-picker-text > i {
  padding: 0 .2rem;
  margin-top: .2rem;
}

.tooltip-color-picker-text .circle-green { color: #82D8C6}
.tooltip-color-picker-text .circle-purple { color: #CA82D8}
.tooltip-color-picker-text .circle-red { color: #FE6C6C}  
.tooltip-color-picker-text .circle-black { color: #333333}

.card-product {
  background: #eeeeee;
  border: none;
  border-radius: 0.4rem;
  position: relative;
}

.card-brand {
  position: absolute;
  top: 20px;
  left: 20px;
  background: white;
  padding: 0.8rem;
  border-radius: 0.5rem;
}

.card-brand {
  max-width: 30%;
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

.card-product-big {
  min-width: 100%;
}

@media (min-width: 992px) {
  .p-card-product-wide {
    padding: 0 9rem;
    min-width: 112%;
  }
}

@media (min-width: 1200px) {
  .p-card-product-wide {
    min-width: 102%;
  }
}

.card-footer-wide {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
}

/* OVERLAY */
.overlay {
  position: absolute;
  z-index: 2;
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