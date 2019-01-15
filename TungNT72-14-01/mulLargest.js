// tao ham de quy
function factor(num) {
  if (num == 0) {
    return 1;
  }
  return num * factor(num - 1);
}
// tao ham tim max tich arr
function maxMulArr(arr) {
  let rs = [];
  for (let z = 0; z < arr.length; z++) {
    let temp = arr[z].reduce(function(acc, b) {
      return acc * b;
    }, 1);
    rs.push(temp);
  }
  return Math.max.apply(Math, rs);
}
function findLargest(arr) {
  var r = [];
  var k = 0;
  var m = arr.length;
  var n = arr[0].length;
  //le la tong so truong hop khi di theo kieu down-right ma ta co the dem dc
  var le = factor(m + n - 2) / (factor(n - 1) * factor(m - 1));
  //tao ra mot mang 2 chieu vs length = le
  for (let z = 0; z < le; z++) {
    r[z] = [];
  }
  // ham mul se push cac t/h khi di theo kieu down-right vao mang r
  function mul(i, j, ar) {
    debugger;
    if (i == m || j == n) {
      return;
    }
    r[k].push(ar[i][j]);
    mul(i + 1, j, ar);
    if (i == m - 1) {
      mul(i, j + 1, ar);
    }
    if (i == m - 1 && j == n - 1) {
      k += 1;
    }
    if (i < m - 1 && j < n - 1) {
      r[k] = r[k - 1].slice(0, i + j + 1);
      mul(i, j + 1, ar);
    }
    return;
  }
  mul(0, 0, arr);
  return maxMulArr(r);
}
console.log(findLargest([[1, 2, 30],[4, 5, 6],[7, 8, 9]]));
