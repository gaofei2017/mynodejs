function fn(a,b){
  console.log(a+b);
}
fn(1,3);
function fn1([a,b=10]){
  console.log(a+b);
}
fn1([1]);
let a='hello';
let b='world';
console.log(a,b);
[a,b]=[b,a];
console.log(a,b);
function foo(){
  return {
    name:'张丹',
    age:22,
    sex:'男'
  }
}
var f=foo();
console.log(f);
var {name,age,sex}=foo();
console.log(name,age,sex);
let json ='{"name1":"itcast","age1":22}';
let {name1,age1}=JSON.parse(json);
console.log(name1,age1);
