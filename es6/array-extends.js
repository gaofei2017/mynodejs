function foo(){
  console.log(Array.from(arguments));
}
foo(1,2,3);
let str = 'hello world';
console.log(Array.from(str));
let obj= {
  '0':'itcast',
  '1':11,
  length:2
}
console.log(Array.from(obj));
let arr = Array.of(3,2,3,0);
console.log(arr);
let newarr=Array.of('d','e','f','g','j','k','l');
newarr.find((val,key,arr) =>{
  console.log(val,key,arr);
  return val =='g';
})
var res=newarr.findIndex((v,k,arr) =>{
  return v=='g';
});
console.log(res);
