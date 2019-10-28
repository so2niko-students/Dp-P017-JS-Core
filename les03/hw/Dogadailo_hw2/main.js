/*1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/
const age = Number(prompt("Enter your age"));
if (age <= 2) {
    alert("You are child");
}
if (age >= 12 && age < 18) {
    alert("Teenager");
}
if (age >= 18 && age <= 60) {
    alert("you are adult");
}
if (age > 60) {
    alert("your are old man");
}

/*2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише*/

const keyValue = Number(prompt("Enter any number"));
let answ = '';
switch (keyValue) {
    case 1:
        answ = "!";
        break;
    case 2:
        answ = "@";
        break;
    case 3:
        answ = "#";
        break;
    case 4:
        answ = "$";
        break;
    case 5:
        answ = "%";
        break;
    case 6:
        answ = "^";
        break;
    case 7:
        answ = "&";
        break;
    case 8:
        answ = "*";
        break;
    case 9:
        answ = "(";
        break;
    default:
        answ = "You enter invalid number";
}
alert(answ);

/*4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/

const year = Number(prompt("Введите год"));
if (year % 400 == 0 || year % 4 == 0 && year % 100 > 0) {
    alert("Год високостный");
} else {
    alert("Не високостный");
}

/*6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/

const EUR = 0.9, UAN = 25.16, AZN = 1.70;
const dollarValue = Number(prompt("сколько долларов вы хотите поменять?"));
console.log(typeof dollarValue);
const desiredCurrency = prompt("Введите желаемую валюту: EUR, UAN, AZN");

switch (desiredCurrency) {
    case "EUR":
        alert(dollarValue * EUR);
        break;
    case "UAN":
        alert(dollarValue * UAN);
        break;
    case "AZN":
        alert(dollarValue * AZN);
        break;

}

/*7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.*/
const purchaseAmount = Number(prompt("Введите сумму покупки:"));
switch (true) {
    case (purchaseAmount >= 200 && purchaseAmount <= 300):
        alert('Скидка 3% = ' + purchaseAmount * 0.03 + " сумма со скидкой = " + (purchaseAmount - (purchaseAmount * 0.03)));
        break;
    case (purchaseAmount > 300 && purchaseAmount <= 500):
        alert('Скидка 5% = ' + purchaseAmount * 0.05 + " сумма со скидкой = " + (purchaseAmount - (purchaseAmount * 0.05)));
        break;
    case (purchaseAmount > 500):
        alert('Скидка 7% = ' + purchaseAmount * 0.07 + " сумма со скидкой = " + (purchaseAmount - (purchaseAmount * 0.07)));
        break;
    default:
        alert("Скидка не полагается, сорян");
}

/*9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.*/
let count = 0;
const answer1 = prompt('Назовите самую быстро-бегающую птицу: цапля, страус, гусь');
if (answer1 == "страус") {
    count += 2;
}

const answer2 = prompt("В каком виде спорта самый лёгкий мяч: футбол, теннис, волейбол");
if (answer2 == "теннис") {
    count += 2;
}

const answer3 = prompt('то был первой женщиной-космонавтом?: Гагарина, Иванова, Терешкова');
if (answer3 == "Терешкова") {
    count += 2;
}

alert(count);