<template>
  <div class="container section-headline text-center">
    <h2 class="text-uppercase">
      {{ sectionHeadline.headline }}
      <span class="headline-green">{{ sectionHeadline.headlineGreen }}</span>
    </h2>
    <img src="@/assets/img/headline/headline-underline.svg" alt />
    <p class="mt-3">{{ sectionHeadline.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["sectionHeadline"],
};
</script>

<style scoped>
.section-headline {
  margin-top: 7rem;
}

.section-headline h2 {
  font-family: "Play", sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
}

.section-headline span {
  color: var(--theme-color);
}
</style>