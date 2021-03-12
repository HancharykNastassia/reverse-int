module.exports = function reverse (n) {
  let numbers = [];
  let num = n > 0 ? n : -n;
  while (num > 9){
    numbers.push(num % 10);
    num = Math.floor(num / 10);
  }
  numbers.push(num);
  let res = 0;
  numbers.forEach(item => res = res*10 + item);
  return res;
}
