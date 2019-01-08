
function check(ch) {
  let l = ch.length;
  var rs = 0;
  ar = [];
//   for (let i = 0; i < ch.length; i += 1) {
//     rs = rs*26;  
//     rs = rs + ch[i].charCodeAt(0) - 64;
//   }
  for (let i = 0; i < ch.length; i += 1) {
    rs = (ch[i].charCodeAt(0) - 65)*Math.pow(26,ch.length - 1 - i);
    ar.push(rs);
  }
  rs = ar.reduce(function (a,i) {
    return a + i;
  },1);
  return (Math.pow(26,ch.length) - 26)/25 + rs;
}
console.log(check('BBC'));
