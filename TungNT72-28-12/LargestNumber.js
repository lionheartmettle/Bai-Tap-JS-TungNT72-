function maxLength(arraySt) {
  var x = [];
  let i;
  for (i = 0; i < arraySt.length; i += 1) {
    x[i] = arraySt[i].length;
  }
  return Math.max.apply(Math, x);
}

function convertArray(arraySt, maxLengthOfNumber) {
  var day = [];
  let i, j;
  for (i = 0; i < arraySt.length; i += 1) {
    day[i] = [];
    for (j = 0; j < maxLengthOfNumber; j += 1) {
      if (arraySt[i][j] != undefined) {
        day[i].push(arraySt[i][j]);
      } else {
        day[i].push("x");
      }
    }
  }
  return day;
}

function convertRsPhu(rsPhu,maxLengthOfNumber) {
  var phu = [];
  let i,j;
  for (i = 0; i < rsPhu.length; i += 1) {
    phu[i] = [];
    phu[i].push(rsPhu[i][0].join().replace(/,/g,''));
  }
  return phu;
}

var rs = [];

function createLN(array) {
  if (array.length == 0) {
    return rs;
  } 
  var i;
  var ts = [];
  var rsphu = [];
  for (i = 0; i < array.length; i += 1) {
    ts[i] = array[i].toString();
  }
  var mln = maxLength(ts);
  var day = convertArray(ts, mln);

  if (array.length == 1) {
    rs.push(day.splice(0, 1));
    return rs;
  }
  var maxNumber = 0;
  
  function deQuy(day) {
    // debugger;
    let i,j;
    //tim so lon nhat trong cot dau
    if (day.length == 0) {
      return;
    }

    var temp = 0;
    for (j = 0; j < mln; j += 1) {
      if (day.length == 0) {
        return;
      }
      var count = 0;
      var checkX = false;
      if (day[0][j] == "x") {
        temp = maxNumber;
      } else {
        temp = day[0][j];
      }
      //Tim gia tri lon nhat khac 'x'
      for (i = 0; i < day.length; i += 1) {
        if (temp < day[i][j] && day[i][j] != "x") {
          temp = day[i][j];
        }
      }
      if (temp > maxNumber) {
        for (i = 0; i < day.length; i += 1) {
          if (temp == day[i][j]) {
            count += 1;
          }
        }
      } else if (temp == maxNumber) {
        for (i = 0; i < day.length; i += 1) {
          if (temp == day[i][j] || day[i][j] == "x") {
            count += 1;
          }
        }
      } else {
        for (i = 0; i < day.length; i += 1) {
          if ("x" == day[i][j]) {
            checkX = true;
          }
        }
        if (checkX) {
          for (i = 0; i < day.length; i += 1) {
            if ("x" == day[i][j]) {
              count += 1;
            }
          }
        } else {
          for (i = 0; i < day.length; i += 1) {
            if (temp == day[i][j]) {
              count += 1;
            }
          }
        }
      }
      if (count == 1) {
        for (i = 0; i < day.length; i += 1) {
          if (temp == day[i][j] && temp > maxNumber) {
            rs.push(day.splice(i, 1));
            break;
          } else if (
            (temp == day[i][j] || day[i][j] == "x") &&
            temp == maxNumber
          ) {
            rs.push(day.splice(i, 1));
            break;
          } else if (temp < maxNumber && checkX == "x" && day[i][j] == "x") {
            rs.push(day.splice(i, 1));
            break;
          } else if (temp < maxNumber && checkX != "x" && temp == day[i][j]) {
            rs.push(day.splice(i, 1));
            break;
          }
        }
        deQuy(day);
      } else {
        if (temp > maxNumber) {
          maxNumber = temp;
          for (i = 0; i < day.length; i += 1) {
            if (temp != day[i][j]) {
              rsphu.push(day.splice(i, 1));
              i -= 1;
            }
          }
        } else if (temp == maxNumber) {
          for (i = 0; i < day.length; i += 1) {
            if (temp != day[i][j] && day[i][j] != "x") {
              rsphu.push(day.splice(i, 1));
              i -= 1;
            }
          }
        } else {
          maxNumber = temp;
          if (checkX) {
            for (i = 0; i < day.length; i += 1) {
              if ("x" != day[i][j]) {
                rsphu.push(day.splice(i, 1));
                i -= 1;
              }
            }
          } else {
            for (i = 0; i < day.length; i += 1) {
              if (temp != day[i][j]) {
                rsphu.push(day.splice(i, 1));
                i -= 1;
              }
            }
          }
        }
      }
    }

    if (day.length > 0) {
      while (day.length != 0) {
        rs.push(day.splice(0, 1));
      }
    }
  }
  deQuy(day)

  return createLN(convertRsPhu(rsphu,mln));
}
// sau khi co' ket qua rs tra ve` ta se~ xu ly' tiep de ra dc ket qua
function tung (array) {
  createLN(array);
  var resul = [];
  let i,j;
  for(i = 0; i < rs.length; i += 1){
    for(j = 0; j < rs[0][0].length; j += 1){
      if(rs[i][0][j] != 'x'){
        resul.push(rs[i][0][j]);
      }
    }    
  }
  return Number(resul.join().replace(/,/g,''));
}
