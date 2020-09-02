<template>
  <div>
    <UpperNav />
    <MiddleNav />

    <router-view />
  </div>
</template>


<script>
import UpperNav from "./components/navbar/top/UpperNav";
import MiddleNav from "./components/navbar/middle/MiddleNav";
export default {
  name: "Home",
  components: {
    UpperNav,
    MiddleNav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto:wght@400;500;700&display=swap");

:root {
  --theme-color: #20d3c2;
  --dark-blue: #0e153d;
}

body {
  font-family: "Roboto", sans-serif;
}

p {
  color: var(--dark-blue);
}

.btn-white {
  text-transform: uppercase;
  background-color: white;
  color: var(--theme-color);
  font-weight: 500;
  border: none;
  border-radius: 1.7rem;
  padding: .9rem 1.7rem;
}

.btn-white:hover {
  background-color: #fafafa !important;
  color: var(--theme-color);
}
</style>
