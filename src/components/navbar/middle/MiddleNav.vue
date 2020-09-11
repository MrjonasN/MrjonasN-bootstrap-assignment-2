<template>
  <div class>
    <div class="container">
      <nav
        class="navbar nav-middle navbar-expand-lg navbar-light bg-light d-flex justify-content-md-between order-1 order-md-1"
      >
        <router-link to="/" class="navbar-brand m-0">
          <img src="@/assets/img/logo/Logo.svg" alt="logo" class="img-fluid" />
        </router-link>

        <form class="form-inline order-3 order-md-2 flex-nowrap mt-3 mt-md-4 mx-sm-auto">
          <input
            class="form-control nav-search border-right-0"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />

          <div class="dropdown">
            <button
              class="btn btn-link border dropdown-toggle text-dark rounded-0 d-none d-lg-block"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
              <i class="fas fa-chevron-down ml-4"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <button class="btn btn-success nav-search-btn" type="submit">
            <img src="@/assets/img/nav/Search-icon.svg" />
          </button>
        </form>

        <ul
          class="navbar-nav nav-icons d-flex flex-row align-items-center order-2 order-md-3 order-lg-3"
        >
          <li class="nav-item d-flex mr-lg-3">
            <a class="nav-link" href="#">
              <img src="@/assets/img/nav/User-icon.svg" alt="user" />
              <span class="d-none d-xl-inline ml-2">My account</span>
            </a>
          </li>
          <li class="nav-item mr-1">
            <a class="nav-link" href="#">
              <img src="@/assets/img/nav/Heart-icon.svg" alt="heart" />
              <span class="badge badge-pill badge-primary"></span>
            </a>
          </li>
          <li class="nav-item mr-1">
            <a class="nav-link" href="#">
              <img src="@/assets/img/nav/Compare-icon.svg" alt="compare" />
              <span class="badge badge-pill badge-primary badge-compare">0</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src="@/assets/img/nav/Bag-icon.svg" alt="cart" />
              <span class="badge badge-pill badge-primary badge-cart">0</span>
              <span class="ml-3">$0.00</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="border-top pb-2 pb-lg-0"></div>

    <nav class="navbar nav-bottom navbar-expand-lg navbar-light bg-link container py-0">
      <button
        class="navbar-toggler border-0 mb-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="text-dark mr-3">Menu</span> -->
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown mr-2 mr-lg-0" id="nav-categories">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="@/assets/img/nav/Hamburger-menu.svg" alt="menu" class="mr-1" />
              Browse Categories
              <i class="fas fa-chevron-down text-white ml-4"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Home</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
              <i class="fas fa-chevron-down ml-1"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/shop" class="dropdown-item" role="button">All Clothing</router-link>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
              <i class="fas fa-chevron-down ml-1"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
              <i class="fas fa-chevron-down ml-1"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
              <i class="fas fa-chevron-down ml-1"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-success btn-nav-bottom" type="submit">SPECIAL OFFER</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-brand {
  width: 35%;
}

@media (min-width: 768px) {
  .navbar-brand {
    width: inherit;
  }
}

.navbar-toggler-icon{
    font-size: 1.3em;
}

.nav-middle {
  padding: 1.5rem 0;
  background: none !important;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--dark-blue) !important;
}

::placeholder {
  color: #aaa;
}

.input-group {
  padding: 0rem 4rem;
}

.nav-search {
  font-size: 0.875rem;
  border: 1px solid #e3e3e3;
  border-radius: 2rem 0rem 0rem 2rem;
  padding: 1.3rem 5rem 1.3rem 2rem;
}

@media (min-width: 768px) {
  form {
    margin-top: 0rem !important;
  }

  .nav-search {
    font-size: 0.875rem;
    border: 1px solid #e3e3e3;
    border-radius: 2rem 0rem 0rem 2rem;
    padding: 1.3rem 1rem 1.3rem 2rem;
  }
}

@media (min-width: 992px) {
  .nav-search {
    padding: 1.3rem 5rem 1.3rem 2rem;
  }
}

.dropdown-toggle::after {
  display: none;
}

.dropdown button {
  padding: 0.54rem 1rem;
  text-decoration: none;
}

.dropdown i {
  color: var(--theme-color);
}

.nav-search-btn {
  background: var(--theme-color);
  border: none;
  border-radius: 0 4rem 4rem 0;
  padding: 0.6rem 1rem;
}

.nav-icons .nav-item {
  position: relative;
  z-index: -1;
}

.nav-item .badge-compare {
  background: var(--theme-color);
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
}

.nav-item .badge-cart {
  background: var(--theme-color);
  position: absolute;
  top: 0px;
  right: 3.1rem;
  z-index: 1;
}

.nav-bottom ul li {
  padding: 0 0.5rem;
  font-size: 1.125rem;
}

@media (min-width: 992px) {
  .nav-bottom ul li {
    padding: 0;
    font-size: 1.125rem;
  }
}

@media (min-width: 1200px) {
  .nav-bottom ul li {
    padding: 0 0.5rem;
    font-size: 1.125rem;
  }
}

.nav-bottom ul li a:hover {
  border-bottom: 3px solid var(--theme-color);
}

#nav-categories {
  background: var(--theme-color) !important;
  padding: 0.2rem 0.5rem;
}

#nav-categories a {
  color: white !important;
}

#nav-categories .dropdown-menu a {
  color: var(--dark-blue) !important;
}

.btn-nav-bottom {
  background: var(--theme-color);
  border: none;
  padding: 0.3rem 1rem;
  border-radius: 2rem;
}
</style>