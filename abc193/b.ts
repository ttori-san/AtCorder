const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const[] =  lines[0].split(" ").map(Number);
  
    const a = [3,4,5];//i
    const p = [9,8,5];//j
    const x = [5,5,5];//k
    const s = p.length;

  let i = a[0];
  console.log(i);
  for (let i = a[0], k = x[0];a.length <= s, x.length <= s;){
    if (i > k){
      
    }
    
  }

  // この中に入力が終わった後の処理=ロジックを記載する。
});


//ｃｍｄで以下を実行
// yarn ts-node abc193/b.ts 
// (abc191/a.ts部分は適宜変更)