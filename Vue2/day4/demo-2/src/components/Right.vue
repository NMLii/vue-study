<template>
  <div class="right-container">
    <h3>Right 组件 --{{count}}</h3>
    <button @click="add">+1</button>
    <hr>
    {{msgFromLeft}}
  </div>
</template>

<script>
// 1.导入eventBus.js模块
import bus from './eventBus.js'

export default {
  data() {
    return {
      // 子组件自己的数据，将来希望把count值传给父组件
      count: 0,
      msgFromLeft:''
    };
  },
  methods:{
    add(){
      // 让子组件的count值自增+1
      this.count+=1,
      //修改数据时,通过$emit()触发自定义事件
      // 把自增的结果，传给父组件
      //$emit触发一个事件,并传数据
      this.$emit('numchange',this.count)
      //this.count传到App.vue中,由val获取
    }
  },
  created(){
    // 2.为bus绑定自定义事件
    bus.$on('share',(val)=>{
      console.log('在Right组件中定的share被触发了！',val);
      this.msgFromLeft=val
    })
  }
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
