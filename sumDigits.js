var value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

function sumDigits(num) {
  var isNeg = num < 0
      numbers = (isNeg? String(num).slice(1) : String(num)).split('').map(Number);
  if (isNeg) numbers[0] *= -1;
  return numbers.reduce(function(a,b){ return a + b; });
}