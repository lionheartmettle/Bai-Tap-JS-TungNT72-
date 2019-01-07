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
var inc = function (num) {
    return num + 1;
}
// var inc = num => num + 1;
//2.8
function twice(fn) {
    return fn;
}
console.log(inc(inc(5)));
