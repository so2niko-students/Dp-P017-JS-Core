//Оператор Распространения
//Spread operator

//    ...

//Объединение массивов
const one = [252, 253, 255],
    mentors = [251];

const rooms = [11, ...one, ...mentors];
console.log('rooms', rooms);
one[0] = '252 room';
console.log('rooms', rooms);
console.log('one', one);

//Копирование(клонирование) массивов
const two = one;
const left = [...one];//копирование/клонирование массивов
two[0] = 252;
console.log(two, one, left);

//выборка элементов
console.clear();
const shaurma = [
    'Лаваш', "Мясо курицы",
    "Капуста", "Помидоры", "Огурцы",
    "Кетчунез", "Картошка", "Сыр", "Грибы"
];
const [first, , ...other] = shaurma;
console.log('first', first, other);

//Сбор аргументов функции в массив
console.clear();
function summPrice(...prices) {
    console.log(prices);
    return prices.reduce((a, b) => a + b);
}

console.log(summPrice(12, 43, 55, 7));

//реструктурирование объектов(Расширение объектных литералов)
console.clear();
const menu = {
    burger: "Big Mack",
    meal: 'Potato Chips',
    drink: 'Coca-Cola',
    souse: 'none'
};

function order({ burger }) {
    console.log(`Give me a ${burger} menu, please!`);
}

const newMenu = {
    ...menu,
    order
};

newMenu.meal = 'По селянськи';

console.log(newMenu);
console.log(menu);