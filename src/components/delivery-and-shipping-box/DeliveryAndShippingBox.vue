<template>
  <div class="container-fluid container-delivery mt-5">
    <div class="d-flex justify-content-around flex-wrap">
      <div
        class="d-flex delivery-box rounded-lg align-items-center mb-4 mb-md-4"
        @mouseover="boxIcon = 'box-icon-white.svg'"
        @mouseleave="boxIcon = 'box-icon.svg'"
      >
        <div class="mr-4 pl-4">
          <img
            :src="require('../../assets/img/delivery-and-shipping/' + boxIcon)"
            alt="box"
            class="delivery-box-icon"
          />
        </div>
        <div>
          <h5>Free Shipping</h5>
          <p class="m-0 w-75">For a local customer, we provide free shipping facility</p>
        </div>
      </div>

      <div
        class="d-flex delivery-box rounded-lg align-items-center mb-4 mb-md-4"
        @mouseover="timeIcon = '24-icon-white.png'"
        @mouseleave="timeIcon = '24-icon.png'"
      >
        <div class="mr-4 pl-4">
          <img :src="require('../../assets/img/delivery-and-shipping/' + timeIcon)" alt="clock" />
        </div>
        <div>
          <h5>24/7 support</h5>
          <p class="m-0 w-75">For any inquiry, we are available 24 hours every day</p>
        </div>
      </div>

      <div
        class="d-flex delivery-box rounded-lg align-items-center mb-4 mb-md-4"
        @mouseover="paymentIcon = 'payment-icon-white.svg'"
        @mouseleave="paymentIcon = 'payment-icon.svg'"
      >
        <div class="mr-4 pl-4">
          <img
            :src="require('../../assets/img/delivery-and-shipping/' + paymentIcon)"
            alt="box"
            class
          />
        </div>
        <div>
          <h5>Online payment</h5>
          <p class="m-0 w-75">You can pay quickly and easily with our online payment system</p>
        </div>
      </div>

      <div
        class="d-flex delivery-box rounded-lg align-items-center mt-b mb-md-4"
        @mouseover="deliveryIcon = 'delivery-icon-white.svg'"
        @mouseleave="deliveryIcon = 'delivery-icon.png'"
      >
        <div class="mr-4 pl-4">
          <img
            :src="require('../../assets/img/delivery-and-shipping/' + deliveryIcon)"
            alt="box"
            class
          />
        </div>
        <div>
          <h5>Fast delivery</h5>
          <p class="m-0 w-75">We understand your urgency and we deliver in a fast way</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeIcon: "24-icon.png",
      boxIcon: "box-icon.svg",
      paymentIcon: "payment-icon.svg",
      deliveryIcon: "delivery-icon.png",
    };
  },
};
</script>

<style scoped>
.container-delivery {
  max-width: 1800px;
  padding: 0 2rem;
}

.delivery-box {
  background-color: rgba(32, 211, 193, 0.1);

  padding: 1.5rem 0rem;
  max-width: 350px;
}

@media (min-width: 768px) {
  .delivery-box {
    max-width: 330px;
  }
}

@media (min-width: 992px) {
  .delivery-box {
    max-width: 340px;
  }
}

@media (min-width: 1730px) {
  .delivery-box {
    max-width: 380px;
  }
}

.delivery-box h5 {
  color: var(--theme-color);
  font-size: 1rem;
  font-weight: 500;
}

.delivery-box:hover {
  background-color: var(--theme-color);
}

.delivery-box:hover p,
.delivery-box:hover h5 {
  color: #fff !important;
}
</style>