function calcul(operator, arr) {
  switch (operator) {
    case "+":
      return Number(arr[arr.length - 2]) + Number(arr[arr.length - 1]);
    case "-":
      return Number(arr[arr.length - 2]) - Number(arr[arr.length - 1]);
    case "*":
      return Number(arr[arr.length - 2]) * Number(arr[arr.length - 1]);
    case "/":
      return Number(arr[arr.length - 2]) / Number(arr[arr.length - 1]);
  }
}
function calculExpression(arr) {
  debugger;
  let temp = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Number(arr[i])) {
      temp.push(arr[i]);
    } else {
      temp.push(Math.floor(calcul(arr[i], temp)));
      temp.splice(temp.length - 3, 2);
    }
  }
  return temp[0];
}
calculExpression(["2", "1", "+", "3", "*"]);
