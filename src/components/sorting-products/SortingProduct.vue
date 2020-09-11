<template>
  <div class="sorting-product-bg">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-lg-2">
          <div class="shop-nav">
            <h5 class="theme-color">Shop</h5>
            <div class="nav-page d-flex align-items-center">
              <router-link to="/" exact>Home</router-link>
              <span class="mx-2">/</span>
              <router-link to="/shop" exact>Shop</router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-10">
          <div
            class="shop-sorting mt-0 mt-md-3 mt-lg-0 d-flex flex-wrap justify-content-md-start justify-content-lg-end align-items-md-center"
          >
            <div
              class="sort-products-quantity mt-4 mt-md-0 mr-4 d-flex align-items-center px-4 py-3 text-white"
            >
              <p class="text-white my-0">Show:</p>
              <div class="nav nav-show">
                <a class="nav-link text-white py-0 px-1" href="#">9</a>/
                <a class="nav-link text-white py-0 px-1" href="#">12</a>/
                <a class="nav-link text-white py-0 px-1" href="#">18</a>/
                <a class="nav-link text-white py-0 px-1" href="#">24</a>
              </div>
            </div>
            <div class="sort-grid mr-4 my-3 my-md-0 d-flex align-items-center px-4 py-3">
              <img src="@/assets/img/sorting-icons/column-icon.svg" class="mr-3 ml-2" alt />
              <img src="@/assets/img/sorting-icons/grid-lg-icon.svg" class="mr-3" alt />
              <img src="@/assets/img/sorting-icons/grid-sm-icon.svg" class="mr-2" alt />
            </div>

            <div class="sorting mr-4 d-flex align-items-center">
              <div class="dropdown">
                <a
                  class="btn btn-dark-custom px-4 py-3 color-wh dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Default sorting
                  <i class="fas fa-chevron-down theme-color ml-5"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
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
export default {};
</script>

<style scoped>
.sorting-product-bg {
  margin-top: 5rem;
  background: #f6f6f6;
  padding: 2rem 0;
}

.shop-nav h5 {
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-page a {
  color: black;
}

.router-link-active {
  color: grey !important;
}

.shop-sorting > div {
  background: var(--dark-blue);
  border-radius: 0.5rem;
}

.dropdown-toggle::after {
  display: none;
}

.btn-dark-custom {
  color: white;
  font-size: 1rem;
  font-weight: 400;
}

/* .sorting i {
  color: ;
} */
</style>