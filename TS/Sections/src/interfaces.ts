interface point {
    x: number
    y: number
}

const pt: point = {x: 123, y:432};

interface Person {
    readonly id: number;
    first: string;
    last: string;
    //function
    sayHi: () => string;
    // metod
    // sayHi (): string;
    
    
}


const thomas: Person = {
    first: "Seb";
    last: "Machanen";
    id: 1;

    sayHi() { return "Hello";},

};

thomas.first = "Lord"


interface Item {
    name: String;
    price: number;
    discount(disC:number ): number;
}

const shoes: Item = {
    name: "booty boots",
    price: 100,
    discount(amount: number) {
       return 10; 
    }
}

// Man kan lägga till variabler
// i en interface vilket man inte kan göra med en type
interface Item {
    category: string;
}

//Inherit, kan inhrit flera interfaces
interface specialItem extends Item, Person {
    sort: string;
}


// SKILLNAD mellan Types och interfaces

//Types kan beskriva fler saker än object, 
//Types använder or och and istället för att ärva
//Interface kan bara beslriva objekt och lägga till och extens från andra interface
