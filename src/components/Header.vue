<template>

  <header class="navbar container is-desktop">
    <div class="navbar-brand">
      <a class="navbar-item is-size-3 has-text-weight-bold has-text-primary" href="/">
        <font-awesome-icon icon="home"/>
        Hitokun's
      </a>
    </div>

    <!--<div class="navbar-end">-->
    <!--<div class="navbar-item">-->
    <!--<a href="/">Home</a>-->
    <!--</div>-->
    <!--<div class="navbar-item">-->
    <!--<a href="/about">About</a>-->
    <!--</div>-->
    <!--</div>-->

    <div class="navbar-end tabs">
      <ul>
        <li v-bind:class="{ 'is-active': path == 'index' }"><a href="/">Home</a></li>
        <li v-bind:class="{ 'is-active': path == 'about' }"><a href="/about">About</a></li>
        <li><a href="/old/demo">Demo</a></li>
        <li><a href="/old/project">TimeMachine</a></li>
      </ul>
    </div>

  </header>

  <!--<nav class="navbar container is-desktop" role="navigation" aria-label="main navigation">-->
  <!--<div class="navbar-brand">-->
  <!--<a class="navbar-item" href="https://bulma.io">-->
  <!--<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">-->
  <!--</a>-->

  <!--<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">-->
  <!--<span aria-hidden="true"></span>-->
  <!--<span aria-hidden="true"></span>-->
  <!--<span aria-hidden="true"></span>-->
  <!--</a>-->
  <!--</div>-->

  <!--<div id="navbarBasicExample" class="navbar-menu">-->
  <!--<div class="navbar-start">-->
  <!--<a class="navbar-item" href="/">-->
  <!--Home-->
  <!--</a>-->

  <!--<a class="navbar-item" href="/about">-->
  <!--About-->
  <!--</a>-->

  <!--<div class="navbar-item has-dropdown is-hoverable">-->
  <!--<a class="navbar-link">-->
  <!--More-->
  <!--</a>-->

  <!--<div class="navbar-dropdown">-->
  <!--<a class="navbar-item">-->
  <!--menu1-->
  <!--</a>-->
  <!--<a class="navbar-item">-->
  <!--menu2-->
  <!--</a>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

  <!--<div class="navbar-end">-->
  <!--<div class="navbar-item">-->
  <!--<div class="buttons">-->
  <!--<div class="field">-->
  <!--<input class="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" checked="checked">-->
  <!--<label for="exampleRadioInline1">日本語</label>-->
  <!--<input class="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline">-->
  <!--<label for="exampleRadioInline2">English</label>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <!--</nav>-->

</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {faHome} from '@fortawesome/free-solid-svg-icons'

  library.add(faHome);

  export default {
    name: "Header",
    components: {
      FontAwesomeIcon
    },
    methods:{
    },
    computed:{
      path(){
        return this.$router.currentRoute.name
      }
    }
  }
</script>

<style lang="scss">

  .navbar-brand svg {
    width: 34px;
  }

  .tabs ul {
    border-bottom-style: none !important;
    li:not(.is-active) a{
      border:none;
    }
  }

</style>

