/*// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, 
//чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function eqNum(){
    let num1 = prompt('Enter the first number');
    let num2 = prompt('Enter the second number');
    let res = 0;
    if (num1 > num2){
        res = -1;
    } 
    if (num1 < num2) {        
        res = 1;
    } 
    return res;
}
alert(eqNum());

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

const n = prompt('This function will count the factorial of the entered number');

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
alert(factorial(n));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
//Например: цифры 1, 4, 9 превратятся в число 149.

function plusNum(){
    const n1 = prompt('Enter first number','');
    const n2 = prompt('Enter second number','');
    const n3 = prompt('Enter third number','');
    let concat = parseInt(n1 + n2 + n3);
    return concat;
}
alert(plusNum());

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
//Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

const len = prompt('Enter the length of the square');
const wid = prompt('Enter the width of the square');

function squareCount(len, wid){
    return  (len != 0 && wid != 0 ) ? len * wid : len * len;    
}
alert('The square is ' + squareCount(len, wid));

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.

const userNum = +prompt('Enter the number to check if it is perfect!');
function perfectNum(num){
    let temp = 0;
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0){
            temp += i;
        }
    }   
    if(temp === num && temp !== 0)
        {
       alert('It is a perfect number.');
    } else {
       alert('It is not a perfect number.');
    }   
 } 
 perfectNum(userNum);

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
//и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, 
//чтобы узнавать, совершенное число или нет.



// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».  
//Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function timeFormat(){
    let h = prompt('Enter hours');
    let m = prompt('Enter minutes');
    let s = prompt('Enter seconds');
    if((h >= 0 && h <= 23) && (m >= 0 && m <= 59) && (s >= 0 && s <= 59)){
        h = (h != 0) ? h : '00';
        m = (m != 0) ? m : '00';
        s = (s != 0) ? s : '00';
        alert('The time is - ' + '"' + h + ':' + m + ':' + s + '"');
    }else {
        alert('Please try again');
    }
}
timeFormat();

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function getTimeInSec(h, m, s){    
    let sum = h * 3600  + m * 60 + s;
    if((h >= 0 && h <= 23) && (m >= 0 && m <= 59) && (s >= 0 && s <= 59)){        
        return sum;
    }else {
        alert('Please try again');
    }
}

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, 
//минуты и секунды и возвращает в виде строки «чч:мм:сс».

function getTime(seconds){
    
    let hours = Math.trunc(seconds/3600);
    let mins = Math.trunc((seconds%3600) / 60);
    let secs = seconds%60;
    
    hours = (hours <= 10) ? '0' + hours : hours;    
    mins = (mins <= 10) ? '0' + mins : mins;
    secs = (secs <= 10) ? '0' + secs : secs;
    return '"' + hours + ':' + mins + ':'  + secs  + '"';
}

// 10. Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».


function getTimeInSec(h, m, s){    
    let sum = h * 3600  + m * 60 + s;
    if((h >= 0 && h <= 23) && (m >= 0 && m <= 59) && (s >= 0 && s <= 59)){        
        return sum;
    }else {
        alert('Please try again');
    }
}

function getTime(seconds){
    
    let hours = Math.trunc(seconds/3600);
    let mins = Math.trunc((seconds%3600) / 60);
    let secs = seconds%60;
    
    hours = (hours <= 10) ? '0' + hours : hours;    
    mins = (mins <= 10) ? '0' + mins : mins;
    secs = (secs <= 10) ? '0' + secs : secs;
    return '"' + hours + ':' + mins + ':'  + secs  + '"';
}


function datesDiff(d1, d2, d3, d4, d5, d6) {
    if(arguments.length == 6){
    return 'The difference is ' + getTime(getTimeInSec(d1, d2, d3) - getTimeInSec(d4, d5, d6));
}
}
console.log(datesDiff());
*/

