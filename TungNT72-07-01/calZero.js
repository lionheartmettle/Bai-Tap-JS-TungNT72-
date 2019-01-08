function calZero(n) {
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
    return Math.floor(n/5) + getBaseLog(5,n) - 1;
}
console.log(calZero(125));