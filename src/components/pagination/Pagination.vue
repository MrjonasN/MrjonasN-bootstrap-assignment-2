<template>
  <div class="d-flex justify-content-center mt-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">8</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">9</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">10</a>
        </li>
        <li class="page-item">
          <a class="page-link">...</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">24</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">25</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">26</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-item.active .page-link {
  z-index: 3;
  color: var(--theme-color);
  background-color: transparent;
  border: none;
}

.page-link i {
  font-size: 2.2rem;
  padding: 1rem 1.4rem;
  border: 2px solid #e3e3e3;
  border-radius: 50% !important;
  color: #E3E3E3;
}

.page-link i:hover {
  background: var(--theme-color) !important;
  border: transparent !important;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: black;
  background-color: #fff;
  border: none;
}


</style>