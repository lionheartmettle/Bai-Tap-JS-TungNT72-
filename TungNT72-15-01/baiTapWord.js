//EX1 : setTimeout
function ex1() {
  setTimeout(() => {
    console.log("Hello Fresher Academy");
  }, 1000);
}
// ex1();
//EX2 : setInterval
function ex2() {
  setInterval(() => {
    console.log("Hello Fresher Academy");
  }, 3000);
}
// ex2();
//EX3 : Event Loop
function ex3() {
  (() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 1000);
    setTimeout(() => {
      console.log(3);
    }, 0);
    console.log(4);
  })();
}
// ex3();
//EX4 : Event loop Cont
function ex4_1() {
  console.log("A");
  setImmediate(function() {
    console.log("B");
  }, 0);
  setImmediate(function() {
    console.log("C");
  }, 0);
  console.log("D");
} // output : A D B C

function ex4_2() {
  setTimeout(function() {
    setTimeout(function() {
      console.log("A");
    }, 0);
  }, 0);

  setTimeout(function() {
    console.log("B");
  }, 0);

  setTimeout(function() {
    setTimeout(function() {
      console.log("C");
    }, 0);
  }, 10);

  setTimeout(function() {
    console.log("D");
  }, 0);
} // // output : B D A C
function ex4_3() {
  var x = "A";

  setTimeout(function() {
    console.log(x);
    x = "B";
  }, 3);

  setTimeout(function() {
    console.log(x);
    x = "C";
  }, 2);

  setTimeout(function() {
    console.log(x);
    x = "D";
  }, 1);

  setTimeout(function() {
    console.log(x);
  }, 4);
}
// ex4_3(); output la : A ...
function ex4_4() {
  var t1 = setTimeout(function() {
    console.log("A");
    setTimeout(function() {
      console.log("B");
    }, 0);
  }, 100);

  var t2 = setTimeout(function() {
    console.log("C");
    setTimeout(function() {
      console.log("D");
    }, 60);
  }, 200);

  clearTimeout(t1);

  setTimeout(function() {
    clearTimeout(t2);
  }, 250);
} // outPut : C D
// ex4_4();
//EX 5 : Sync and Async
//case 1 :
function logA() {
  console.log("A");
}

function logB() {
  console.log("B");
}

function logC() {
  console.log("C");
}

function logD() {
  console.log("D");
}

// logD(logA(logB(logC()))); // output : C B A D
//case 2 :
function alogA() {
  setTimeout(function() {
    console.log("A");
  }, 0);
}

function alogB() {
  setTimeout(function() {
    console.log("B");
  }, 0);
}

function alogC() {
  setTimeout(function() {
    console.log("C");
  }, 0);
}

function alogD() {
  setTimeout(function() {
    console.log("D");
  }, 0);
}

//alogD(alogA(alogB(alogC()))); // output : C B A D
//case 3 :
function case3() {
  setTimeout(function() {
    console.log("A");
    setTimeout(function() {
      console.log("B");
      setTimeout(function() {
        console.log("C");
        setTimeout(function() {
          console.log("D");
        }, 0);
      }, 100);
    }, 200);
  }, 300);
}

// output : A B C D
//case 4 :
function case4() {
  setTimeout(function() {
    console.log("A");
    setTimeout(function() {
      console.log("B");
    }, 100);
  }, 200);

  setTimeout(function() {
    console.log("C");
    setTimeout(function() {
      console.log("D");
    }, 200);
  }, 100);
}
//case4(); // output : C A B
//EX6 :
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
// }
//OUTPUT : 5 five time
//EX 7 : Tracking the scalpel
//EX 8 :
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    let arr = [];
    let counter = 0;
    if(promises.length == 0) {
      return resolve([]);
    }
    promises.map((promise, index) => {
      promise.then(data => {
        arr[index] = data;
        if (++counter >= promises.length) return resolve(arr);
      }).catch(error => reject(error));
    });    
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
