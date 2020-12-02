<template>
  <Layout>
    <div class="container is-desktop">
      <!--<header class="navbar">-->
      <!--<div class="navbar-brand">-->
      <!--<a href="/">-->
      <!--<font-awesome-icon icon="home" />-->
      <!--</a>-->
      <!--</div>-->
      <!--</header>-->

      <main class="columns section">
        <div class="submenu column is-3">
          <aside id="self-img-box" class="box">
            <figure class="image media-content">
              <img id="self-img" alt="self photo" class="is-rounded" src="/images/self.jpg">
            </figure>
          </aside>
          <aside class="box has-text-centered is-size-3">
            <p>Toshi</p>
          </aside>
          <Social/>
          <aside class="menu">
            <p class="menu-label">
              Address
            </p>
            <ul class="menu-list">
              <li>hopping countries</li>
            </ul>
            <p class="menu-label">
              Mail
            </p>
            <ul class="menu-list">
              <li>jgpuauno(at)gmail.com</li>
            </ul>
            <p class="menu-label">
              Profession
            </p>
            <ul class="menu-list">
              <li>Web Service Full-Stack Engineer</li>
              <li>Machine Learning Engineer</li>
            </ul>
            <p class="menu-label">
              Speaking
            </p>
            <ul class="menu-list">
              <li>Japanese</li>
              <li>English</li>
              <li>Spanish(a bit)</li>
              <li>Russian(learning)</li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <about class="content"></about>
        </div>
      </main>
    </div>
  </Layout>
</template>

<script>

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import Social from "../components/Social";
import about from "../md/about.md"
// import marked from 'marked'
import Header from '../mixins/header'

library.add(faHome)

export default {
  mixins: [Header],
  data: () => {
    return {
      meta: {
        title: "About",
        description: "About",
        type: "profile"
      }
    }
  },
  // metaInfo() {
  //   return {
  //     title: "About",
  //     meta: [
  //       { key: `og:type`, property: `og:type`, content: `website` },
  //       {
  //         key: `og:title`,
  //         property: `og:title`,
  //         content: `About`,
  //       },
  //     ],
  //     image: "hoge.png"
  //   }
  // },
  components: {
    FontAwesomeIcon, Social, about
  },
  computed: {
    // about() {
    //   return about
    // }
  }
}
</script>

<style lang="scss">

.box {
  box-shadow: none !important;
}

.box {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.menu-list li {
  padding: 0.5em 0.75em !important;
}

h1 {
  color: $primary-dark !important;
}

/*.container {*/
/*min-height: 100vh;*/
/*display: flex;*/
/*justify-content: center;*/
/*align-items: center;*/
/*text-align: center;*/
/*}*/

/*.title {*/
/*font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; !* 1 *!*/
/*display: block;*/
/*font-weight: 300;*/
/*font-size: 100px;*/
/*color: #35495e;*/
/*letter-spacing: 1px;*/
/*}*/

/*.subtitle {*/
/*font-weight: 300;*/
/*font-size: 42px;*/
/*color: #526488;*/
/*word-spacing: 5px;*/
/*padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*padding-top: 15px;*/
/*}*/
</style>

