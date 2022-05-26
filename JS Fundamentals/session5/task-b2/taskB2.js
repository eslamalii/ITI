function Rectangle(width, length) {
  this.width = width;
  this.length = length;
  Rectangle.count++;
}

Rectangle.prototype.area = function () {
  return `Rectangle area: ${this.width * this.length}`;
};

Rectangle.prototype.perimeter = function () {
  return `Rectangle perimeter: ${2 * (this.length + this.width)}`;
};

Rectangle.prototype.objNumbers = function () {
  return `${Rectangle.count} Obj Created`;
};

Rectangle.prototype.toString = function () {
  return `${this.area()}, ${this.perimeter()}, Width: ${this.width}, Length: ${
    this.length
  }`;
};

Rectangle.count = 0;

var obj = new Rectangle(5, 5);
var obj2 = new Rectangle(25, 6);
var obj3 = new Rectangle(10, 5);
var obj4 = new Rectangle(3, 4);
var obj5 = new Rectangle(10, 2);

console.log(obj.objNumbers());
console.log(obj.perimeter());
console.log(obj3.area());
console.log(obj2.toString());
