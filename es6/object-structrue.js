// 先查找同名属性然后再赋值
var {arg1:name,arg2:age}={arg1:'itcast',arg2:22};
console.log(name,age);
var {arg3:sex,arg4:des}={arg3:'男',arg4:'帮邦达'};
console.log(sex,des);
// 简写
var {name,age}={name:'jiangsan',age:44};
console.log(name,age);
var {name:name,son:{sonname:sonname}}={name:'wangwu',son:{sonname:'lisi'}};
console.log(name,sonname);
var {name,age,sex}={name:'lisi',age:122,sex:undefined};
console.log(name,age,sex);
