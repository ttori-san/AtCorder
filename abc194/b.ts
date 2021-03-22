const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const list = lines[0].trim().split("\n")
  const n = parseInt(list[0].trim);

  const a = [];
  const b = [];

  for (let i = 1;i <= n;i++){
    const [a1,b1] = list[i].trim().split(" ").map(v => parseInt(v));
    a.push(a1);
    b.push(b1);
  }

  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
      let opponent = i  === j? a[i] + b[j]: Math.max(a[i],b[j]);
      if (ans === -1 || opponent < ans){
        ans = tmp;
      }
    }
  }
  console.log(ans);
  
  // この中に入力が終わった後の処理=ロジックを記載する。
});

//ｃｍｄで以下を実行
// yarn ts-node abc191/a.ts 
// (abc191/a.ts部分は適宜変更)
