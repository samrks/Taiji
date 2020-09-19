let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好，我是龘䶛䨻䎱 🙃
 * 接下来，我演示一下我的前端功底
 * 首先，我要准备一个div
**/
#taiji{
    border: 1px solid #000;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个太极八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
**/
#taiji{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/*
* 八卦是阴阳形成的
* 一黑一百
**/
#taiji{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(2,0,36,1) 50%);
}
/* 加两个小球 */
#taiji::before{
    width: 50%;
    height: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    border-radius: 50%;
}
#taiji::after{
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    border-radius: 50%;
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    
    window.scrollTo(0, 99999); // pc端：控制浏览器的滚动条
    html.scrollTo(0, 99999);   // 移动端：控制html代码容器的滚动条
    
    if (n < string.length - 1) { // 如果ｎ不是最后一个，就继续
      n++;
      step();
    }
  }, 0);
};
step();
