//fs模块文件操作
const fs = require('fs');
//创建一个文件夹
// fs.mkdir('./myFile',function(err){//第一个参数是文件夹名称
//   //当创建失败时，err就是错误信息
//   //当成功时为null
//   console.log(err);
// });
// fs.mkdir('./test',(err) => {
//   console.log(err);
// });
// 删除文件夹
// 第一个参数为文件夹名称
// fs.rmdir('./myFile',(err) => {
//   console.log(err);
// });
//创建文件
//第一个参数 文件名
//第二个参数 文件内容
//第三个参数 回调函数
// fs.writeFile('./test/demo.txt','哈哈', (err) => {
//   console.log(err);
// });
//读取一个文件
//第一个参数 文件路径
//第二个参数 编码格式
// fs.readFile('./test/demo.txt','utf8', (err,res) => {
//   console.log(err);
//   console.log(res);
// });
// 文件读写
  // fs.writeFile('./test/demo.txt','一些内容！', (err) => {
  //   console.log(err);
  // });
  // 第一个参数 文件路径
  // 第二个参数 打开模式 读取 r 写入 w 追加 a
  // 第三个参数 回调函数
  // fs.open('./test/demo.txt','r',(err,fd) =>{
  //   //以读取模式打开
  //   //使用fs.write()写入
  //   fs.write(fd,'另一些内容',(err) => {
  //     console.log(err);
  //   });
  // });

  // fs.open('./test/demo.txt','w',(err,fd) => {
  //   //以写模打开
  //   //使用fs.write()写入
  //   fs.write(fd,'大家好！', (err) => {
  //     console.log(err);
  //   });
  // });
  //追加
  fs.open('./test/demo.txt','a',(err,fd) =>{
    //以读模式打开
    //使用fs.write() 写入
    fs.write(fd,'我来自山东！',(err) => {
      console.log(err);
    });
  });
