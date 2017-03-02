let str = 'hello';
console.log(str);
if (true) {
  let num=10;
  var a='es6';
  console.log(num);
}
// console.log(num);//这个变量只能在当前块被访问
console.log(a);
var temp=[];
var i=0;
for (var i = 0; i < 6; i++) {
  temp[i]=function(){
    console.log(i);
  }
}
//这里的每一个i都是全局变量，遍历完以后都变成了6
temp[1]();temp[2]();temp[3]();temp[4]();temp[5]();temp[0]();
var t=[];
let m=0;
for (let m = 0;  m <6;  m++) {
  t[m]=function(){
    console.log(m);
  }
}
t[0]();t[1]();t[2]();t[3]();t[4]();
var f;
if (true) {
  f=10;
  let f;
}
