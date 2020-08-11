var myPow = function(x, n) {
  return n > 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n);
};

var quickMul = function(x, N) {
  if (N == 0) {
    return 1.0
  }
  let y = quickMul(x, Math.floor());
  return N % 2 == 0 ? y * y : y * y * x;
}

console.log(myPow(2, 10));
