type Point = {
    x: number,
    y: number,
    z?: number;
};

const myPoint Point = {x: 1, y: 3, z: 7}

type User = {

    // kan bara läsas, inte ändras. 
    readonly id: number;
    username: String;
}

const user: User = {
    id:235;
    username: "catqulr"
}