function minimum(a , b) {
    if(a > b){
      return b;
    }
    else if(a == b){
      return "Chung bang nhau ma !";
    }
    else {
      return a;
    }
}
// Bai De quy
function isEven(n) {
if (n == 0){
  return true;
}
else if (n == (-1)){
  return false;
}

return isEven(n-2)
}
// Bai Bean Counting
 function countBs(a){
    var x = [];
    var j = 0;
    var rs = [];
    
    for(let i = 0; i < a.length; i+=1){
      if (a[i] == a[i].toUpperCase()){
        x[j] = [];
        x[j][0] = a[i];
        x[j][1] = countChar(a,a[i]);
        j += 1;
      }
    }
    j = 0;
    for(let i = 0; i < x.length ; i +=1){
      let c = x[i][0];
      let d;
      if (i+1 < x.length){
        d = x[i+1][0];
      }else {d = null}
      
      if( c != d){
        rs[j] = x[i];
        j++
      }
    }
    return rs;

 }
 function countChar(a,b){
  var x = 0;
  for(let i = 0; i < a.length; i+=1){
    if (a[i] == b){
      x += 1;
    }
  }
  return x;
 }