<template>
<v-container fill-height style="max-width:450px">
    <v-layout align-center row wrap>
        <v-flex xs12>
            <v-alert class="mb-3" :value="loginFail" type="error">
             로그인 오류 !!!
            </v-alert>
            <v-alert class="mb-3" :value="isLogin" type="success">
             로그인 성공 !!!
            </v-alert>
            <v-card>
            <v-toolbar flat>
                <v-toolbar-title>로그인</v-toolbar-title>
            </v-toolbar> 
            <div class="pa-3">
                <v-text-field
                    v-model="email"
                    label="이메일을 입력하세요"
                ></v-text-field>            
                <v-text-field
                    v-model="password"
                    type="password"
                    label="패스워드를 입력하세요"
                ></v-text-field>   
                <v-btn
                color="deep-purple lighten-3"
                depressed
                block
                large
                @click="login({
                    sEmail:email,
                    sPass:password
                })"
                >로그인</v-btn>
            </div>               
          </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>


<script>
import {mapState,mapActions} from 'vuex'

export default {
    data(){
        return{
            email:null,
            password:null,
            //isError : false,
            //loginSuccess: false
        }
    },
    computed:{
        ...mapState(['isLogin','loginFail'])
    },
    methods:{
        // store.js Actions 에 정의 되어 있는메서드명..
        ...mapActions(["login"]),
        // login(){
        //     // //전체 유저에서 해당 이메일 유저를 찾는다
        //     // let selectedUser = null

        //     // this.allUsers.forEach(user =>{
        //     //     if(user.email === this.email) selectedUser = user
        //     // })            

        //     // // 찾은 유저의 비밀번호 입력된 값과 비교한다
        //     // if(selectedUser === null) this.isError = true //alert("입력하신 이메일이 없습니다.")
        //     // else{
        //     //     selectedUser.password !== this.password
        //     //     ? this.isError = true
        //     //     //alert("입력하신 이메일과 비밀번호 일치하지 않습니다.")
        //     //     : this.loginSuccess = true //alert(selectedUser.name + "님 로그인 성공 하였습니다.")
        //     // }
        
        // }
    }
    
}
</script>
