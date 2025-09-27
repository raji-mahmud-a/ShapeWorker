class Square {
  constructor(x){
    this._side = x
  }
  
  perimeter() {
    return 4 * this._side
  }
  
  area() {
    return this._side ** 2
  }
}

class Rectangle{
  constructor(x,y) {
    this._x = x
    this._y = y
  }
  
  perimeter() {
    return 2 * (this._x + this._y)
  }
  
  area() {
    return this._x * this._y
  }
}

class Circle {
  constructor(x){
    this._radius = x
  }
  
  circumference() {
    return 2 * Math.PI * this._radius
  }
  
  area() {
    return Math.PI * (this._radius ** 2)
  }
}

class Parallelogram{
  constructor(x, y, param3){
    this._x = x 
    this._y = y
    if (typeof param3 == "string") {
     let degreeString = param3.replace('deg', '');
    this._theta = Number(degreeString);
    } else if(typeof param3 == 'number'){
      this._h = param3
    } else {
      return 'type of 3rd param not supported'
    }
  }
  
  perimeter() {
    return 2 * (this._x + this._y)
  }
  
  area() {
    let areaVal = Number()
    if (this._h) {
      return this._x * this._h
    } else if(this._theta){
      return (this._y * this._x * Math.sin(this._theta * (Math.PI / 180))).toFixed(6)
    } else {
      return "No Object input so no value for theta or h and area can't be calculated"
    }
  }
}

class Triangle {
  constructor(a, b, param3){
    this._x = a
    this._y = b
    if (typeof param3 == "string") {
     let degreeString = param3.replace('deg', '');
    this._theta = Number(degreeString);
    } else if(typeof param3 == 'number'){
      this._h = param3
    } else {
      return 'type of 3rd param not supported'
    }
  }
  
  perimeter() {
    return "Getting the perimeter for a triangle is crazy and i cant go on the intricacies for now 😪"
  }
  
  area() {
    let areaVal = Number()
    if (this._h) {
      return this._y * this._h * 0.5
    } else if(this._theta){
      return (0.5 * this._y * this._x * Math.sin(this._theta * (Math.PI / 180))).toFixed(6)
    } else {
      return "No Object input so no value for theta or h and area can't be calculated"
    }
  }
}