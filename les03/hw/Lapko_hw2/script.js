//Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления лучше использовать: if, switch или тернарный.

//1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18),
// взрослым (18_60) или пенсионером (60– ...).

let age = prompt("Ваедите Ваш возраст");
let user = "";
switch (true) {
    case age >= 0 && age <= 12: user = "ребенок"; break;
    case age > 12 && age <= 18: user = "подросток"; break;
    case age > 18 && age <= 60: user = "взрослый"; break;
    case age > 60: user = "пенсионер"; break;
}
alert(user);

//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = parseInt(prompt("Ваедите число от 0 до 9"));
let simbol = "";
switch (number) {
    case 0: simbol = ")"; break;
    case 1: simbol = "!"; break;
    case 2: simbol = "@"; break;
    case 3: simbol = "#"; break;
    case 4: simbol = "$"; break;
    case 5: simbol = "%"; break;
    case 6: simbol = "^"; break;
    case 7: simbol = "&"; break;
    case 8: simbol = "*"; break;
    case 9: simbol = "("; break;
}
alert(simbol);

//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let threeDigitNumber = prompt("Ваедите трехзначное число");
alert((threeDigitNumber[0] === threeDigitNumber[1] ||
    threeDigitNumber[0] === threeDigitNumber[2] ||
    threeDigitNumber[1] === threeDigitNumber[2]) ?
    "В числе есть одинаковые цифры" : "В числе нет одинаковых цифр");

//4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4
// и при этом не кратен 100.

let year = prompt("Введите год");
alert((year % 4 === 0) ? "Год высокосный" : "Год не высокосный");

//5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.

let fiveDigitNumber = prompt("Ваедите пятиразрядное число");
if ((fiveDigitNumber > 9999) && (fiveDigitNumber < 100000)) {
    if ((fiveDigitNumber[0] === fiveDigitNumber[4]) && (fiveDigitNumber[1] === fiveDigitNumber[3])) {
        alert("Число является палиндромом");
    } else {
        alert("Число не является палиндромом");
    }
} else {
    alert("Вы ввели не пятизначное число");
}

//6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести:
// EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let quantity = prompt("Введите количество денег в USD");
let currency = prompt("В какую валюту необходимо перевести: EUR, UAH или AZN ?");
const exchangeRateToEUR = 0.90;
const exchangeRateToUAH = 25.16;
const UexchangeRateToAZN = 0.59;
const EUR = 'EUR';
let result = "";
switch (true) {
    case currency.toUpperCase() === EUR: result = exchangeRateToEUR * quantity; break;
    case currency.toUpperCase() === "UAH": result = exchangeRateToUAH * quantity; break;
    case currency.toUpperCase() === "AZN": result = UexchangeRateToAZN * quantity; break;
}
alert(`Вы можете получить ${result} ${currency}`);

//7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let amount = prompt("Введите сумму покупки");
let amountPayable = "";
switch (true) {
    case amount >= 200 && amount <= 300: amountPayable = amount * 0.97; break;
    case amount > 300 && amount <= 500: amountPayable = amount * 0.95; break;
    case amount > 500: amountPayable = amount * 0.93; break;
    default: amountPayable = amount;
}
alert(`Сумма к оплате со скидкой: ${amountPayable} uah`);

//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность
// поместиться в указанный квадрат.

let circumference = prompt("Введите длину окружности");
let perimeter = prompt("Введите периметр квадрата");
let diameter = circumference / Math.PI;
let side = perimeter / 4;
alert(diameter <= side ? "Окружность может поместиться в указанный квадрат" : "Окружность не поместиться в квадрат");

//9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла.
// После вопросов выведите пользователю количество набранных баллов.

let mark = 0;
let qOne = parseInt(prompt("На какой планете мы живем?  1 - Венера;  2 - Земля;  3 - Марс;"));
if (qOne === 2) { mark += 2; }
let qTwo = parseInt(prompt("Какое наименьшее простое число?  1 - 0;  2 - 1;  3 - 2;"));
if (qTwo === 3) { mark += 2; }
let qThree = parseInt(prompt("Какой город является столицей Австралии?  1 - Сидней;  2 - Мельборн;  3 - Канберра;"));
if (qThree === 3) { mark += 2; }
alert("Ваша оценка: " + mark);

//10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц,
// год, а также високосный год

let dateToday = new Date(prompt("Введите дату (год/месяц/день)", " "));
let newDate = dateToday.setDate(dateToday.getDate() + 1);
alert("Следующая за ней дата: " + new Date(newDate).toDateString());
