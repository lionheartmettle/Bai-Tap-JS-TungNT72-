//Tao ra chuoi moi voi kieu zigzac
// 
function zigzac(str, n) {
  var i = 0;
  var j = 0;
  let tar = [];
  let x;
  let result = '';
  for (i = 0; i < n; i += 1) {
    tar[i] = [];
  }
  i = 0;
  while (i < str.length) {
    tar[j].push(str[i]);
    i += 1;
    if (j == n - 1) {
      x = -1;
    } else if (j == 0) {
      x = 1;
    }
    j += x;
  }
  for (i = 0; i < n; i += 1) {
    result += tar[i].join('');
  }
  return result;
}
