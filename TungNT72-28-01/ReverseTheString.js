function rev(str) {
  let arr = str.split(' ');
  arr = arr.filter(i => i != ' ');
  arr = arr.reverse();
  return arr.join(' ');
}
