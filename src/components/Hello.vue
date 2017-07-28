<template>
<div>
  <div>
    <input type="button" value="增加" @click="showWarnHtml">
    现在的数值为：{{asdad}}
  </div>
</div>
</template>

<script>

  import {mapGetters,mapActions} from 'vuex'
  export default{
      computed:{
        ...mapGetters(['asdad'])
      },
    methods:{
      ...mapActions([
        'showWarnHtml',
      ]),
    }
  }
</script>

<style scoped>

</style>
