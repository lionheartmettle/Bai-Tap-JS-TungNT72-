function numberGenerator() {
    // Local free variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber();
  }

  var a = numberGenerator();