<template>
  <div>
    <div class="footer-bg">
      <div class="footer container">
        <div class="row justify-content-md-between">
          <div class="col-md-3 footer-col-1 mb-5 mb-md-0">
            <router-link to="/">
              <img src="@/assets/img/logo/Logo-white.svg" alt class="mb-5" />
            </router-link>
            <p class="text-white footer-text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam
              ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl
              convallis iaculis. Aenean laoreet.
            </p>

            <div class="footer-social-media pt-3">
              <p class="text-white">Follow Us</p>
              <a class="text-white mr-3" href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-white mr-3" href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-white mr-3" href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-white mr-3" href="#">
                <i class="fab fa-pinterest"></i>
              </a>
              <a class="text-white" href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div class="col-md-3 footer-col-2 mb-5 mb-md-0">
            <h3 class="text-uppercase font-weight-bold theme-color mb-4">contact info</h3>

            <div class="footer-address">
              <h5 class="theme-color">Address:</h5>
              <p class="text-white mb-1">Solna Business Park</p>
              <p class="text-white">Feni-2500 Stockholm</p>
            </div>

            <div class="footer-phone my-3">
              <h5 class="theme-color">Phone:</h5>
              <p class="text-white mb-1">+08-123456789</p>
              <p class="text-white">+08-123456789</p>
            </div>

            <div class="footer-address">
              <h5 class="theme-color">Email:</h5>
              <div class="footer-email">
                <a href="#" class="text-white mb-1">support@website.com</a>
              </div>
              <div class="footer-email">
                <a href="#" class="text-white">info@website.com</a>
              </div>
            </div>
          </div>

          <div class="col-md-3 footer-col-3 mb-5 mb-md-0">
            <h3 class="text-uppercase font-weight-bold theme-color mb-4">Useful links</h3>
            <div class="footer-links">
              <div class="footer-link mb-3">
                <a href="#" class="text-white">Privacy Policy</a>
              </div>
              <div class="footer-link mb-3">
                <a href="#" class="text-white">Terms & Conditions</a>
              </div>
              <div class="footer-link mb-3">
                <a href="#" class="text-white">Contact Us</a>
              </div>
              <div class="footer-link mb-3">
                <a href="#" class="text-white">Our Sitemap</a>
              </div>
              <div class="footer-link mb-3">
                <a href="#" class="text-white">Latest News</a>
              </div>
              <div class="footer-link mb-3">
                <a href="#" class="text-white">Returns</a>
              </div>
            </div>
          </div>

          <div class="col-md-3 footer-col-4">
            <h3 class="text-uppercase font-weight-bold theme-color mb-4">Recent Instagram</h3>
            <div class="row justify-content-center">
              <div class="col-3 mr-2 footer-insta-box"></div>
              <div class="col-3 mr-2 footer-insta-box"></div>
              <div class="col-3 footer-insta-box"></div>
            </div>
            <div class="row justify-content-center">
              <div class="col-3 mr-2 my-2 footer-insta-box"></div>
              <div class="col-3 mr-2 my-2 footer-insta-box"></div>
              <div class="col-3 mt-2 footer-insta-box"></div>
            </div>
            <div class="row justify-content-center">
              <div class="col-3 mr-2 footer-insta-box"></div>
              <div class="col-3 mr-2 footer-insta-box"></div>
              <div class="col-3 footer-insta-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-copyright-bg">
      <div class="container d-flex flex-wrap justify-content-between align-items-center">
        <div class="footer-copy-text">
          <p class="text-white m-0">&copy Copyright 2020 KenKata</p>
        </div>
        <div class="footer-payments d-flex mt-3 mt-md-0">
          <div class="payment-1 mr-2">
            <img src="@/assets/img/payment-icons/Mastercard.svg" alt="" class="img-fluid">
          </div>
          <div class="payment-2 mr-2">
            <img src="@/assets/img/payment-icons/Paypal.svg" alt="" class="img-fluid">
          </div>
          <div class="payment-3 mr-2">
            <img src="@/assets/img/payment-icons/Visa.svg" alt="" class="img-fluid">
          </div>
          <div class="payment-4 mr-2">
            <img src="@/assets/img/payment-icons/Payoneer.svg" alt="" class="img-fluid">
          </div>
          <div class="payment-5">
            <img src="@/assets/img/payment-icons/Discover.svg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-bg {
  background: var(--dark-blue);
  border-top: 6px var(--theme-color) solid;
  padding: 5rem 0;
  margin-top: 8rem;
}

.footer h3 {
  font-size: 1.125rem;
}

.footer h5 {
  font-size: 1rem;
}

.footer a:hover {
  color: var(--theme-color) !important;
}

.footer-text-1 {
  font-size: 0.875rem;
  line-height: 2;
}

.footer-social-media {
  position: relative;
}

.footer-social-media p::after {
  content: "";
  position: absolute;
  display: block;
  left: 100px;
  top: 33%;
  width: 46px;
  height: 2px;
  background: var(--theme-color);
}

.footer-insta-box {
  background: #cccccc;
  border-radius: 0.3rem;
  height: 70px;
}

.footer-insta-box:hover {
  background: var(--theme-color);
}

.footer-insta-box:hover {
  background: var(--theme-color);
}

@media (min-width: 768px) {
  .footer-social-media p::after {
    content: "";
    position: absolute;
    display: block;
    right: 110px;
    top: 33%;
    width: 46px;
    height: 2px;
    background: var(--theme-color);
  }
  .footer-insta-box {
    height: 35px;
  }
}

@media (min-width: 1200px) {
  .footer-insta-box {
    height: 70px;
  }
}

.footer-copyright-bg {
  background: #080c24;
  padding: 1.5rem 0;
}
</style>