function bubSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

function findMedian(arr) {
  let key;
  for (let i = 0; i < arr.length - 1; i += 1) {
    let count = 0;
    if (Math.max.apply(Math, arr[i]) > Math.min.apply(Math, arr[i + 1])) {
      let temp = arr[i][arr[0].length - 1];
      arr[i][arr[0].length - 1] = arr[i + 1][0];
      arr[i + 1][0] = temp;
      arr[i] = bubSort(arr[i]);
      arr[i + 1] = bubSort(arr[i + 1]);
      count += 1;
    }
    if (count == 0) {
      key = false;
    } else {
      key = true;
    }
  }
  if (key) {
    return findMedian(arr);
  } else {
    return arr;
  }
}
function showMedian(arr) {
  findMedian(arr);
  let m = Math.floor((arr.length - 1) / 2);
  let n = Math.floor((arr[0].length - 1) / 2);
  return arr[m][n];
}
let ar = [[1, 3, 5], [2, 6, 9], [3, 6, 9]];
console.log(showMedian(ar));
