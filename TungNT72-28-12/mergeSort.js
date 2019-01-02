function mergeSort (arr) {
    if (arr.length === 1) {
      return arr;
    }
  
    var m = Math.floor(arr.length / 2);
    var left = arr.slice(0, m) ;
    var right = arr.slice(m);
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  }
  
  function merge (left, right) {
    var result = [];
    var i = 0;
    var j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }