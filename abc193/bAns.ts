{
  const Main = (input: string) => {
    const list = input.trim().split("\n")
    const n = parseInt(list[0].trim())

    let ans = -1
    for (let i = 1; i <= n; i++) {
      const [a, p, x] = list[i].trim().split(" ").map(v => parseInt(v))
      if (x - a > 0) {
        if (ans == -1 || ans > p) {
          ans = p
        }
      }
    }

    console.log(ans);
  };

  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
}
