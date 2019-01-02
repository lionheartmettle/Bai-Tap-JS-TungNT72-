function rotateMatrix(arr) {
    var n = arr.length;
    let i,j;
    var x = 1;
    
    for (i = 0; i < n; i += 1) {
        for (j = 0; j < n; j += 1) {
            arr[j][n - i - 1] = x;
            x += 1;
        }
    }
    return arr;
}