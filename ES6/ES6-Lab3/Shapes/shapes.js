class Shapes {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    console.log(`Area: ${this.getArea()} Perimeter: ${this.getPerimeter()}`);
  }
}

export class Circle extends Shapes {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return (Math.PI * this.radius * this.radius).toFixed(4);
  }

  getPerimeter() {
    return (2 * Math.PI * this.radius).toFixed(4);
  }
}

export class Square extends Shapes {
  constructor(length) {
    super(length, length);
  }

  getPerimeter() {
    return 4 * this.height;
  }
}

export class Rectangle extends Shapes {
  constructor(width, height) {
    super(width, height);
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}
