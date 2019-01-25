//EX1 :
var numbers = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 101; i += 1) {
      yield i;
    }
  }
};
// should print 0..100 by 1s
// for (let num of numbers) {
//   console.log(num);
// }
var numbers2 = {
  *[Symbol.iterator]() {
    for (let i = 6; i < 31; i += 4) {
      yield i;
    }
  }
};
// should print 6..30 by 4s
for (let num of numbers2) {
    console.log(num);
}
//EX3 :
var m = new Map();
function fibonaci(n) {
  if (n <= 1) {
    return 1;
  }
  m.set(`f${n - 1}`, fibonaci(n - 1));
  m.set(`f${n - 2}`, fibonaci(n - 2));
  return m.get(`f${n - 1}`) + m.get(`f${n - 2}`);
}
// fibonaci(5);
// console.log(fibonaci(5));
//EX4 :
var users = [
  {
    id: 1,
    name: 'Dung',
    age: 20
  },
  {
    id: 2,
    name: 'Diu',
    age: 20
  },
  {
    id: 3,
    name: 'Ky',
    age: 20
  },
  {
    id: 1,
    name: 'Hai',
    age: 22
  }
];
var userSetId = new Set();
var arr = [];
for (let i = 0; i < users.length; i += 1) {
  if (!userSetId.has(users[i].id)) {
    userSetId.add(users[i].id);
    arr.push(users[i]);
  }
}
//console.log(arr);
//EX 2 : co file rieng

