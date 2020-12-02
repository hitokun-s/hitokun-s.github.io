const c1 = () => import(/* webpackChunkName: "page--src-pages-viz-kyusyu-at-night-vue" */ "C:\\Users\\jgpua\\Dropbox\\dev\\github\\mysite\\src\\pages\\viz\\kyusyu-at-night.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\jgpua\\Dropbox\\dev\\github\\mysite\\src\\pages\\about.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\jgpua\\Dropbox\\dev\\github\\mysite\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\jgpua\\Dropbox\\dev\\github\\mysite\\src\\pages\\index.vue")

export default [
  {
    path: "/viz/kyusyu-at-night/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
