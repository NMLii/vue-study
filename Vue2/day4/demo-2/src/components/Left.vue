<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg的值是：{{msg}}</p>
    <p>user的值是：{{user}}</p>
    <button @click="user.name='zs'">修改user</button>

    <hr>

    <button @click="send">把好诗发给Right</button>
  </div>
</template>

<script>
// 1.导入evevtBus.js模块
import bus from './eventBus'

export default {
  props:['msg','user'],//子里面用props接收数据,不建议修改
  data(){
    return{
      str:'黑云压城城欲摧，甲光向日金鳞开。角声满天秋色里，塞上燕脂凝夜紫。'
    }
  },
  methods:{
    send(){
      // 2.通过eventBus来发送数据
      bus.$emit('share',this.str)
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
