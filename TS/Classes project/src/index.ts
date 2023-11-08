
//ORginal ts class
class Player {
   private readonly first: string;  //private finns bara i ts
   public last: string;
    
        constructor(first: string, last: string) {
            this.first = first;
            this.last = last;
        }
    }



    // Shortcut class
    class Player2 {
    constructor(
        private first: string, 
        private last: string,
        private score: number
        ) {}

         }
    //Interfaces och classes

   interface colorful {
    color: string;
   }

   class Bike implements colorful {
    constructor(public color: string) {}
   }

   class Jacket implements colorful {
    constructor(public brand: string, public color: string) {}
   }

   const jacket1 = new Jacket("Sons", "Blue")


     