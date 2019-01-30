function countAndSay(n) {
  let count = 1;
  let result = "";
  function A(target, n) {
    if (count == n) {
      return;
    }
    result = "";
    count++;
    let num = [];
    let quality = [];
    for (let i = 0; i < target.length; i += 1) {
      let x = 0;
      for (let j = i; j < target.length; j += 1) {
        if (target[i] == target[j]) {
          x++;
        } else {
          quality.push(x);
          break;
        }
        if (j == target.length - 1) {
          quality.push(x);
        }
      }
      i += x - 1;
      num.push(target[i]);
    }
    for (let i = 0; i < num.length; i += 1) {
      result += `${quality[i]}${num[i]}`;
    }
    return A(result, n);
  }
  A("1", n);
  return result;
}
countAndSay(5);
