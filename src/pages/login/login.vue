<template>
   <div class="login-container"  >
      <div class="login-top"></div>
      <div class="login-center">
        <div class="login-center-box">
          <div class="login-center-title">用户登录</div>
          <div class="input-box" :class="{'warn':error01}">
            <img class="icon" src="@/assets/login/user.png"/>
            <input type="text" v-model="username" id="username" placeholder="请输入用户名"/>
          </div>
          <div class="input-box" :class="{'warn':error02}">
            <img class="icon" src="@/assets/login/password.png"/>
            <input type="password" v-model="password" placeholder="请输入密码"/>
          </div>
          <div class="input-box-02 ">
            <div class="code-input" :class="{'warn':error03}">
              <img class="icon" src="@/assets/login/code.png"/>
               <input type="text" v-model="checkCode" placeholder="请输入验证码"/>
            </div>
            <div class="code-img">
              <img @click="getCode" :src="src"/>
            </div>
          </div>
          <div class="tool-tip" v-text="tool"></div>
          <div class="submit" @click="submit">登录</div>
        </div>
      </div>
   </div>
</template>
<script>
import API from '@/api/login/login'
import dealData from '@/utils/md5/dealData'
export default {
  data () {
    return {
      dealData,
      tool: '',
      error01: false,
      error02: false,
      error03: false,
      username: '',
      password: '',
      checkCode: '',
      src: API.CODE + '?r=' + +Math.random() * 100
    }
  },
  methods: {
    getCode () {
      this.src = API.CODE + '?r=' + +Math.random() * 100
    },
    submit () {
      if (this.username.trim() === '') {
        return false
      }
      if (this.password.trim() === '') {
        return false
      }
      if (this.checkCode.trim() === '') {
        return false
      }
      let {username, password, checkCode} = this
      this.error01 = false
      this.error02 = false
      this.error03 = false
      API.LOGIN(this, {username, password: this.dealData.encryptPwd(password), checkCode})
        .then((res) => {
          let data = res.data
          if (!data.serviceSuccess) {
            let errors = data.errors
            errors.forEach((item) => {
              if (item.msg.indexOf('用户名') > -1) {
                this.error01 = true
              }
              if (item.msg.indexOf('密码') > -1) {
                this.error02 = true
              }
              if (item.msg.indexOf('验证码') > -1) {
                this.error03 = true
                this.getCode()
              }
              this.tool = item.msg
            })
          } else {
            this.$store.commit('SET_isLogin', 1)
            this.$router.push({name: 'entry'})
          }
        })
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.getElementById('username').focus()
      document.addEventListener('keydown', (e) => {
        if (e.which === 13) {
          this.submit()
        }
      })
    })
  }
}
</script>
<style lang="scss">
.login-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 10.80rem;
  width: 43.20rem;
  z-index: 10000;
  background: url('../../assets/login/login-bg.png') no-repeat;
  background-size:100% 100%;
  .login-top {
    width: 100%;
    height: 1.76rem;
    background: url('../../assets/login/top.png') no-repeat;
    background-size:100% 100%;
  }
  .login-center {
    position: absolute;
    left: 14.62rem;
    top: 1.95rem;
    width: 13.97rem;
    height: 6.56rem;
    background: url('../../assets/login/center-bg.png') no-repeat;
    background-size:100% 100%;
    .login-center-box {
      position: absolute;
      top: 1.13rem;
      width: 4.0rem;
      right: 0.8rem;
      .login-center-title {
        text-align: center;
        font-size:0.26rem;
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(226,250,254,1);
        padding-bottom: 0.27rem;
        box-sizing: border-box;
        border:0.01rem solid transparent;
      }
      .input-box {
        width: 3.97rem;
        height: 0.47rem;
        background:rgba(5,30,62,0.6);
        border:0.01rem solid rgba(110,233,255,1);
        margin-top: 0.35rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        .icon {
          width: 0.20rem;
          height: 0.20rem;
          margin-left: 0.15rem;
        }
        input {
          width: 3.0rem;
          height: 0.35rem;
          line-height: 0.35rem;
          margin-left: 0.15rem;
          border: none;
          font-size: 0.18rem;
          color: #47B3E5;
          letter-spacing: 0.01rem;
          background: rgba(5,30,62,0)
        }
      }
      .input-box-02 {
        width: 3.97rem;
        height: 0.47rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0.35rem;
        .code-input {
          width: 2.77rem;
          height: 0.47rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          background:rgba(5,30,62,0.6);
           border:0.01rem solid rgba(110,233,255,1);
          .icon {
            width: 0.20rem;
            height: 0.20rem;
            margin-left: 0.15rem;
          }
           input {
            width: 2.0rem;
            height: 0.35rem;
            line-height: 0.35rem;
            margin-left: 0.15rem;
            border: none;
            font-size: 0.18rem;
            color: #47B3E5;
            letter-spacing: 0.01rem;
            background: rgba(5,30,62,0)
          }
        }
         .code-img {
            width: 1.07rem;
            height: 0.47rem;
            margin-left: 0.13rem;
            cursor: pointer;
            img {
              width: 1.07rem;
              height: 0.47rem;
            }
         }
      }
     .submit {
       width: 2.28rem;
       height: 0.68rem;
       text-align: center;
       line-height: 0.68rem;
       font-size: 0.20rem;
       color: #FFFFFF;
       background: url('../../assets/login/login.png') no-repeat;
       background-size:100% 100%;
       margin: 0.50rem auto 0 auto;
       cursor: pointer;
     }
    }
  }
  input::placeholder{
   color: #47B3E5;
 }
 .tool-tip {
    margin-top: 0.2rem;
    color: #E12929;
    font-size: 0.16rem;
    font-weight: 600;
 }
 .warn {
   border: 0.01rem solid #E12929!important;
 }
}
</style>
