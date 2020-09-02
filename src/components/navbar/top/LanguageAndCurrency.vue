<template>
  <!-- FIX DROPDOWN MENU -->

  <ul class="navbar-nav flex-row">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle ml-0 pl-0"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        ENG
        <i class="fas fa-chevron-down ml-1"></i>
      </a>

      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">SWE</a>
      </div>
    </li>

    <li class="nav-item dropdown border-right border-white pr-2">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        USD
        <i class="fas fa-chevron-down ml-1"></i>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="#">EUR</a>
        <a class="dropdown-item" href="#">SEK</a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
</style>