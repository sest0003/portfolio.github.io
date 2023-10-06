const dog = {
    name: "flyffy",
    age: 12,
    color: "red"
}

function printName(person: { first: string; last: string}): void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: "tomas", last: "buddy"});



let coordinate: {x: number; y: number} = { x: 34, y: 2};

function randomCord():{x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}

printName({first: "Lolly", last: "Jagger"})