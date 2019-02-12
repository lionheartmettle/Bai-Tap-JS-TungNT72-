//have 7 symbol
// I -> V, X
// X -> L, C
// C -> D, M
// use switch case with 7 symbol

function roman(str) {
  debugger;
  let result = 0;
  let ro = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  for (let t of str) {
    let check = false;
    for (let r of ro) {
      if (t == r) {
        check = true;
      }
    }
    if (!check) {
      return 'Your input Wrong !';
    }
  }

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'I':
        result += test1(ro, 0, 1, str, i);
        break;
      case 'V':
        result += test2(ro, 1, 5, str, i);
        break;
      case 'X':
        result += test1(ro, 2, 10, str, i);
        break;
      case 'L':
        result += test2(ro, 3, 50, str, i);
        break;
      case 'C':
        result += test1(ro, 4, 100, str, i);
        break;
      case 'D':
        result += test2(ro, 5, 500, str, i);
        break;
      case 'M':
        result += test2(ro, 6, 1000, str, i);
        break;
      default:
        console.log('Input Wrong !')
    }
  }
  if (result) {
    return result;
  }
  return 'Your input Wrong !';
}
function test1(ro, id, num, str, index) {
  if (!str[index + 1]) {
    return num;
  }
  let b = ro.slice(0, id + 1).find(e => e == str[index + 1]);
  if (str[index + 1] == ro[id + 1] || str[index + 1] == ro[id + 2]) {
    return -num;
  }
  if (b) {
    if (b == str[index - 1]) {
      return undefined;
    }
    return num;
  }
  return undefined;
}
function test2(ro, id, num, str, index) {
  if (index == 0 || index == str.length - 1) {
    return num;
  }
  let b = ro.slice(0, id).find(e => e == str[index + 1]);
  if (b) {
    if (b == str[index - 1]) {
      return undefined;
    }
    return num;
  }
  return undefined;
}
console.log(roman("XCIX"));
