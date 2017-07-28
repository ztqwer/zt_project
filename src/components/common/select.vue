<template>

  <div>
    <div class="common_group ">
      <!--<label>还款方式</label>-->
      <slot></slot>
      <div class="input_wrap">
        <input type="text" class="btnstyle" @click="tankuang" placeholder="等额本金，按月还本付息"  v-model="tankuangtext"/>
        <div class="selectS"></div>
      </div>
    </div>

  </div>


</template>


<script>

    import IosSelect from 'iosselect';
    import {mapGetters} from 'vuex'
    export default{
        data(){
          return {
            tankuangtext:"xxxxxxxx"
          }
        },
        computed:{
          ...mapGetters([])
        },
        methods:{
//          tankuang(){
//            let _self = this;
//            new IosSelect(1, [[{"id":"1","value":"我是人工智能"}]], {
//              callback: function(selectOneObj) {
//                        alert(1)
//              }
//            });
//          },

          tankuang:()=>{
            new IosSelect(1, [[{"id":"1","value":"我是人工智能"}]], {
              callback: function(selectOneObj) {
                  alert(selectOneObj.value);
                  console.log(this)
                  this.tankuangtext=selectOneObj.value;
              }
            });
          }
        }
    }

</script>


<style lang="css" scoped>

  @import "../../assets/css/iosSelect.css";
  body {
    font: 0.12rem 'Hiragino Sans GB', '冬青黑', 'Microsoft YaHei', YaHei, Arial, Helvetica, sans-serif;
    background: #f7f8fa; }
  /* 设置滚动条的样式 */::-webkit-scrollbar {width: 0px;height:30px}
  /* 滚动槽 *//*::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);   border-radius: 10px;}*//* 滚动条滑块 */
  ::-webkit-scrollbar-thumb{border-radius: 10px;background: #fff;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);}
  ::-webkit-scrollbar-thumb:window-inactive {background: #fff;}



  .common_group {
    width: 100%;
    height: 0.88rem;
    padding: 0 0.2rem;
    background: #fff;
    border-top: solid 1px #e1e1e1;
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
    float: right;
    height: 0.88rem;

  }
  .common_group input {
    text-align: right;
    outline: 0;
    width: auto;
    font-size: 0.28rem;
    line-height: 0.88rem;
    height: 0.88rem;
    color: #808080;
  }

  .input_wrap span{
    text-align: right;
    outline: 0;
    width: auto;
    font-size: 0.28rem;
    line-height: 0.88rem;
    height: 0.88rem;
    color: #808080;
    padding-left: 0.1rem;
  }

  .selectS {
    width: 0.2rem;
    height: 0.34rem;
    background: url(../../assets/img/select.png) no-repeat;
    background-size: cover;
    float: right;
    margin-left: 0.1rem;
    margin-top: 0.27rem;
  }

</style>
