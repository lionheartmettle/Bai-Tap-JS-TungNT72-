function subString(strS,strW) {
    debugger;
    var j = 0;
    var i = 0;
    for(i = 0; i < strS.length; i += 1) {
      let x = i;
      for(j = 0; j < strW.length; j += 1) {
        if (strW[j] == strS[x]) {
          x++;
        } else {
          break;
        }
      }
      if (j == strW.length) {
        return x - j;
      }
    }
    return -1;
  }
  
  //console.log(findT("ABCDABD"));
  console.log(subString("ABC ABCDAB ABCDABCDABDE", "ABCDABD"));