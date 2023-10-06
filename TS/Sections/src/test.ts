interface Card {
    value: number;
    name: string;
}

const typeCard = (card: Card): void => {
   console.log('${card.value} ${card.value}')
}