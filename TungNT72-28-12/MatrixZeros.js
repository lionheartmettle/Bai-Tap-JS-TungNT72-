function maxtrixZero (arr) {
    var maxRow = arr.length;
    var maxCol = arr[0].length;
    var r = [];
    let i,j,k;
    for(i = 0; i < maxRow; i += 1) {
        for(j = 0; j < maxCol; j += 1) {
            if (arr[i][j] == 0) {
                r.push(i);
                r.push(j);
            }
        }
    }

    for (k = 0; k < r.length; k += 2) {
        for(j = 0; j < maxCol; j += 1) {
            arr[r[k]][j] = 0;
        }
        for(i = 0; i < maxRow; i += 1 ){
            arr[i][r[k+1]] = 0;
        }
    }

    return arr;
}

var arr = [[1,0,1],[1,1,1],[1,1,1]];