export default {

  showWarnHtml:({commit,state},text)=>{
    commit("showWarnHtml",text);

    setTimeout(()=>{
      commit("hideWarnHtml","")
    },2000)
    },
  setData:({commit,state},text)=>{
    if(text=="还款方式"){
      commit("dataskj");
    }
    if(text=="还款方式"){
      commit("dataskwj");
    }


  }
}
