var [a,b,c,d,e]=[1,2,3,4,5];
console.log(a,b,c,d,e);
var a1=1,a2=2,a3=3,a4=4;
console.log(a1,a2,a3,a4);
var [b1,b2,b3,[b4]] = [1,2,3,[5]];
console.log(b1,b2,b3,b4);
var [d,e,f]='abc';
console.log(d,e,f);
var [g,h,[j,k,[l,m]]]=[1,2,[3,4,[5,6]]];
console.log(g,h,j,k,l,m);
// 解析不成功则为 undefined
var [d,f,g]=[1,2];
console.log(d,f,g);
//设置默认值
var [name,age]=['lisi',22];
console.log(name,age);
var [name='litai',age=12]=[];
console.log(name,age);
// 严格等于 undefined
var [name='zhangsan',age=22]=[null,null];
console.log(name,age);
// 只有右侧值为 undefined 时才会使用默认值
var [name='jangss',age=33]=[null,undefined];
console.log(name,age);
// ... 表示剩余的
// 只能用在结尾
var [r,t,y,...i]=[1,2,3,4,5,6,7,8,9];
console.log(i);
