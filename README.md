# shapeWorker.js

A lightweight **JavaScript geometry library** for working with **2D and 3D shapes**. Unified into a single `ShapeWorker` class for simpler usage and easier maintenance.

[![Documentation](https://img.shields.io/badge/docs-available-brightgreen)](https://mahmud-links.pxxl.xyz/shapeWorkerjs.html)
[![CDN](https://img.shields.io/badge/CDN-ready-blue)](https://mahmud-links.pxxl.xyz/shapeWorker.js)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Quick Start](#quick-start)
* [Examples](#examples)
* [Documentation](#documentation)
* [Why This Project](#why-this-project)
* [Contributing](#contributing)
* [Author](#author)

## Features

* **Unified API** – One class, `ShapeWorker`, handles all supported shapes
* **2D Shapes** – Square, Rectangle, Circle, Parallelogram, Triangle
* **3D Shapes** – Sphere, Cylinder, Cube, Cuboid, Cone
* **Accurate Math** – Uses `Math.PI`, trigonometry, and clean formulas
* **Parameter Validation** – Ensures correct parameter count for each shape
* **Lightweight & Fast** – No dependencies, ready to use via CDN or import
* **Well-documented** – Complete HTML documentation with interactive examples

## Installation

### Via CDN

```html
<script src="https://mahmud-links.pxxl.xyz/shapeWorker.js"></script>
```

### Via Import

```javascript
import ShapeWorker from "./shapeWorker.js";
// or 
const ShapeWorker = require('shapeWorker.js');
```

## Quick Start

```javascript
// Create shapes and calculate properties
const square = new ShapeWorker("square", 5);
console.log(square.area());       // 25
console.log(square.perimeter());  // 20

const sphere = new ShapeWorker("sphere", 3);
console.log(sphere.volume());     // 113.097...
console.log(sphere.surfaceArea()); // 113.097...
```

## Examples

### 2D Shapes

#### Square

```javascript
const square = new ShapeWorker("square", 5);
square.area();       // 25
square.perimeter();  // 20
```

#### Rectangle

```javascript
const rectangle = new ShapeWorker("rectangle", 4, 6);
rectangle.area();       // 24
rectangle.perimeter();  // 20
```

#### Circle

```javascript
const circle = new ShapeWorker("circle", 3);
circle.area();          // 28.274...
circle.circumference(); // 18.849...
```

#### Triangle

```javascript
// Using base and height
const triangle1 = new ShapeWorker("triangle", 10, 6, 4);
triangle1.area(); // 12

// Using two sides and angle
const triangle2 = new ShapeWorker("triangle", 10, 6, "45deg");
triangle2.area(); // ~21.213
```

#### Parallelogram

```javascript
const parallelogram = new ShapeWorker("parallelogram", 8, 5, "30deg");
parallelogram.area();      // 20
parallelogram.perimeter(); // 26
```

### 3D Shapes

#### Sphere

```javascript
const sphere = new ShapeWorker("sphere", 5);
sphere.surfaceArea(); // 314.159...
sphere.volume();      // 523.598...
```

#### Cylinder

```javascript
const cylinder = new ShapeWorker("cylinder", 3, 7);
cylinder.surfaceArea(); // 188.495...
cylinder.volume();      // 197.920...
```

#### Cube

```javascript
const cube = new ShapeWorker("cube", 4);
cube.surfaceArea(); // 96
cube.volume();      // 64
```

#### Cuboid

```javascript
const cuboid = new ShapeWorker("cuboid", 2, 3, 4);
cuboid.surfaceArea(); // 52
cuboid.volume();      // 24
```

#### Cone

```javascript
const cone = new ShapeWorker("cone", 3, 8);
cone.surfaceArea(); // 103.672...
cone.volume();      // 75.398...
```

## Documentation

Full interactive documentation with detailed examples and API reference:

**[View Complete Documentation](https://mahmud-links.pxxl.xyz/shapeWorkerjs.html)**

The documentation includes:

* Interactive code examples
* Complete API reference
* Visual representations
* Copy-paste ready code snippets

## Why This Project

`shapeWorker.js` demonstrates:

* **Mathematical Precision** – Accurate geometric formulas and input validation
* **Developer Experience** – Unified single-class API design
* **Documentation First** – Comprehensive docs with real-world examples
* **Performance Focus** – Lightweight implementation with no external dependencies

## Contributing

Contributions are welcome! Submit issues, feature requests, or pull requests.

### Development Setup

1. Clone the repository
2. Open `index.html` in your browser for testing
3. Check the documentation page for API reference
4. Submit improvements via pull request

## Author

**Mahmud Raji**

* Portfolio: [mahmud-links.pxxl.xyz](https://mahmud-links.pxxl.xyz)
* GitHub: [@raji-mahmud-a](https://github.com/raji-mahmud-a)
* Twitter(X): [@*Raji_Mahmud*](https://x.com/_Raji_Mahmud_)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
