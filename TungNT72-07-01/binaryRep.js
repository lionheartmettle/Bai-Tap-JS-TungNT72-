function binaryRep(num) {    
    var arr = [];
    let a = num;
    function dequy() {        
        if (Math.floor(a / 2) == 0) {
            arr.push(a);
            return;
        }
        arr.push(a%2);
        a = Math.floor(a / 2);
        return dequy();
    }
    dequy();
    return arr.reverse().join('');
}
console.log(binaryRep(4));