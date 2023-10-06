let highScore: number | boolean; 

//Kan vara antingen eller 
let stuffish:  string[] | number[] =[]

//Kan vara en blandning 
const stuff: (number | string) [] =[1,2,3, "das"] 


type skillLevel =
| "Beg" | "Inter"  | "Adv" | "Exp" ;

type skiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: skillLevel;
};

type RGBColor = {
    R: number,
    G: number,
    B: number;
}

type HSLColor = {
    H: number,
    S: number,
    L: number;
}

let colors: (RGBColor | HSLColor) [] = [];

const greet = (name: string | string []): void => {
    if(typeof name === "string") {
        console.log("string")
    } else {
        for(let n of name) {
            console.log("Array")
        }
    }
};