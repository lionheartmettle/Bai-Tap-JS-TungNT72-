function mergeInter(arr, mer) {
  var n = arr.length;
  var m = n;
  var i = 0,
    j = 0;
  var rs = [];
  for (i = 0, j = 0; i < n, j < m; i++, j++) {
    if (arr[i][0] < mer[0]) {
      rs[j] = [];
      rs[j][0] = arr[i][0];
      if (arr[i][1] < mer[0]) {
        rs[j][1] = arr[i][1];
        if (i == n - 1) {
          rs.push(mer);
        }
      } else {
        if (arr[i][1] > mer[1]) {
          rs[j][1] = arr[i][1];
        } else {
          rs[j][1] = mer[1];
        }
      }
    } else {
      if (arr[i][0] < mer[1]) {
        if (j >= 1) {
          m -= 1;
          j -= 1;
          if (arr[i][1] < mer[1]) {
          } else {
            rs[j][1] = arr[i][1];
          }
        } else {
          rs[j] = [];
          rs[j][0] = mer[0];
          if (arr[i][1] < mer[1]) {
            rs[j][1] = mer[1];
          } else {
            rs[j][1] = arr[i][1];
          }
        }
      } else {
        if (i == 0 || rs[j - 1][1] < mer[1]) {
          m += 1;
          j += 1;
          rs[j - 1] = mer;
        }

        rs[j] = arr[i];
      }
    }
  }
}
