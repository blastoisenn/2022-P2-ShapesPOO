import {Circle, Rectangle, Square, Triangle, Pentagon, Hexagon, Triangle2} from './Shapes.js';

const triangle = new Triangle(10, 5);
const triangle2 = new Triangle(9, 19);
console.log(triangle.area());
console.log(triangle2.area());

const square = new Square(10);
console.log(`Area: ${square.area()} - Perimeter: ${square.perimeter()}`);

const rectangle = new Rectangle(10, 10);
console.log(`Area: ${rectangle.area()} - Perimeter: ${rectangle.perimeter()}`);

const circle = new Circle(10);
console.log(circle.perimeter());

const pentagon = new Pentagon(5, 6);
console.log(`Area: ${pentagon.area()} - Perimeter: ${pentagon.perimeter()}`);

const hexagon = new Hexagon(5, 6);
console.log(`Area: ${hexagon.area()} - Perimeter: ${hexagon.perimeter()}`);