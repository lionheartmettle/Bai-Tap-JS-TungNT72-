function calZero(n) {
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    if (n > 5) {
        var x5 = Math.floor(getBaseLog(5,n) - 1);
        var z5 = (x5 + 1)*x/2;
    } else {
        z5 = 0;
    }
    if (n > 10) {
        var x10 = Math.floor(getBaseLog(10,n) - 1);
        var z10 = (x10 + 1)*x/2;
    } else {
        z10 = 0;
    } 
    return Math.floor(n/5) + z5 + z10;
}
console.log(calZero(125));