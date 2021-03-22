const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [m,h] = lines[0].split(" ").map(Number);
  if (h % m == 0){
    console.log("Yes");
  }else{
    console.log("No");
  }
  // この中に入力が終わった後の処理=ロジックを記載する。
});

//ｃｍｄで以下を実行
// yarn ts-node abc195/a.ts 
// (abc195/a.ts部分は適宜変更)