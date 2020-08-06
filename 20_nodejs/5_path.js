// 기본 모듈 - path
const pathUtil = require("path");

console.log(__dirname);
console.log(__filename);

let myFile = __filename;
console.log(pathUtil.basename(myFile));  // 5_path.js
console.log(pathUtil.extname(myFile));  // .js

let obj = pathUtil.parse(myFile); // D:\2020\Node.js 프로그래밍\NodeProjects\20_nodejs\5_path.js
console.log(obj);