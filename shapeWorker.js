class ShapeWorker {
  constructor(shape, ...params) {
    this.shape = String(shape).toLowerCase();
    this.params = params;

    // parameter count checks
    const expected = {
      square: 1,
      rectangle: 2,
      circle: 1,
      parallelogram: 3,
      triangle: 3,
      trapezium: 3,
      sphere: 1,
      cylinder: 2,
      cube: 1,
      cuboid: 3,
      cone: 2,
      prism: 2,
    };

    if (!(this.shape in expected)) {
      throw new Error(`Unsupported shape "${shape}"`);
    }
    if (params.length !== expected[this.shape]) {
      throw new Error(
        `Shape "${shape}" expects ${expected[this.shape]} parameters, got ${params.length}`
      );
    }
  }

  area() {
    switch (this.shape) {
      case "square": {
        const [x] = this.params;
        return x ** 2;
      }
      case "rectangle": {
        const [x, y] = this.params;
        return x * y;
      }
      case "circle": {
        const [r] = this.params;
        return Math.PI * (r ** 2);
      }
      case "parallelogram": {
        const [x, y, p3] = this.params;
        if (typeof p3 === "number") return x * p3; // base * height
        if (typeof p3 === "string") {
          const deg = Number(String(p3).replace("deg", ""));
          return y * x * Math.sin(deg * Math.PI / 180);
        }
        return "No Object input so no value for theta or h and area can't be calculated";
      }
      case "triangle": {
        const [a, b, p3] = this.params;
        if (typeof p3 === "number") return 0.5 * b * p3; // 1/2 * base * height
        if (typeof p3 === "string") {
          const deg = Number(String(p3).replace("deg", ""));
          return 0.5 * a * b * Math.sin(deg * Math.PI / 180);
        }
        return "invalid input so area can't be calculated";
      }
      case "trapezium": {
        const [a, b, h] = this.params;
        return 0.5 * (a + b) * h;
      }
      default:
        return "Area not available for this shape";
    }
  }

  perimeter() {
    switch (this.shape) {
      case "square": {
        const [x] = this.params;
        return 4 * x;
      }
      case "rectangle": {
        const [x, y] = this.params;
        return 2 * (x + y);
      }
      case "circle": {
        const [r] = this.params;
        return 2 * Math.PI * r;
      }
      case "parallelogram": {
        const [x, y] = this.params;
        return 2 * (x + y);
      }
      case "triangle":
        return "Getting the perimeter for a triangle is crazy and i cant go on the intricacies for now 😪";
      case "trapezium":
        return "Getting the perimeter for a Trapezium  is kinda ambigious and i can't go on the    intricacies for now 😪";
      default:
        return "Perimeter not available for this shape";
    }
  }

  circumference() {
    if (this.shape === "circle") {
      const [r] = this.params;
      return 2 * Math.PI * r;
    }
    return "Circumference not available for this shape";
  }

  surfaceArea() {
    switch (this.shape) {
      case "sphere": {
        const [r] = this.params;
        return 4 * Math.PI * r * r;
      }
      case "cylinder": {
        const [r, h] = this.params;
        return 2 * Math.PI * r * (h + r);
      }
      case "cube": {
        const [x] = this.params;
        return 6 * x * x;
      }
      case "cuboid": {
        const [x, y, z] = this.params;
        return 2 * (x * y + x * z + y * z);
      }
      case "cone": {
        const [r, h] = this.params;
        return Math.PI * r * (Math.sqrt(r ** 2 + h ** 2) + r);
      }
      case "prism":
        return "Getting the perimeter for a Prism is crazy and i cant go on the intricacies for now 😪";
      default:
        return "Surface area not available for this shape";
    }
  }

  volume() {
    switch (this.shape) {
      case "sphere": {
        const [r] = this.params;
        return (4 * Math.PI * (r ** 3)) / 3;
      }
      case "cylinder": {
        const [r, h] = this.params;
        return Math.PI * (r ** 2) * h;
      }
      case "cube": {
        const [x] = this.params;
        return x ** 3;
      }
      case "cuboid": {
        const [x, y, z] = this.params;
        return x * y * z;
      }
      case "cone": {
        const [r, h] = this.params;
        return (Math.PI * (r ** 2) * h) / 3;
      }
      case "prism": {
        const [baseArea, h] = this.params;
        return baseArea * h;
      }
      default:
        return "Volume not available for this shape";
    }
  }
}

export default ShapeWorker;
