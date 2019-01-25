fns = [];
var x = 5;
for (var i = 0; i < x; i++) {
  //let j = i;
  (function () {
    fns.push(() => {
      return i
    });
  })();
}

console.log(fns[4]());