<template>
  <div class="upper-nav">
    <nav class="navbar nav-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <LanguageAndCurrency />
        <TopLinks />
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageAndCurrency from "./LanguageAndCurrency";
import TopLinks from "./TopLinks";
export default {
  components: {
    LanguageAndCurrency,
    TopLinks,
  },
};
</script>

<style>
.nav-top {
  padding: 0 1rem;
}

.nav-top {
  background: var(--theme-color) !important;
}

.upper-nav .nav-top li a {
  color: white !important;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>