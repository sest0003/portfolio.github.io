

let age: number | string = 21; 
age = 23;
age = "23";

type Point = {
    x: number;
    y: number;
}

type Location = {
    lat: number;
    long: number;
}

let coord: Point | Location

//Funtions

function printAge(age: number | string): void {
    console.log{${age}

    }
}

function calcTax(price: number | string, tax: number) {
    
    // Man måste kolla vad det rä för variabel om funtionen ska fungera (typeof)
    if(typeof price === "string") {
       return parseFloat(price =  price.replace("$", "")) * tax

    }

    return price * tax

}

console.log(calcTax("$100", 0.30))

// Arrays

const stuff: (number | string) [] =[1,2,3, "das"] 
const cords: (Point | Location) [] = []

// Literal types

//en hårdkodad siffra eller sträng som inte går att ändra på-
const zero: 0 = 0;


// kombination av union type och literal, som interface 
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type dayOfWeek = 

"måndag"
| "tisdag"
| "onsdag"
| "torsdag"
| "fredag";



let today: dayOfWeek = "måndag";