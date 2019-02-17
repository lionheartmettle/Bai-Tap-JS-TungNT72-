function findBrace(str) {
  let arr = [];
  let res = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] == '(') {
      arr.push(i);
    }
    if (str[i] == ')') {
      res.push({ start: extratingLast(arr), end: i });
    }
  }
  return res.sort((a, b) => a.start - b.start);
}
function extratingLast(arr) {
  return arr.splice(arr.length - 1, 1)[0];
}
function check(str) {
  let res = findBrace(str);
  let count = 0;
  for (let i = 0; i < res.length - 1; i += 1) {
    if ((res[i].start == res[i + 1].start - 1) && (res[i].end == res[i + 1].end + 1)) {
      count++;
    }
  }
  for (let i = 0; i < res.length; i += 1) {
    if ((res[i].start == res[i].end - 1) || (res[i].start == res[i].end - 2)) {
      count++;
    }
  }
  return count;
}
console.log(findBrace('((((a)+(b))))'));
check('((((a)+(b))))');