const lines=[];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', function (line) {
  lines.push(line);
});
reader.on('close', function () {
  const [v,t,s,d] = lines[0].split(" ").map(Number);
  if ( v * t <= d && v * s >= d)
  {
    console.log("No");
  }else{
    console.log("Yes");
  }
    // この中に入力が終わった後の処理=ロジックを記載する。
});