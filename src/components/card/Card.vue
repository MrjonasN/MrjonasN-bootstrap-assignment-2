<template>
  <div class="item">
    <div class="card d-inline-block card-product" style="width: 21rem;">
      <div
        v-if="cardCarouselMockup.badge !== ''"
        class="badge badge-primary"
        :class="[
      cardCarouselMockup.badge === 'New' ? 'blue' : '', 
      cardCarouselMockup.badge === 'Hot' ? 'red' : '',
      cardCarouselMockup.badge !== 'Hot' && cardCarouselMockup.badge !== 'New'  ? 'green' : '',
      ]"
      >{{ cardCarouselMockup.badge }}</div>

      <div class="badge badge-primary green-badge-2">{{ cardCarouselMockup.badge2 }}</div>

      <img src="../../assets/img/products/sleeved-top.svg" class="card-img-top" alt />
      <div class="card-footer">
        <p class="card-text text-white">{{ cardCarouselMockup.title }}</p>
      </div>

      <div class="overlay">
        <div class="overlay-nav d-inline-block ml-auto">
          <div class="d-flex flex-column align-items-center">
            <div class="overlay-color pb-2 tooltip-color-picker">
              <i class="fas fa-circle"></i>
              <div class="tooltip-color-picker-text">
                <i class="fas fa-circle circle-green"></i>
                <i class="fas fa-circle circle-purple"></i>
                <i class="fas fa-circle circle-red"></i>
                <i class="fas fa-circle circle-black"></i>
              </div>
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
          <p class="text-white overlay-info py-0 my-0">{{ cardCarouselMockup.productInfo }}</p>
          <button
            class="btn btn-outline-light btn-card-overlay my-2"
          >{{ cardCarouselMockup.category }}</button>
          <p class="text-white card-price py-0 my-0">{{ cardCarouselMockup.oldPrice }}</p>
          <p class="card-current-price py-0 my-0">{{ cardCarouselMockup.newPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tooltip from "../../assets/js/tooltip";
export default {
  props: ["cardCarouselMockup"],
};
</script>

<style>
/* TOOLTIP */

.tooltip-inner {
  background-color: var(--theme-color) !important;
  color: white;
  padding: 0.4rem 0.9rem;
  margin-bottom: 1.2rem;
}

#color-picker .tooltip-inner {
  background-color: white !important;
  color: black;
  padding: 0.4rem 0.9rem;
  margin-bottom: 1.2rem;
}

.tooltip.show {
  opacity: 1;
}

.bs-tooltip-left .arrow::before,
.bs-tooltip-auto[x-placement^="left"] .arrow::before {
  border-left-color: var(--theme-color) !important;
  bottom: 10px;
  left: 0px;
}

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
  padding: 0.42rem 0;
  position: absolute;
  z-index: 1;
  top: -10px;
  right: 180%;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip-color-picker .tooltip-color-picker-text::after {
  border: 1px solid red;
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
  display: block;
  opacity: 1;
}

.tooltip-color-picker-text > i {
  padding: 0 0.2rem;
  margin-top: 0.2rem;
}

.tooltip-color-picker-text .circle-green {
  color: #82d8c6;
}
.tooltip-color-picker-text .circle-purple {
  color: #ca82d8;
}
.tooltip-color-picker-text .circle-red {
  color: #fe6c6c;
}
.tooltip-color-picker-text .circle-black {
  color: #333333;
}

/* CARD */

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