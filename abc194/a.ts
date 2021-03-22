const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [a,b] = lines[0].split(" ").map(Number);
  const powderdMilk = a + b;
  const msnf = b;

  if ( 15 <= powderdMilk && 8 <=msnf){
    console.log(1);
  }else if( 10 <= powderdMilk && 3 <= msnf){
    console.log(2);
  }else if( 3 <= powderdMilk){
    console.log(3);
  }else{
    console.log(4);
  }
 // この中に入力が終わった後の処理=ロジックを記載する。
});

//ｃｍｄで以下を実行
// yarn ts-node abc194/a.ts 
// (abc191/a.ts部分は適宜変更)