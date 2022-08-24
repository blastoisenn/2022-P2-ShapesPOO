class Shape {
    area() {
        return 0;
    }
  
    perimeter() {
      return 0;
    }
  
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
  
class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}
  
class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(l) {
        super(l, l);
    }
}
  
class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}

export {Circle, Rectangle, Square, Triangle};



