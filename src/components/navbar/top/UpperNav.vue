<template>
  <div class="upper-nav">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
.navbar {
  padding: 0 1rem;
}

.navbar-dark {
  background: var(--theme-color) !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
}

.navbar-expand-lg .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
</style>