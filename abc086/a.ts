const lines=[];//["1, 10","5"]
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [a,b] = lines[0].split(" ").map(Number);// ["1","10"] ->[1,10]数字に変換して分割代入
  // const a = lines[0].split(" ")[0];

  if(a * b % 2 ===0){
    console.log('Even');
  }else{
    console.log('Odd');
  }
    // この中に入力が終わった後の処理=ロジックを記載する。
});