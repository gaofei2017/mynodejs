// console.log(global);
var timer;
setTimeout(function(){
clearInterval(timer);
console.log('清除了定时器！');
},3000);
var i=0;
timer=setInterval(function(){
  console.log(i++);
},600);
