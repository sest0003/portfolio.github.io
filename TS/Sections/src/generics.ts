//Genric function

// T = type
function identity<T>(item: T): T {
return item
}

identity<number>(7);
identity<string>("string");

function getRandomArray<T>(list: T[]): T {

const ranIdx = Math.floor(Math.random()) * list.length)
return list[ranIdx];

}

