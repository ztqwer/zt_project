export default {

  showWarnHtml:({commit,state},text)=>{
    commit("showWarnHtml",text);

    setTimeout(()=>{
      commit("hideWarnHtml","")
    },2000)
    }
}
