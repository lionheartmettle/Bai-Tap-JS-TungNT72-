function R(n){
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
    
    