let nums=Array.of(1,2,3,4,5,6);
// nums.find(function(val,key,arr){
//   console.log(val);
//   return val>=4;
// })
nums.find((val,key,arr) => {
  console.log(val);
})
console.log(...[0,1,2,3]);
