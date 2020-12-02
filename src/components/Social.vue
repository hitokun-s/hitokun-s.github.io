<template>
  <div>
    <section class="hero">

      <div class="social">
        <ul>
          <li>
            <a href="https://github.com/hitokun-s/">
              <font-awesome-icon :icon="['fab', 'github']"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ginyu_pro">
              <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hitoshi.wada.5">
              <font-awesome-icon :icon="['fab', 'facebook']"/>
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/2994709/toshi">
              <font-awesome-icon :icon="['fab', 'stack-overflow']"/>
            </a>
          </li>
        </ul>
      </div>

    </section>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  import {
    faFacebook,
    faGithub,
    faStackOverflow,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons'

  library.add(faGithub, faTwitter, faFacebook, faStackOverflow)

  export default {
    name: "Social",
    components: {FontAwesomeIcon},
    props: {}
  }
</script>

<style lang="scss">

  .social {

    text-align: center;
    font-size: 1.5rem;
    padding: 1.5rem 0 !important;

    ul {
      display: inline;
      list-style: none;

      li {
        display: inline-block;
        list-style: none;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
    }
  }
</style>

