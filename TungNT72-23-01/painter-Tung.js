// chi dung khi list.length < 6 hoac  k = 2;
function painter(list, k) {
  list = list.sort(function (a, b) {
    return a - b;
  })
  if (list.length <= k) {
    return list[list.length - 1];
  }
  if (k == 1) {
    return list.reduce((a, i) => a + i, 0);
  }
  if (list.length > k) {
    var listRight = list.slice(list.length - k + 2);
    var listLeft = list.slice(0,list.length - k + 2);
  }
  let i = 0, j = listLeft.length - 1;
  let sumL = 0;
  let sumR = 0;
  while (i <= j) {
    while (sumL < list[listLeft.length - 1]) {
      sumL += list[i];
      i += 1;      
    }
    while (sumL > sumR && j >= i) {
      sumR += list[j];
      j -= 1;
    }
    if (j >= i) {
      sumL += list[i];
      i += 1;
    }
  }
  return Math.max(sumL , sumR , ...listRight)
}
painter([9, 8, 1, 3, 4, 7, 6, 5],2)