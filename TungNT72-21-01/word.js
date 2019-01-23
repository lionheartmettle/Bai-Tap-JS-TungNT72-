// EX 1 :
// (function IIFE() {
//   let foo = x => {
//     debugger;
//     var y = x * 2;
//     return function(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         let obj = [];
//         setTimeout(() => {
//           obj.length = 1;
//           obj[0] = this.w;
//         }, 100);
//         return obj;
//       }
//     };
//   };

//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);

//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);

//   setTimeout(() => {
//     console.log(list1[0] === list2.reduce((s, v) => s + v, 0));
//   }, 200);
// })();

//ex2 :
var x = 2,
  fns = [];

(function() {
  var x = 5;
  // function fn() {
  //   return 4;
  // }
  for (var i = 0; i < x; i++) {
    fns.push(() => x-1);
  }
})();

//console.log(x * 2 === fns[x * 2]());

//Ex 3:
function foo(...agu) {
  agu = agu.filter(i => i != 6 && i != 4);
  return agu;
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo(...a1, ...a2);
}

// DO NOT MODIFY BELOW CODE
//console.log(bar().join('') === '281012');

//EX4 :
function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  debugger;
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

// YOUR CODE HERE
function response(obj) {
  obj.bar = defaults.bar;
  obj.bam.qam = defaults.bam.qam  
  check(obj); // true
}

// DO NOT MODIFY
ajax('http://fun.tld', response);

//EX 5 :
function upper(strings, ...values) {
  values = values.map(a => a.toUpperCase());
  let m = strings.length;
  let n = values.length;
  let i,j;
  let result = '';
  for(i = 0, j = 0; i < m, j < n; i++, j++) {
    result += strings[i] + values[j];
  }
  if (m > n) {
    result += strings[i];
  }
  return result;
}

var name = 'Nguyen Van A',
  account = 'ANV',
  classname = 'FrontEnd AngularJS';

// console.log(
//   upper`Hello ${name} (@${account}), welcome to the ${classname}!`===
//     'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!'
// );



