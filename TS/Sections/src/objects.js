"use strict";
const dog = {
    name: "flyffy",
    age: 12,
    color: "red"
};
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "tomas", last: "buddy" });
let coordinate = { x: 34, y: 2 };
function randomCord() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: "Lolly", last: "Jagger" });
