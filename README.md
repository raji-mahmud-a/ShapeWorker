#shapeworkerjs
A lightweight JavaScript geometry library for working with 2D and 3D shapes. Built with clean, class-based implementations and designed for developers who need accurate geometric calculations in their projects.
## Table of Contents
 * Features
 * Installation
 * Quick Start
 * API Reference
   * 2D Shapes
   * 3D Shapes
   * Utility Shapes
 * Contributing
 * Author
 * License
## Features
 * Simple API – Each shape is represented as a class with intuitive methods.
 * 2D Shapes – Square, Rectangle, Circle, Parallelogram, Triangle, Trapezium.
 * 3D Shapes – Sphere, Cylinder, Cube, Cuboid, Cone, Prism.
 * Accurate Math – Uses standard mathematical constants and trigonometric functions.
 * Lightweight & Fast – No external dependencies.
 

## Installation
Install the package using NPM:
npm install shapeworkerjs

## Usage
### ES Modules (Recommended)
```javascript
import { Square, Sphere, Cone } from 'shapeworkerjs';
```

### CommonJS (Node.js)
```javascript
const { Square, Sphere, Cone } = require('shapeworkerjs');
```
### Quick Start
```javascript 
// Example using ES Modules
import { Square, Sphere } from 'shapeworkerjs';

// Create a 2D Square
const square = new Square(5);
console.log(`Square Area: ${square.area()}`);       // Output: 25
console.log(`Square Perimeter: ${square.perimeter()}`);  // Output: 20

// Create a 3D Sphere
const sphere = new Sphere(3);
console.log(`Sphere Volume: ${sphere.volume()}`);     // Output: 113.097...
console.log(`Sphere Surface Area: ${sphere.surfaceArea()}`); // Output: 113.097...
```
# API Reference
## 2D Shapes
### Square
A shape with four equal sides.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x) | Initializes with side length x. | new Square(5) |
| perimeter() | Calculates the perimeter (4 \times \text{side}). | square.perimeter() |
| area() | Calculates the area (\text{side}^2). | square.area() |
### Rectangle
A shape with four right angles and opposite sides of equal length.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x, y) | Initializes with side lengths x and y. | new Rectangle(4, 6) |
| perimeter() | Calculates the perimeter (2 \times (x + y)). | rectangle.perimeter() |
| area() | Calculates the area (x \times y). | rectangle.area() |
### Circle
A round plane figure defined by its radius.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x) | Initializes with radius x. | new Circle(3) |
| circumference() | Calculates the circumference (2 \pi r). | circle.circumference() |
| area() | Calculates the area (\pi r^2). | circle.area() |
### Parallelogram
A four-sided figure with opposite sides parallel.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x, y, param3) | Initializes with adjacent sides x and y. param3 is height (h) (number) or angle (string, e.g., "30deg"). | new Parallelogram(8, 5, "30deg") |
| perimeter() | Calculates the perimeter (2 \times (x + y)). | parallelogram.perimeter() |
| area() | Calculates the area (x \times h or x \times y \times \sin(\theta)). | parallelogram.area() |
### Triangle
A three-sided figure.
| Method | Description | Example Usage |
|---|---|---|
| constructor(a, b, param3) | Initializes with side a and side/base b. param3 is height (h) (number) or angle (string, e.g., "45deg") between a and b. | new Triangle(10, 6, 4) |
| perimeter() | Returns a placeholder string due to ambiguity of side lengths. | triangle.perimeter() |
| area() | Calculates the area (0.5 \times b \times h or 0.5 \times a \times b \times \sin(\theta)). | triangle.area() |
### Trapezium (Trapezoid)
A quadrilateral with at least one pair of parallel sides.
| Method | Description | Example Usage |
|---|---|---|
| constructor(a, b, h) | Initializes with parallel sides a, b and height h. | new Trapezium(5, 10, 4) |
| perimeter() | Returns a placeholder string due to ambiguity of non-parallel sides. | trapezium.perimeter() |
| area() | Calculates the area (0.5 \times (a + b) \times h). | trapezium.area() |
## 3D Shapes
### Sphere
A perfectly round three-dimensional object.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x) | Initializes with radius x. | new Sphere(5) |
| surfaceArea() | Calculates the surface area (4 \pi r^2). | sphere.surfaceArea() |
| volume() | Calculates the volume (\frac{4}{3} \pi r^3). | sphere.volume() |
### Cylinder
A geometric shape with two parallel circular bases and a curved surface.
| Method | Description | Example Usage |
|---|---|---|
| constructor(r, h) | Initializes with base radius r and height h. | new Cylinder(3, 7) |
| surfaceArea() | Calculates the total surface area (2\pi r(h+r)). | cylinder.surfaceArea() |
| volume() | Calculates the volume (\pi r^2 h). | cylinder.volume() |
### Cube
A symmetrical 3D shape contained by six equal squares.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x) | Initializes with side length x. | new Cube(4) |
| surfaceArea() | Calculates the surface area (6 \times \text{side}^2). | cube.surfaceArea() |
| volume() | Calculates the volume (\text{side}^3). | cube.volume() |
### Cuboid
A box-shaped object whose faces are all rectangles.
| Method | Description | Example Usage |
|---|---|---|
| constructor(x, y, z) | Initializes with side lengths x, y, and ` z$. | new Cuboid(2, 3, 4) |
### Cone
A shape that tapers from a circular base to a point (apex).
| Method | Description | Example Usage |
|---|---|---|
| constructor(r, h) | Initializes with base radius r and height h. | new Cone(3, 8) |
| surfaceArea() | Calculates the total surface area (\pi r (r + \sqrt{r^2 + h^2})). | cone.surfaceArea() |
| volume() | Calculates the volume (\frac{1}{3} \pi r^2 h). | cone.volume() |
## Utility Shapes
### Prism
A solid figure whose two end faces are similar and parallel bases.
| Method | Description | Example Usage |
|---|---|---|
| constructor(BaseArea, h) | Initializes with the \text{BaseArea} and height h. | new Prism(20, 5) |
| surfaceArea() | Returns a placeholder string due to varying lateral faces. | prism.surfaceArea() |
| volume() | Calculates the volume (\text{BaseArea} \times h). | prism.volume() |

## Contributing
Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.
Development Setup
 * Clone the repository.
 * Submit your improvements via pull request.

## Author
Raji Mahmud A.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for developers who need reliable geometry calculations in JavaScript.

