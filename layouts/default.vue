<template>
  <div id="app" class="pl-md-5 pr-md-5">
    <b-navbar class="main-nav text-center pb-0">
      <b-navbar-nav>
        <b-nav-item to="/">home</b-nav-item>
        <b-nav-item to="/about">about</b-nav-item>
        <b-nav-item href="mailto:kevinvovn@gmail.com">email</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <b-navbar class="main-nav text-center pt-0">
      <b-navbar-nav>
        <b-nav-item href="https://github.com/phuochau" target="blank"
          >github</b-nav-item
        >
        <b-nav-item href="https://www.upwork.com/fl/hauvophuoc" target="blank"
          >upwork</b-nav-item
        >
        <b-nav-item href="https://www.linkedin.com/in/hauvo/" target="blank"
          >linkedin</b-nav-item
        >
        <b-nav-item href="https://hauvo.medium.com/" target="blank"
          >medium</b-nav-item
        >
        <b-nav-item href="https://twitter.com/hauvophuoc" target="blank"
          >twitter</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <Nuxt />
    <footer class="container page-footer font-small pl-md-5 pr-md-5">
      <div class="footer-copyright text-center py-3">
        I'm coding with ❤️, 🎶 and drinking ☕ when you're reading this page.
        <br />This page was built with <a href="https://vuejs.org/">VueJS</a>,
        <a href="https://nuxtjs.org/">NuxtJS</a> and
        <a href="https://ghost.org/">Ghost</a>. Thank you
        <a href="https://www.netlify.com/">Netlify</a> and
        <a href="https://heroku.com/">Heroku</a> for free hostings.
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  font-family: Poppins, sans-serif;
  min-height: 100%;
}

.section {
  margin-top: 8rem;
  margin-bottom: 8rem;
}

h1 {
  font-weight: bold;
  line-height: 1.4 !important;
}

h4 {
  font-weight: bold !important;
}

a {
  color: #6610f2;

  &:hover {
    color: #6610f2;
  }
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
