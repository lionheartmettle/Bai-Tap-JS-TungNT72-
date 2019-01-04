class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {    
    while(true){
        try {
            let c = primitiveMultiply(a, b);    
            return c;    
        } catch (e) {
            console.log(e.message);
        }
    }
}
console.log(reliableMultiply(8, 8));
