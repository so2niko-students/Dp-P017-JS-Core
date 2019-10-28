/*//Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления лучше использовать: 
//if, switch или тернарный.

//1. Запросить у пользователя его возраст и определить, кем он является: 
//ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

const age = prompt('Please enter your age', 1)

if (age < 3) alert('Hello child');
if (age >= 12 && age < 18) alert('Hi youngster!'); 
if (age >= 18 && age < 60) alert('Good day!'); 
if (age >= 60)  alert('Hello, how are you doing?');

//2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
//который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const n = parseInt(prompt('Enter the number in 0-9 range')); 

switch (n) {
    case 1: 
        alert('!');
        break;
    case 2: 
        alert('#');
        break;
    case 3: 
        alert('$');
        break;
    case 4: 
        alert('%');
        break;
    case 5: 
        alert('%');
        break;
    case 6: 
        alert('^');
        break;
    case 7: 
        alert('&');
        break;
    case 8: 
        alert('*');
        break;
    case 9: 
        alert('(');
        break;   
    case 0:
        alert(')');
        break;        
    default:
        alert('Incorrect data');
}

//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

const userNumber = prompt('Enter a three digit number');
const num1 = userNumber % 10;
const num2 = Math.floor(userNumber % 100 / 10);
const num3 = Math.floor(userNumber / 100);

if (num1 == num2 && num1 == num3) {
    alert('All numbers match');
} else if(num1 == num2 || num2 == num3 || num1 == num3) {
    alert('Number has 2 matches');
} else {
    alert('No matches');
}

//4. Запросить у пользователя год и проверить, високосный он или нет. 
//Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const year = prompt('Enter the year');

if ((year % 4 == 0) || (year % 100 == 0) && (year % 400 == 0)) {
    alert('Yhe year you entered is a leap-year');
} else {
    alert('The year you entered is not a leap year');
}

//5. Запросить у пользователя пятиразрядное число и определить, 
//является ли  оно палиндромом.

const poliNum = prompt('Enter five digit number');

const num1 = parseInt(poliNum/10000);
const num2 = parseInt((poliNum%10000)/1000);
const num4 = parseInt((poliNum%100)/10);
const num5 = parseInt(poliNum%10);

(num1 == num5 && num2 == num4) ? alert('The number is a palindrome!') : alert('Not a palindrome.');

// 6. Написать конвертор валют. Пользователь вводит количество USD, 
// выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const USDAmont = prompt('How many USD would you like to convert?', 0);
let userChoise = prompt('Choose currency: type EUR, UAN or AZN');
let countCurr;
const USDToEUR = 0.9;
const USDToUAN = 7.07;
const USDToAZN = 1.7;

switch(userChoise) {
    case 'EUR':
        countCurr = USDAmont * USDToEUR;
        alert('You will have ' + countCurr + ' EUR');
        break;
    case 'UAN':
        countCurr = USDAmont * USDToUAN;
        alert('You will have ' + countCurr + ' UAN');
        break;
    case 'AZN':
        countCurr = USDAmont * USDToAZN;
        alert('You will have ' + countCurr + ' AZN');
        break;
    default:
        alert('Incorrect input. Please try again.');
}

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

const n = prompt('Enter the price');
let m;

if(n >= 200 && n < 300) {
    m = n - ((n * 3) / 100);
    alert('Discount is 3%! New price - ' + m);
} 
if (n >= 300 && n < 500) {
    m = n - ((n * 5) / 100);
    alert('Discount is 5%! New price - ' + m);
}
if (n >= 500) {
    m = n - ((n * 7) / 100);
    alert('Discount is 7%! New price - ' + m);
}

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, 
// может ли такая окружность поместиться в указанный квадрат. 

const circuit = prompt('Enter circuit in cm');
const diam = circuit/Math.PI;
const squareLength = prompt('Enter squre length');
const squareSide = squareLength/4;

(diam < squareSide) ? alert('Circle fit the square'): alert('Circle is bigger');

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За  каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

const userChoice1 = prompt('Choose the correct answer and put the number from 1 to 3 \n2 * 2 + 2? \n1. 8 \n2. 6 \n3. 222');
const userChoice2 = prompt('How many days in a leap year? \n1. 366 \n2. 365 \n3. 356');
const userChoice3 = prompt('Which one is assignment? \n1. == \n2. === \n3. =');

let score = 0;

if(userChoice1 == 2){
    score += 2;
}
if(userChoice2 == 1){
    score += 2;
}
if(userChoice3 == 3){
    score += 2;
}

alert('Your total score is ' + score);

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год


let userDay = prompt('Enter the day ');
let userMonth = prompt('Enter the month ');
let userYear = prompt('Enter the year ');

if ((userYear % 4 == 0) || (userYear % 100 == 0) && (userYear % 400 == 0)) {
    if(userDay == 28 && userMonth == 2){
        userDay++;
        alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
    }else{
        if(userDay == 28 && userMonth == 2){
            userDay = 1;
            userMonth++;
            alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
        }
        else if(userDay == 31 && userMonth == 12){
            userDay = 1;
            userMonth = 1;
            userYear++;
            alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
        }else if(userDay == 31){
            userDay = 1;
            userMonth++;
            alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
        }else if(userDay == 30 && userMonth == 4 || userMonth == 6 || userMonth == 7 || userMonth == 9 || userMonth == 11){
            userDay = 1;
            userMonth++;
            alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
        }else{
            userDay++;
            alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
        }
    }
}else if(userDay == 28 && userMonth == 2){
    userDay = 1;
    userMonth++;
    alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
}
else if(userDay == 31 && userMonth == 12){
    userDay = 1;
    userMonth = 1;
    userYear++;
    alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
}else if(userDay == 31){
    userDay = 1;
    userMonth++;
    alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
}else if(userDay == 30 && userMonth == 4 || userMonth == 6 || userMonth == 7 || userMonth == 9 || userMonth == 11){
    userDay = 1;
    userMonth++;
    alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
}else{
    userDay++;
    alert('The next date is ' + userDay + '.' + userMonth + '.' + userYear);
}
*/
