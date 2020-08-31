<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto:wght@400;500;700&display=swap");

:root {
  --theme-color: #20d3c2;
  --dark-blue: #0E153D; 
}

body {
  font-family: "Roboto", sans-serif;
}
</style>
