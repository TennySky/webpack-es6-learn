"use strict";
var Es6Test = {
    // let声明变量和const声明常量
    testLetAndConst: function() {
        console.log("testLetAndConst");
        //let声明的变量只能在let命令所在的代码块内有效。
        {
            var a = 100;
            let b = 101;
            console.log("a = {}, b = {}", a, b);
        }
        // console.log("a = {}, b = {}", a, b);
        //在for循环中就适合使用let
        let arr = [];
        //使用let定义下标输出6
        for (let index = 0; index < 10; index++) {
            arr[index] = function () {
                console.log(index);
            }
        }
        arr[6](); //6
        //使用var定义结果输出10
        for (var index = 0; index < 10; index++) {
            arr[index] = function () {
                console.log(index);
            }
        }
        arr[6](); //10
        //在同一个块内重复声明会报错
        // let du = 100;
        // console.log(du);
        // let du = 100;
        // console.log(du);
        for (let i = 0; i < 3; console.log(i),i++) {
            let i = "abc";
            console.log(i);
        }
    }

}


export default Es6Test;