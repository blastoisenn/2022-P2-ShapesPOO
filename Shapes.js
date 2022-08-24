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

class Pentagon extends Shape {
     constructor (l5, a5) {
        super();
        this.lado = l5;
        this.apotema = a5;
     }

     perimeter(){
        return this.lado * 5;
     }

     area() {
        return ((this.lado*5)*this.apotema)/2
     }
}

class Hexagon extends Shape {
    constructor (l6, a6) {
       super();
       this.lado = l6;
       this.apotema = a6;
    }

    perimeter(){
       return this.lado * 6;
    }

    area() {
       return ((this.lado*6)*this.apotema)/2
    }
}

class Triangle2 extends Triangle {
       constructor (a, b, c){
        super();
        this.lado1 = a;
        this.lado2 = b;
        this.lado3 = c;
       
       }
        perimeter(){
            return this.lado1+this.lado2+this.lado3;
        }

        angles(){
            this.angulo1 = Math.acos((b**2+c**2-a**2)/(2*b*c));
            this.angulo2 = Math.acos((a**2+c**2-b**2)/(2*a*c));
            this.angulo3 = Math.acos((a**2+b**2-c**2)/(2*b*a));
        }
}


export {Circle, Rectangle, Square, Triangle, Pentagon, Hexagon, Triangle2};



