const ages: Array<Number> = [];

const gameboard: Array<String[][]> = [];
// eller const gameboard: string[][] = [][];


type Product = {
    name: string;
    price: number;
};




const getTotal = (products: Product[]): number {
let total = 0;
for (let p of products){
    total += p.price
}
return total;
}