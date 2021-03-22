const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  
  // この中に入力が終わった後の処理=ロジックを記載する。
  
});

//ｃｍｄで以下を実行
// yarn ts-node abc191/a.ts 
// (abc191/a.ts部分は適宜変更)