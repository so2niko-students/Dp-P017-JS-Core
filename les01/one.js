// var name1 = 33;
// однострочный комментарий
let variableName2 = 33;
/*
Именование переменных:
1. Допустимые значения - латинница верхнего и нижнего регистра, цифры, нижнее подчеркивание, доллар
2. первый символ в имени только буква
3. нельзя использовать пробелы
4. camelCase - стиль именования
*/

/*
объявление переменной
let var1;
инициализация переменной
var1 = 55;
let var2 = 66; -- объявление и инициализация
*/

/*
Типы данных:
    Примитивные:
    Строка - String
    let str = 'Строка данных';
    let str2 = "Строка данных";
    let str3 = '3';
    let str4 = ''; -- пустая строка

    Число - Number
    let num1 = 123;
    let num2 = 13.44;
    let num3 = .3;
    let num4 = num3;
    num3 = 33;

    Логический - boolean
    let boo1 = true;
    let boo2 = false;

    Ничего - null
    let nunu = null;

    Не определён - undefined
    let un;

    Сложный, ccылочный, объект - Object
    let ob = {
        name : 'Peter'
    };
*/

let str1 = "Hell o world!";
console.log(str1);
// alert(str1);
console.log("Я нажал");
// str1 = prompt("Do you want to continue?");
console.log(str1);
console.log(typeof str1);
console.log(typeof 11);
console.log(typeof true);
console.log(typeof null);
console.log(typeof fff);

//Операторы
let n = 3;
console.log("n", ++n);
// console.log("n", n);
console.log("n", --n);
// console.log("n", n);

console.log(confirm("u?"));
