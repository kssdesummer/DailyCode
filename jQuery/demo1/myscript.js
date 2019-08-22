// $(document).ready(function () {
//     $("#kang").click(function () {
//       alert(123);
//     });
// });
// alert(document.getElementById("a").innerHTML);
// alert(document.getElementsByClassName("c")[0].innerHTML)
// $(function () {
//
//
// });
/*  重构
var [a,b=f()]=[1,2];
console.log(a,b);

let zhang = {name:"lao",sex:"nan"};
let {name="li"} =zhang;
let {heigh="180cm"} =zhang;
let {name:uname} =zhang;
console.log(name);
console.log("unmae:  "+uname);
console.log("heigh:  "+heigh);
let {log} = console;
log("log can use");
*/

// $(document).ready(function () {
//     $("#kang").click(function () {
//         alert(123);
//     });
//     $("#c\\[a\\]").click(function () {
//         alert(333);
//     });
// });
console.log($("div"));
console.log($("#c\\[a\\]"));
console.log($(".c"));
console.log($("*"));
console.log($("div,span,p.jing")); //选择这几个标签下的所有
console.log($("#b span"));
// > 所有子元素     + 紧接着的第一个子元素     ～ 匹配同级别的所有
// ：first 获取第一个元素
// ：not(selector) 查找未选中的
// alert($("input:not(:checked)").val());
console.log("not的用法:    ",$("input:not(:checked)").val());
// :even    匹配所有索引值为偶数的元素
console.log("even 的用法：  ",$("tr:even"));
// :odd     匹配奇数索引值
// :eq(1)      匹配一个给定的索引值
console.log($("input[name]"));



/*
//测试slideUp和slideDown   点击显示隐藏
$(document).ready(function () {
    $(".btn1").click(function () {
        $("p").slideUp()
    });
    $(".btn2").click(function () {
        $("p").slideDown()
    })
});
*/

/*
//测试fadeIn和fadeOut  淡入浅出
$(document).ready(function () {
    $(".btn3").hover(function () {
        $("p").fadeIn("slow");
    },function () {
        $("p").fadeOut("slow");
    })
});
*/

// 测试delay  延迟效果
$(deocment).ready(function () {
   $('#foot').slideUp(1000).delay(1000).fadeIn(1000);
});


$(deocment).ready(function () {
    $("p").click(function (event) {
        alert(event.currentTarget === this); // true
    });
});
$(document).bind('mousemove',function(e){
    $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
});