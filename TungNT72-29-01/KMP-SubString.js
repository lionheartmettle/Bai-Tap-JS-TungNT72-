function findT(strW) {
  let te = [];
  te.push(-1);
  te.push(0);
  let pos = 2;
  let cnd = 0;
  while (pos < strW.length) {
    if (strW[pos - 1] == strW[cnd]) {
      te[pos] = cnd + 1;
      pos += 1;
      cnd += 1;
    } else if (cnd > 0) {
      cnd = te[cnd];
    } else {
      te[pos] = 0;
      pos += 1;
    }
  }
  return te;
}

function kmp(strS, strW) {
  let m = 0;
  let i = 0;
  let T = findT(strW);
  while (m + i < strS.length) {
    if (strW[i] == strS[m + i]) {
      i += 1;
      if (i == strW.length) {
        return m;
      }
    } else {
      if (T[i] > -1) {
        m = m + i - T[i];
        i = T[i];
      } else {
        i = 0;
        m += 1;
      }
    }
  }
}

console.log(findT("ABCDABD"));
console.log(kmp("ABC ABCDAB ABCDABCDABDE", "ABCDABD"));
