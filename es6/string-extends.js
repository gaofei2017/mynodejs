// includes 检测字符串中是否包含某一特定字符
let str ='my name is itcast';
console.log(str.includes('a'));
console.log(str.startsWith('m'));
console.log(str.endsWith('m'));
console.log(str.repeat(2))
// var html='<div><p></p></div>'
// let html=`<div><p></p></div>`
let html =`
    <table>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </table>
`;
var data={
  name:'yaotao',
  age:22,
  sex:'男'
}
let htmlstr=`
        <p>我叫${data.name},我今年${data.age}岁了，性别${data.sex}</p>
`;
console.log(htmlstr);
function foo(){
  console.log('呵呵'.repeat(2));
}
let fnstr = `${foo()}`;
