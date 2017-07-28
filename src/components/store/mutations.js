

export default {


    showWarnHtml(state,text){
      state.warnHtml=text;
      state.isShowWarn=true;
    },

    hideWarnHtml(state,text){
      state.warnHtml=text;
      state.isShowWarn=false;
    },

    dataskj(state,text){
      state.data.push({"id":"1","value":"下班"})
    },


  dataskwj(state,text){
    state.data.push({"id":"2","value":"shangban"})
  }
}
