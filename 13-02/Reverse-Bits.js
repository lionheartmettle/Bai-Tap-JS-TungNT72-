// Tận dụng lại bài chuyến số sang binary
// Cuối bài đó có phần reverse lại, nhưng ta bỏ nó đi, để nguyên tình trạng
// Thêm số 0 sao cho đủ 32 số
// Giá trị output sẽ là cộng dồn của arr[i]^(i) với các arr[i] == 0 thì bỏ qua

function binaryRep(num) {    
    var arr = [];
    let a = num;
    function dequy() {        
        if (Math.floor(a / 2) == 0) {
            arr.push(a);
            return;
        }
        arr.push(a%2);
        a = Math.floor(a / 2);
        return dequy();
    }
    dequy();
    for(let i = arr.length; i < 32; i += 1) {
      arr.unshift(0);
    }
    return arr;
}
console.log(binaryRep(3));

function readBinary(num) {
  let arr = binaryRep(num);
  let result = 0;
  for (let i = 0; i < 32; i += 1) {
    if(arr[i] === 1) {
      result += Math.pow(2,i);
    }
  }
  return result;
}
console.log(readBinary(3));