// function arrSeach(arr,num) {
//     for (var i = 0; i < arr.length; i += 1) {
//         if (num <= arr[i]) {
//             return i;
//         }
//     }
//     return i;
// }

function arrSeach(arr, num) {
    let star = 0;
    let end = arr.length - 1;
    let m = Math.floor(end / 2);
    
    function dequy(st, en) {
      m = Math.floor((st + en) / 2);
      if (num == arr[m]) {
        return m;
      }
      if (st == arr.length - 2) {
        if (num == arr[m + 1]) {
          return m + 1;
        }
        return 'Not found ! and it would be :' + (m + 2);
      }
      if (en == 1) {
        return 'Not found ! and it would be :' + 0;
      }
      if (m == st) {
        return 'Not found ! and it would be :' + (m + 1);
      }
      if (num < arr[m]) {
        en = m;
        return dequy(st, en);
      }
      if (num > arr[m]) {
        st = m;
        return dequy(st, en);
      }
    }
    return dequy(star, end);
  }
  arrSeach([1, 2, 3, 4, 5, 7, 8, 9], -1);