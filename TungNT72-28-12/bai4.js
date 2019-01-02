function range(a,b,c){
    var ra = [];
    let st = 1;
    if(c != 0 && c != undefined && c != null){
        st = c;
    }
    if (a != b){
        for(let i = 0; i <= (b-a)/st; i+=1){
            ra[i] = a + st*(i);
        }
    }else {
        ra.push(a);
    }
    return ra;
}
function sum(a){
    var s = 0;
    for(let i = 0; i < a.length; i+=1){
        s += a[i]
    }
    return s;
}

//
function reverseArray (a){
    let l = a.length;
    let temp = 0;
    for(let i = 0; i < l/2 ; i += 1){
        temp = a[i];
        a[i] = a[l - i-1];
        a[l - i-1] = temp;
    }
    return a;
}
let arrayValue = [1 , 2, 3, 4, 5];
let s = [ 6, 7, 8, 9, 10];
function reverseArrayInPlace(x){
    //debugger;
    let l = x.length;
    let temp = 0;
    for(let i = 0; i < l/2 ; i += 1){
        temp = x[i];
        x[i] = x[l - i-1];
        x[l - i-1] = temp;
    }
}

//
function arrayToList (a){
    if(a.length == 0) {
        return null;
    }
    let r = {
        value :  a.shift(),
        rest :   arrayToList(a)
    };
    return r;
}
let rs = [];
function ListToArray(a){
    // debugger;
    if(a == null) {
        return ;
    }
    rs.push(a.value);
    ListToArray(a.rest);
    return rs;
}

function prepend(a,b){
    if(b == null) {
        return {
            value : a,
            rest : null
        };
    }
    let r = {
        value : a,
        rest : prepend(b.value,b.rest)
    };
    return r;
}

function nth(a,b) {
    let r = ListToArray(a);
    return r[b];
}

//
function deepEqual(a,b){
    // debugger;
    let keyOb1 = Object.keys(a);
    let keyOb2 = Object.keys(b);
    let i,j;
    if(keyOb1.length != keyOb2.length){
        return false;
    }
    for(i = 0; i < keyOb1.length; i += 1){
        for(j = 0; j < keyOb1.length; j += 1){
            if(keyOb1[i] == keyOb2[j]){
                if(typeof(a[keyOb1[i]]) != 'object'){
                    if (a[keyOb1[i]] == b[keyOb1[i]]){
                        break;
                    }
                    return false;
                } else {
                    if (deepEqual(a[keyOb1[i]],b[keyOb1[i]])){
                        break;
                    }
                    return false;
                }
                
            }
            if( j == keyOb1.length - 1){
                return false;
            }
        }
    }
    return true;
}

