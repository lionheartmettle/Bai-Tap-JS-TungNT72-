function powInteger(number) {    
    var a,b;
    if (number == 1) {
        return true + "1^b = 1";
    }
    b = 2;
    a = 2;
    while(Math.pow(a,b) <= number) {
        while(Math.pow(a,b) <= number) {
            if (Math.pow(a,b) == number) {
                return true + ` as ${a}^${b} = ${number}`;
            }
            b += 1;
        }
        a += 1;
        b = 2;
    }
    return false;
}
console.log(powInteger(16));
