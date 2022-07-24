<template>
  <div class="app-container">
    <h1>App 根组件 --{{countFromSon}}</h1>
    <hr />
    <p>{{userinfo}} </p>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left :msg="message" :user="userinfo"></Left>
      <!-- msg="message"简单类型的值复制一份传过去 -->
      <!-- user="userinfo" 对象的引用传过去-->
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  data(){
    return {
      message:'hello 132的宝们！',
      userinfo:{name:'wsc',age:18},//父组件定义数据
      // 定义countFromSon来接受子组件传递过来的数据
      countFromSon:0
    }
  },
  components:{
    Left,Right
  },
  methods:{
    //获取子组件传递过来的事件
    getNewCount(val){
      console.log('numchange事件被触发了！',val);
      this.countFromSon=val
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
