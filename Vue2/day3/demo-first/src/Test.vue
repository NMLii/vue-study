<template>
    <div class="test-box">
        <h3>用户自定义的test.vue  ----{{username}}</h3>
        <button @click="changeName">修改用户名</button>
    </div>
</template>

<script>
    //默认导出。这是固定写法！
    export default{
        //data数据源
        //注意：.vue组件中的data不能像之前一样，不能指向对象。
        //注意：组件中的data必须是一个函数
        data(){
            //这个return出去的{}中，可以定义数据
            return{
                username:'admin'
            }
        },
        methods:{
            changeName(){
                //在组件中，this就表示当前组件的实例对象
                console.log(this)
                this.username='哇哈哈'
            }
        },
        //当前组件中的监听器
        watch:{},
        //当前组件的计算属性
        computed:{},
        //当前组件的过滤器
        filters:{}
    }
</script>

<style lang="less">
    .test-box{
        background-color: pink;
        h3{
            color:red;
        }
    }
</style>