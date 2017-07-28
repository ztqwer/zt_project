<template>

    <div>
      <div>
        <!--//加载完成前动画-->
        <div class="ajax-wrap">
          <p class="ajax-cont">
            <span class="ajaxpng Rotation"></span><span class="ajaxTxt">正在请求,请稍后…</span>
          </p>
        </div>
        <div class="border-all"></div>
        <div class="wrap">
          <form>
            <div style="padding-top: 0.2rem; border-bottom:solid 1px #e1e1e1 ;">
              <div class="common_group">
                <label>新密码</label>
                <div class="input_wrap">
                  <input type="password" v-if="showPassword" @keyup="checkinput($event)" v-model="passWord" class="btnstyle" style="width: 4rem;" placeholder="必须由8-20位字母及数字组成" maxlength="20" minlength="8"/>
                  <input type="text" v-else v-model="passWord" @keyup="checkinput($event)" class="btnstyle" style="width: 4rem;" placeholder="必须由8-20位字母及数字组成" maxlength="20" minlength="8"/>
                </div>
                <div :class="showBtn" @click="showPass"></div>
              </div>
            </div>
            <div :class="submitBtn" @click="goNext">修改</div>
          </form>
        </div>
      </div>
      <warn></warn>
    </div>

</template>
<script>
  import warn from './common/warn.vue';
  import {mapActions} from 'vuex';
  export default{
      data(){
          return {
            passWord:null,
            showPassword:true,
            inputType:"password",
            showBtn:"showBtn",
            submitBtn:"submitBtn",
            isShow:false,
            isShowText:"ssssssss",
            countdownW:2
          }
      },

      methods:{
        ...mapActions(['showWarnHtml']),
        showPass(){
            if(this.showPassword){
              this.showPassword=false;
              this.showBtn="hideBtn";
            }else if(!this.showPassword){
              this.showPassword=true;
              this.showBtn="showBtn";
            }

        },
        checkinput(obj){
           if(this.passWord!=""){
               this.submitBtn="btnCss"
           }else{
             this.submitBtn="submitBtn"
           }
        },
        goNext(){
          this.checkNull();
        },
        checkNull(){
            if(this.passWord == "" || this.passWord == null){
              this.showWarnHtml("密码不能为空");
            }else{
              this.isShow=false;
                this.isShowText="";
            }

        },

      },

    components:{
      warn
    }

  }


</script>

<style scoped lang="css">

  body {
    font: 0.12rem 'Hiragino Sans GB', '冬青黑', 'Microsoft YaHei', YaHei, Arial, Helvetica, sans-serif;
    background: #f7f8fa; }
  /* 设置滚动条的样式 */::-webkit-scrollbar {width: 0px;height:30px}
  /* 滚动槽 *//*::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);   border-radius: 10px;}*//* 滚动条滑块 */
  ::-webkit-scrollbar-thumb{border-radius: 10px;background: #fff;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);}
  ::-webkit-scrollbar-thumb:window-inactive {background: #fff;}

  .wrap{
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .common_group {
    width: 100%;
    height: 0.88rem;
    padding: 0 0.2rem;
    background: #fff;
    border-top:solid 1px #e1e1e1 ;
  }
  .common_group label {
    color: #4c4c4c;
    font-size: 0.28rem;
    line-height: 0.88rem;
    font-weight: normal;
    width: 1.3rem;
    display: block;
    float: left;
  }
  .input_wrap {
    width: auto;
    float: left;
    height: 0.88rem;

  }
  .common_group input {
    outline: 0;
    width: auto;
    font-size: 0.28rem;
    line-height: 0.88rem;
    height: 0.88rem;
    color: #808080;

  }
  input::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  input::-moz-placeholder {
    color: #bfbfbf;
  }

  input::-ms-input-placeholder {
    color: #bfbfbf;
  }
  .showBtn{
    width: 0.6rem;
    height: 0.6rem;
    float: right;
    background: url(../assets/img/newshow.png) no-repeat;
    background-size: cover;
    margin-top: 0.14rem;
  }
  .hideBtn{
    width: 0.6rem;
    height: 0.6rem;
    float: right;
    background: url(../assets/img/newhide.png) no-repeat;
    background-size: cover;
    margin-top: 0.14rem;
  }

  .submitBtn{
    width: auto;
    margin: 0 0.2rem;
    background: #ccc;
    border-radius: 0.38rem;
    color: #fff;
    line-height: 0.76rem;
    height: 0.76rem;
    font-size: 0.34rem;
    text-align: center;
    margin-top: 0.7rem;
  }
  .btnCss {
    width: auto;
    margin: 0 0.2rem;
    background: #ff7437;
    border-radius: 0.38rem;
    color: #fff;
    line-height: 0.76rem;
    height: 0.76rem;
    font-size: 0.34rem;
    text-align: center;
    margin-top: 0.7rem;
  }


</style>
