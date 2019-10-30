//1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function numReturn(a,b) {
    if(Number(a) && Number(b)) {
        if(a === b) {
            return 0;
        }
    return a < b ? -1 : 1;     
    } else {
        alert("Некорректные данные");
    }
}

//2. Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(a) {
    let buf = 1;
    if(Number(a)){
        for(let i = 1;i <= a; i++) {
            buf *= i;
        }
        return buf;
    } else {
        alert("Некорректные данные");
    }
}

//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function concat(a,b,c) {
    if(Number(a) && Number(b) && Number(c)) {
        let buf = `${a}${b}${c}`;
        return buf;
    } else {
        alert("Некорректные данные");
    }
}

//4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square(a,b) {
    if(arguments.length > 0 && arguments.length <= 2 && Number(arguments[0]) && Number(arguments[1])){
        if(arguments.length == 2){
            return a * b;
        }
        if(arguments.length == 1) {
            return a*a;
        }
    } else {
        alert("Некорректные данные");
    }
}
//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function perfectNum(a) {
    if(Number(a) && arguments.length == 1) {
        let buf = 0;
        for(let i = 1; i < a; i++) {
            if(a % i == 0) {
                buf += i;
            }
        }
        return a === buf ? true : false;
    } else {
        alert("Некорректные данные");
    }
    
}
//6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function maxMinPerfectNum(a,b) {
    let counter = 0;
    if(Number(a) && Number(b) && arguments.length == 2) {
        for(let i = a;i <= b; i++) {
            if(perfectNum(i)){
                console.log(i + ' - Совершенное');
                counter++;
            }
        }
        if(counter == 0) {
            alert('В указанном диапозоне нет совершенных');
        }
    } else {
        alert("Некорректные данные");
    }
}

//7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».  Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function getTime(a,b,c) {
        if(arguments.length == 1 && Number(a) >= 0 && Number(a) < 24) {
            b = '00';
            c = '00';
            alert(`${a}:${b}:${c}`);
        } else if(arguments.length == 2 && Number(a) >= 0 && Number(a) < 24 && Number(b) >= 0 && Number(b) < 60){
            c  = '00';
            alert(`${a}:${b}:${c}`);
        } else if(arguments.length == 3 && Number(a) >= 0 && Number(a) < 24 && Number(b) >= 0 && Number(b) < 60 && Number(c) >= 0 && Number(c) < 60) {
            alert(`${a}:${b}:${c}`);
        } else {
            alert("Некорректные данные");
        } 
}
//8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function timeInSec(a,b,c) {
    if(arguments.length == 3 && Number(a) >= 0 && Number(a) < 24 && Number(b) >= 0 && Number(b) < 60 && Number(c) >= 0 && Number(c) < 60) {
        return c + b * 60 + a * 3600;
    } else {
        alert("Некорректные данные");
    }
}

//9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function secInTime(a) {
    if(arguments.length == 1 && Number(a)) {
        if(Math.floor(a / 3600) >  23) {
            return `${Math.floor(a / 3600 % 3600 / 24)}:${Math.floor(a / 3600 % 24)}:${Math.floor(a / 60 % 60)}:${(a % 3600 % 60)}`;
        } else {
            return `${Math.floor(a / 3600)}:${Math.floor(a / 60 % 60)}:${(a % 3600 % 60)}`;
        }
    } else {
        alert("Некорректные данные");
    }
}
//10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
function differentInDay(a,b,c,d,e,f) {
    if(arguments.length == 6 ) {
        let res = timeInSec(a,b,c) - timeInSec(d,e,f);
        return secInTime(res);
    } else {
        alert("Некорректные данные");
    }
}