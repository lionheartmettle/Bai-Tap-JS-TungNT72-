//Cho mot chuoi string
//them cac ky tu vào dau` chuoi~ string de? chuoi~ tro? thanh` Palindrome
//output ket qua la t/h them it nhat'

// tim cac truong hop co the input vao` dau` chuoi~ string de? string da cho tro thanh Palindrome
//cach mac dinh la them string.length - 1 phan tu vao` dau chuoi tring VD : ABC -> CB|A|BC -> them CB -> Kqua tra ve` la` 2
// 1 truong hop thoa man la : tu` vi tri dang xet == vi tri o? +2 (hoac +1). Vi tri dang xet <= Math.floor(string.length/2)
//tu` moi~ t/h tm ta ghi gia tri ra 1 arr. roi` lay' min.

function foo(str) {
  let result = [];
  result.push(str.length - 1);
  result = result.concat(findQuality(str, 1)).concat(findQuality(str, 2));
  return Math.min.apply(Math, result);
}
function findQuality(str, step) {
  let l = Math.floor(str.length / 2);
  let result = [];
  for (let i = 0; i <= l; i += step) {
    let boo = true;
    if (str[i] == str[i + step]) {
      for (let x = 1; x <= i; x += 1) {
        if (str[i - x] != str[i + step + x]) {
          boo = false;
          break;
        }
      }
      if (boo) {
        result.push(str.length - (i + 1) * 2 - step + 1);
      }
    }
  }
  return result;
}
console.log(foo("AACECAAAA"));
