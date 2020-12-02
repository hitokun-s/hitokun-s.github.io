<template>
  <div>
    <Header></Header>
    <slot/>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    Header, Footer
  },
  metaInfo() {
    console.log(this)
    return {
      titleTemplate: "%s - Hitokun's",
      meta: [
        { property: `og:locale`, content: `en_EN` },
        {name: 'author', content: 'Toshi'},
        { key: `og:type`, property: `og:type`, content: `website` },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: `Hitokun's`,
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `Hitokun's`,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content: `https://hitokun-s.github.io/images/${this.meta?.image || "self.jpg"}`,
        },
      ]
    }
  }
}
</script>

<!--<static-query>-->
<!--query {-->
<!--metadata {-->
<!--siteName-->
<!--}-->
<!--}-->
<!--</static-query>-->

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
