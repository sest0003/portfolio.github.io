"use strict";
//ORginal ts class
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
// Shortcut class
class Player2 {
    constructor(first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const jacket1 = new Jacket("Sons", "Blue");
