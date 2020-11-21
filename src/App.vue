<template>
  <div id="app" class="pl-md-5 pr-md-5">
    <b-navbar class="main-nav text-center">
      <b-navbar-nav>
        <b-nav-item href="https://github.com/phuochau" target="blank">github</b-nav-item>
        <b-nav-item href="https://www.upwork.com/fl/hauvophuoc" target="blank">upwork</b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/hauvo/" target="blank">linkedin</b-nav-item>
        <b-nav-item href="https://hauvo.medium.com/" target="blank">medium</b-nav-item>
        <b-nav-item href="https://twitter.com/hauvophuoc" target="blank">twitter</b-nav-item>
        <b-nav-item href="mailto:kevinvovn@gmail.com">email</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
    <!-- Footer -->
    <footer class="page-footer font-small blue">

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">I'm coding with ❤️, 🎶 and drinking ☕ when you're reading this page.</div>
      <!-- Copyright -->

    </footer>
    <!-- Footer -->
  </div>
</template>
<style lang="scss">
#app {
  text-align: center;
  font-family: Poppins, sans-serif;
}

h1 {
  font-weight: bold;
  line-height: 1.4 !important;
}

h4 {
  font-weight: bold !important;
}

.text-indigo {
  color: #6610f2;
}

.main-nav {
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  justify-content: center;
  font-weight: 600;
  color: black;

  .nav-item {
    font-size: 0.9rem;
  }
}
</style>