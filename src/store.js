import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "지유", email: "jiyu@korea.com", password: "123456" },
      { id: 2, name: "소유", email: "soyu@korea.com", password: "123456" }
    ],
    isLogin: false,
    loginFail: false
  },
  //state 값을 변화
  mutations: {
    // 로그인이 성공했을 때
    loginSuccess(state) {
      state.isLogin = true
      state.loginFail = false
    },
    // 로그인이 실패했을 때
    loginFail(state) {
      state.loginFail = true
      state.isLogin = false
    }
  },
  //비지니스 로직
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      // //전체 유저에서 해당 이메일 유저를 찾는다
      let selectedUser = null

      state.allUsers.forEach(user => {
        if (user.email === loginObj.sEmail) selectedUser = user
      })

      // 찾은 유저의 비밀번호 입력된 값과 비교한다
      if (selectedUser === null) commit("loginFail")
      else {
        selectedUser.password !== loginObj.sPass
          ? commit("loginFail") //alert("입력하신 이메일과 비밀번호 일치하지 않습니다.")
          : commit("loginSuccess") // 성꽁
      }
    }
  }
})
