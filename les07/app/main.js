//Деструктурирующее присваивание
const arr = ['Яворницкого', 'Карла Маркса', 'Дмитра Яворницького'];

const [street0] = [...arr].reverse();

console.log(street0);

const menu = {
    burger: "Big Mack",
    meal: 'Potato Chips',
    drink: 'Coca-Cola',
    souse: 'none'
};

const { souse, drink } = menu;

console.log(souse, drink);

function order({ burger }) {
    burger = 'Big Teasty';
    console.log(`Give me a ${burger} menu, please!`);
}

order(menu);
console.log(menu);