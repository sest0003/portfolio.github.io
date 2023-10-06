type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};


// & kombinerar två eller flera typer
type ColorCirlcle = Circle & Colorful & {material: string};

const circle1: ColorCirlcle = {
    radius: 4,
    color: "blue", 
    material: "metal"

}