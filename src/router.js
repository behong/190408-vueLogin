import Vue from "vue"
import Router from "vue-router"

import store from "./store"

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    //이미 로그인된 유저
    alert("이미 로그인된 유저")
    next("/")
  } else {
    next()
  }
}
// 로그인 안했을때 가드
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    alert("로그인 필요합니다.")
    next("/")
  } else {
    next()
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser, //router 들어오기전 체크 !!
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Login.vue")
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser, // 인증된 사람만 ...
      component: () =>
        import(/* webpackChunkName: "mypage" */ "./views/Mypage.vue")
    }
  ]
})
