<template>

    <div>
      <!--//加载完成前动画-->
      <div class="ajax-wrap">
        <p class="ajax-cont">
          <span class="ajaxpng Rotation"></span><span class="ajaxTxt">正在请求,请稍后…</span>
        </p>
      </div>
      <div class="border-all"></div>
      <div class="wrap">
        <p class="p_text">可借款金额：38000.00元</p>
        <form>
          <div style="padding-top: 0.2rem; border-bottom:solid 1px #e1e1e1 ;">
            <div class="common_group ">
              <label>借款金额</label>
              <div class="input_wrap" style="width: 78%">
                <input type="number" class="btnstyle" placeholder="请输入借款金额（10000元起借）" style="width: 88%" id="amount"  value="" maxlength="5"/>
                <span class="span">元</span>
              </div>
            </div>

            <!--<div class="common_group ">-->
              <!--<label>借款期限</label>-->
              <!--<div class="input_wrap">-->
                <!--<input type="text" class="btnstyle" placeholder="9个月" id="Term" readonly=""/>-->
                <!--<div class="selectS"></div>-->
              <!--</div>-->
            <!--</div>-->
            <selectT>
              <label>借款期限</label>
            </selectT>
            <!--<div class="common_group ">-->
              <!--<label>还款方式</label>-->
              <!--<div class="input_wrap">-->
                <!--<input type="text" class="btnstyle" placeholder="等额本金，按月还本付息" id="methods" readonly=""/>-->
                <!--<div class="selectS"></div>-->
              <!--</div>-->
            <!--</div>-->
            <selectT>
              <label>还款方式</label>
            </selectT>
          </div>
          <div class="submitBtn" id="btnNext">下一步</div>
        </form>
      </div>
      <p class="warntxt"></p>
    </div>

</template>
<script>
   import selectT from './common/select.vue'
  export default{
      components:{
        selectT
      }
  }


</script>
<style lang="css" scoped>
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
  .p_text{
    height: 0.5rem;
    width: 100%;
    background: #f7f8fa;
    color: #4c4c4c;
    font-size: 0.24rem;
    line-height: 0.5rem;
    text-indent: 0.2rem;
    padding: 0.1rem;
  }
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
  input::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  input::-moz-placeholder {
    color: #bfbfbf;
  }

  input::-ms-input-placeholder {
    color: #bfbfbf;
  }

  .selectS {
    width: 0.2rem;
    height: 0.34rem;
    background: url(../assets/img/select.png) no-repeat;
    background-size: cover;
    float: right;
    margin-left: 0.1rem;
    margin-top: 0.27rem;
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
    height: 0.76rem;
    font-size: 0.34rem;
    text-align: center;
    margin-top: 0.7rem;
  }



  /*//弹框样式
  */
  .warn-wrap{
    background: #fff;
    border-radius: 0.04rem;
    position: absolute;
    top: 3.4rem;
    width: 4.6rem;
    height: 4.0rem;
    z-index: 999;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: none;
  }
  .warn-border{
    margin-top: 0.8rem;
    border-bottom: solid 0.01rem #e1e1e1;
  }
  .border-all{
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.4);
    filter: alpha(opacity=40);
    width: 100%;
    height: 100%;
    z-index: 100;
    display: none;
  }

  .warn-cont{
    padding: 0.28rem 0.45rem 0.28rem;
    text-align: center;
    color: #646464;
    font-size: 0.24rem;
    margin-bottom: 0;
    line-height: 0.48rem;
  }
  .warn-btn{

    margin: 0 auto;
    height: 0.76rem;
    font-size: 0.32rem;
    line-height: 0.76rem;
    color: #3cb2f3;
  }
  .applyRemove{
    float: left;
    display: block;
    width: 2.3rem;
    line-height: 0.75rem;
    text-align: center;
    border-right: solid 0.01rem #e1e1e1;}
  .applyOk{
    float: right;
    display: block;
    width: 2.3rem;
    text-align: center;
  }
  .input-bg{
    width: 100%;
    height: 0.88rem;
    background: #fafafa;
    margin: 0 auto;
    margin-bottom: 0.2rem;
    border: solid #e1e1e1 1px;
    border-radius: 0.04rem;

  }
  input::-webkit-input-placeholder {
    color: #bfbfbf;
    font-size: 0.24rem;
  }

  input::-moz-placeholder {
    color: #bfbfbf;
    font-size: 0.24rem;
  }

  input::-ms-input-placeholder {
    color: #bfbfbf;
    font-size: 0.24rem;
  }
  .input-bg input {
    height: 0.88rem;
    width: 2.2rem;
    outline: 0;
    font-size: 0.24rem;
    line-height: 0.88rem;
    text-indent: 0.2rem;
    color: #333;
  }
  #btnMobileNo {
    display: block;
    line-height: 0.88rem;
    width: 1.4rem;
    float: right;
    height: 0.88rem;
    font-size: 0.2rem;
    margin-right: 0.2rem;
    text-align: center;
    cursor: pointer;
  }


  .loan{
    color: #808080;
    font-size: 0.2rem;
    padding: 0.2rem 0.2rem;
  }
  .Under{
    color: #808080;
    font-size: 0.2rem;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }
  .Under span{
    text-decoration: underline;
  }

</style>
