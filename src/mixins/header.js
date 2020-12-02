export default {
  metaInfo() {
    console.log(this.$route)
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: (this.meta && this.meta.title) || "Hitokun's",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            (this.meta && this.meta.description) || "Hitokun's"
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            (this.meta && this.meta.description) || "Hitokun's"
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: (this.meta && this.meta.title) || "Hitokun's"
        },
        {
          hid: 'og:title',
          propery: 'og:title',
          content: (this.meta && this.meta.title) || "Hitokun's"
        },
        {
          hid: 'og:type',
          propery: 'og:type',
          content: (this.meta && this.meta.type) || 'article'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://hitokun-s.github.io/images/${this.meta && this.meta.image || "self.jpg"}`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://hitokun-s.github.io${this.$route.fullPath}`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: this.meta && this.meta.twittercard || "summary"
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: "@hitokun-s"
        },
      ]
    }
  }
}
