function countBy(x, n) {
  let z = [];
  for(var i = 1;i<=n;i++){
    var newNum = x*i
    z.push(newNum)
 }
  return z;
}

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x);
