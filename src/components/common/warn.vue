<template>

  <div>
    {{warnHtml}}
    <p v-show="isShowWarnx" class="warntxt" v-html="warnHtml"></p>
  </div>
</template>
<script>

  import {mapGetters,mapActions} from 'vuex'
  export default{

      data(){
          return{
            countdownW:2, //倒计时秒数
          }
      },
      computed:{
        ...mapGetters([
            'warnHtml','isShowWarnx'
        ])
      },
      methods:{
        settimeWarn(){
          let _self = this;
          if(this.countdownW == 0) {
            this.isShowWarnx=false;
            this.countdownW = 2;
            return false;
          }else{
            this.countdownW--;
          }
          setTimeout(function () {
            _self.settimeWarn();
          },1000);
        }
      }
  }

</script>
