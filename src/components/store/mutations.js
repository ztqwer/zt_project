

export default {


    showWarnHtml(state,text){
      state.warnHtml=text;
      state.isShowWarn=true;
    },

  hideWarnHtml(state,text){
    state.warnHtml=text;
    state.isShowWarn=false;
  },

}
