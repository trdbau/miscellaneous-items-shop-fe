<template>
  <div class="site-navbar bg-white py-2">
    <div class="search-wrap">
      <div class="container">
        <a
          href="#"
          class="search-close js-search-close"
        >
          <span class="icon-close2" />
        </a>
        <form
          action="#"
          method="post"
        >
          <input
            type="text"
            class="form-control"
            placeholder="Search keyword and hit enter..."
          >
        </form>
      </div>
    </div>

    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo">
          <div class="site-logo">
            <a
              href="#"
              class="js-logo-clone"
            >Dealers</a>
          </div>
        </div>
        <div class="main-nav d-none d-lg-block">
          <nav
            class="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul class="site-menu js-clone-nav d-none d-lg-block">
              <li class="has-children active">
                <a href="#">Collection</a>
                <ul class="dropdown">
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Children</a></li>
                  <li class="has-children">
                    <a href="#">Sub Menu</a>
                    <ul class="dropdown">
                      <li><a href="#">Men</a></li>
                      <li><a href="#">Women</a></li>
                      <li><a href="#">Children</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li><a href="#">Shop</a></li>
              <li><a href="#">Catalogs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="icons">
          <a
            href="#"
            class="icons-btn d-inline-block js-search-open"
          >
            <span class="icon-search" />
          </a>
          <a
            href="#"
            class="icons-btn d-inline-block"
          >
            <span class="icon-heart-o" />
          </a>
          <a
            href="#"
            class="icons-btn d-inline-block bag"
          >
            <span class="icon-shopping-bag" />
            <span class="number">2</span>
          </a>
          <a
            href="#"
            class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
          >
            <span class="icon-menu" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {},
  data() {
    return {};
  },
};
</script>
