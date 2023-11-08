
//Constructor


class Player {
//Class Fields / viariabler i java, måste vara hårdkodade från början
#score = 25; //private variabel 
numLives = 10;

    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    //getters och setters
    get last(){
        return '$(this.last)';
    }

    //måste skapa en get eller metod för att komma åt variablen utanför classen player
    getScore() {
        return this.#score;
    }

}

class AdminPlayer extends Player {
isAdmin = true;

//Super
constructor(powers) {
    super();
    this.powers = powers;
}
}



const player1 = new Player("Smith", "Stål");
console.log(player1.last);
console.log(player1.getScore);
console.log(player1.last); //get last medtod


