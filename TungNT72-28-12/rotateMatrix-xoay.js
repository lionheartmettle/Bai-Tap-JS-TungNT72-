function xoay (matrix) {
    var n = matrix.length;
    let i,j;
    for(i = 0; i < n/2; i += 1) {
        for(j = i; j < n-1-i; j += 1){
            var temp1 = matrix[i][j];
            // var temp2 = matrix[j][n-1-i];
            // var temp3 = matrix[n-1-i][n-1-j];
            // var temp4 = matrix[n-1-j][i];

            // matrix[j][n-1-i] = temp1;
            // matrix[n-1-i][n-1-j] = temp2;
            // matrix[n-1-j][i] = temp3;
            // matrix[i][j] = temp4;
            matrix[i][j] = matrix[n-1-j][i];
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            matrix[j][n-1-i] = temp1;
            
        }
    }
    return matrix;
}
var ma = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(xoay(ma));