<template>
  <div>
    <UpperNav />
    <MiddleNav />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import UpperNav from "./components/navbar/top/UpperNav";
import MiddleNav from "./components/navbar/middle/MiddleNav";
import Footer from "./components/footer/Footer";

export default {
  name: "Home",
  components: {
    UpperNav,
    MiddleNav,
    Footer,
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

.theme-color {
  color: var(--theme-color);
}

/* BUTTONS */

.btn-white {
  text-transform: uppercase;
  background-color: white;
  color: var(--theme-color);
  font-size: 1.25rem;
  font-weight: 500;
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 2rem;
}

.btn-white:hover {
  background-color: #fafafa !important;
  color: var(--theme-color);
}

.btn-dark-custom {
  background: var(--dark-blue);
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.9rem 2rem;
  border-radius: 2rem;
}

.btn-blog {
  padding: 0rem 0.5rem;
  border-radius: 0;
}

.btn-theme-color {
  background: var(--theme-color);
  color: white;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
}

.btn-theme-color:hover {
  background: var(--theme-color);
  color: #eeeeeeee;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
}
</style>
