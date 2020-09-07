<template>
  <div class="item">
    <div class="blog-block">
      <div class="blog-peek"></div>
      <div class="blog-info">
        <div class="blog-date">
          <h5 class="m-0 p-0">29</h5>
          <p class="m-0 p-0">mar</p>
        </div>
        <div class="blog-text mt-4">
          <p class="text-white">
            By
            <a href="#">Adam Moore</a>
          </p>
          <p class="theme-color w-75">
            A beautiful scenery in the
            world we are missing
          </p>
          <div class="btn-group mt-2">
            <button class="btn btn-outline-light btn-blog mr-2">Travel</button>
            <button class="btn btn-outline-light btn-blog">Fashion</button>
          </div>
          <div class="read-more mt-4">
            <button class="btn btn-white btn-blog-lg">Read more</button>
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
.blog-block {
  position: relative;
}

.blog-peek {
  background: #ccc;
  width: 19rem;
  height: 28rem;
  border-radius: 0.5rem;
}

.blog-info {
  position: absolute;
  top: 10%;
  left: 24%;
  background: var(--dark-blue);
  border-radius: 0.5rem;
  display: inline-block;
  padding: 0 0 2rem 2rem;
  max-width: 70%;
}

@media (min-width: 768px) {
  .blog-info {
    max-width: 45%;
    top: 12%;
    left: 40%
  }
  
  .blog-peek {
      width: 24rem;
  }
}

@media (min-width: 992px) {
  .blog-info {
    min-width: 56%;
  }

  .blog-peek {
    width: 21rem;
    height: 28rem;
  }
}

.blog-date {
  text-align: center;
  background: var(--theme-color);
  display: inline-block;
  padding: 0.6rem 0.7rem;
}

.blog-text a {
  color: white;
  text-decoration: underline;
}

.theme-color {
  font-weight: 500;
}

.blog-date h5 {
  font-family: "Play", sans-serif;
  color: white;
  font-weight: 700;
  font-size: 2.25rem;
}
.blog-date p {
  text-transform: uppercase;
  color: white;
}

.btn-blog {
  padding: 0rem 0.5rem;
  border-radius: 0;
}

.btn-blog-lg {
  font-size: 1rem;
  padding: 0.5rem 1.3rem;
}

</style>
