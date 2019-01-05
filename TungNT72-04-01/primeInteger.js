function checkPrime(num) {
  var m = Math.floor(num / 2);
  if (num > 3) {
    for (let i = 2; i <= m; i += 1) {
        if (num % i == 0) {
          return false;
        }
      }
      return true;
  }
  else if (num == 3 || num == 2) {
      return true;
  }
  return false;  
}

function findPrime(num) {
  var m = Math.floor(num / 2);
  rs = [];
  if (num >= 3) {
    for (let i = 2; i <= 3; i += 1) {
      rs.push(i);
    }
    for (let i = 4; i <= num; i += 1) {
      if (checkPrime(i)) {
        rs.push(i);
      }
    }
  } else if (num == 2) {
    rs.push(2);
  }
  return rs;
}
console.log(findPrime(10));
