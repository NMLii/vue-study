//1.使用ES6导入语法，导入jQery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过ES6导入和使用
//如果某个模块中接收到的成员为undefined，则没必要进行接收
import '@/css/index.css'
import '@/css/index.less'

//导入src/js/test/info.js
import '@/js/test/info.js'

//1.导入图片
import logo from '@/images/logo.png'
//2.给img标签的src动态赋值
$('.box').attr('src',logo)

//2.定义jQuery的入口函数
$(function() {
    //3.实现奇偶行变色
    //奇数行为红色
    $('li:odd').css('background-color', 'red') //奇数
    $('li:even').css('background-color', 'cyan') //偶数
})

//定义装饰器函数
function info(target){
    target.info='Person info.'
}

//定义一个普通的类
@info
class Person{

}
console.log(Person.info)
