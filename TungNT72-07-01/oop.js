//EX1:
class Vertor {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  get length() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }   
}
Vertor.prototype.length = function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}
Vertor.prototype.plus = function (obj) {
    return new Vertor(this.x + obj.x, this.y + obj.y);
}
Vertor.prototype.minus = function (obj) {
    return new Vertor(this.x - obj.x, this.y - obj.y);
}
// console.log(new Vertor(1, 2).plus(new Vertor(2, 3)));
// console.log(new Vertor(1, 2).minus(new Vertor(2, 3)));
// console.log(new Vertor(3, 4).length);
//EX2 :
class Group {
    constructor() {
        
    }
    
}