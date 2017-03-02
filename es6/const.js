let a=10;
let b=19;
a=20;
b=10;
console.log(a,b);
const c=18;
// c=17;//报错 不能被修改
// const c=28;
if (true) {
  //产生块级作用域
  const e=10;
  console.log(e);
}
// console.log(e);
