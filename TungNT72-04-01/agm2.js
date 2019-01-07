//2.1
function identity(pa) {
  return pa;
}
//2.2
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
//2.3
function identifyf(num) {
  return function() {
    return num;
  };
}
// var four = identifyf(4);
// console.log(four()); // 4

//2.4
function addf(num1) {
  return function(num2) {
    return num1 + num2;
  };
}
//2.5
function mulf(num1) {
  return function(num2) {
    return num1 * num2;
  };
}
function liftf(fn) {
  return fn;
}
//2.6
function curry(fn, num1) {
  return fn(num1);
}
//2.7
var inc = function(num) {
  return num + 1;
};
// var inc = num => num + 1;
//2.8
function twice(fn) {
  return function(num) {
    return fn(num, num);
  };
}
var doubl = twice(add);
var square = twice(mul);

//2.9
function reverse(fn) {
  return function(num1, num2) {
    return fn(num2, num1);
  };
}
//2.10
function composeu(fn1, fn2) {
  return function(num) {
    return fn2(fn1(num));
  };
}
//2.11
function composeb(fn1, fn2) {
  return function(num1, num2, num3) {
    return fn2(fn1(num1, num2), num3);
  };
}
//2.12
function limit(fn, n) {
  let count = n;
  return function(num1, num2) {
    count--;
    if (count >= 0) {
      return fn(num1, num2);
    }
    return undefined;
  };
}
var addLimited = limit(add, 1);
addLimited(3, 4); // 7
//2.13
function from(n) {
  return function() {
    return n++;
  };
}
// var index = from(0);
// index();
// index();
// console.log(index());
//2.14
function to(fn, end) {
  let count = end;
  const low = fn();
  let a = fn;
  return function() {
    count -= 1;
    if (count >= low) {
      return a() - 1;
    }
    return undefined;
  };
}
// var index = to(from(1), 3);
// index();
// index();
// console.log(index());
//2.15
function fromTo(begin, end) {
  let count = end;
  let low = begin;
  return function() {
    count -= 1;
    if (count >= low) {
      return begin++;
    }
    return undefined;
  };
}
// var index = fromTo(0, 3);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index()); // undefined
//2.16
function element16(arr, fn) {
  return function() {
    return arr[fn()];
  };
}
// var ele = element16([1, 2, 3, 4], fromTo(1, 3));
// ele();
// ele();
// console.log(ele());
//2.17
function element(arr) {
  let n = 0;
  return function() {
    return arr[n++];
  };
}
// var ele = element([1, 2, 3, 4]);
// ele();
// ele();
// ele();
// console.log(ele());
//2.18
var array = [];
function collect(fn,ar) {
  return function () {
    let rs = fn();
    if (rs != undefined) {
      ar.push(rs);
    }
    return rs;
  }
}
// var col = collect(fromTo(0, 2), array);
// console.log(col());
// console.log(col());
// console.log(col());
// console.log(array);
//2.19
function filter(fn1, fn2) {
  return function () {
    let c
    do {
      c = fn1();  
    }
    while(!fn2(c) && c != undefined);        
    return c;    
  }
}
// var fil = filter(fromTo(0, 5),
//   function even(value) {
//     return (value % 2) === 0;
//   });
// console.log(fil());
// console.log(fil());
// console.log(fil());
// console.log(fil());
//2.20
function concat(fn1, fn2) {
  return function () {
    let c;    
    c = fn1();
    if (c != undefined) {
      return c;
    }
    return fn2();
  }
}
// var con = concat(fromTo(0, 3), fromTo(0, 2));
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
//2.21
function gensymf(ch) {
  let count = 0;
  return function () {
    count++;
    return `${ch.toUpperCase()}${count}`;
  }
}
// var genG = gensymf('g');
// console.log(genG());
// console.log(genG());
// var genK = gensymf('k');
// console.log(genG());
// console.log(genG());
//2.22
function gensymff(fn,begin) {
  
  return function (ch) {   
    let c = begin; 
    return function () {     
      c = fn(c); 
      return `${ch.toUpperCase()}${c}`;
    }
  }
}
// var gensymf = gensymff(inc, 0);
// var genG = gensymf('G');
// var genH = gensymf('H');
// console.log(genG());
// console.log(genG());
// console.log(genG());
// console.log(genH());
//2.23
function fibonaccif(num1, num2) {
  return function () {
    // if () {

    // }
    return num1 + num2;
  }
}

