function R(n){
    debugger
    var a = [];
        a[0] = [1];
        a[1] = [1,1];
    for (var row = 2; row < n; row++){
        a[row] = [];
        a[row][0] = 1;
        for (var col = 1; col <= row -1; col++){
            a[row][col] = a[row-1][col] + a[row-1][col-1];
        }
        a[row][row] = 1;
    }
    return a;
}
//cach 2 lam bang de quy
function triPascal(n) {
    var rs = [];
    function tamgiac(n) {  
      if (n == 1) {
        return rs[0] = [1];
      }
      if (n == 2) {
        rs[0] = [1];
        rs[1] = [1,1];
        return rs;
      }
      for (let i = 2; i < n; i += 1) {
        rs[i] = [];
        rs[i][0] = 1;
        rs[i][n-1] = 1;
      }
      for (let j = 1; j < n-1; j += 1) {
        rs[n-1][j] = tamgiac(n-1)[n-2][j] + tamgiac(n-1)[n-2][j-1];
      }
      return rs;
    }
    return tamgiac(n);
  
  }


    