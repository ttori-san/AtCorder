const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const[a,b] =  lines[0].split(" ").map(Number);
  const soldRate = b/a;
  const discountedRate = 100 * (1 - soldRate);
  console.log(discountedRate);
    // この中に入力が終わった後の処理=ロジックを記載する。
});

//ｃｍｄで以下を実行
// yarn ts-node abc193/a.ts 
// (abc191/a.ts部分は適宜変更)