const o=(e,t)=>({htmlAttrs:{lang:"en"},title:t.title||"Hitokun's",meta:[{name:"description",content:t.description||"Hitokun's"},{key:"og:description",property:"og:description",content:t.description||"Hitokun's"},{property:"og:site_name",content:t.title||"Hitokun's"},{property:"og:title",content:t.title||"Hitokun's"},{property:"og:type",content:t.type||"article"},{key:"og:image",property:"og:image",content:`https://hitokun-s.github.io/images/${t.image||"self.jpg"}`},{property:"og:url",content:`https://hitokun-s.github.io${e.$route.fullPath}`},{name:"twitter:card",content:t.twittercard||"summary"},{name:"twitter:site",content:"@hitokun-s"},{property:"fb:app_id",content:"362864550832043"}]});export{o as m};
