// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function numbReturn(num1,num2) {
if (Number(num1) && Number(num2)) {
        if (num1 < num2) {
            return -1;
        } else if( num1 > num2) {
            return 1;
        } else {
            return 0;
        }
    } else {
    alert('Вы ввели некорректные данные!');
    }
}

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
function numbFactorial(numb) {
     if (condition) {
         let result = 1;
        for (let i = 1; i <= numb; i++) {
            result *= i;
        }
        return result;  
    } else{
        alert('Вы ввели некорректные данные!');
    }
}

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function plusNumb(a,b,c) {
    if (Number(a) && Number(b) && Number(c)) {
         let plus = `${a}${b}${c}` ;
        return plus;
    } else{
        alert('Вы ввели некорректные данные!'); 
    }
}

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square(a,b) {
    if (arguments.length > 0 && arguments.length <= 2 && Number(a) && Number(b)) {
       if (arguments.length == 2) {
          return a * b;  
       }
       if (arguments.length == 1) {
           return a*a;
       }
    } else {
        alert('Вы ввели некорректные данные!');
    }
}

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
 function perfectNumber(numb) {
     if (Number(numb) && arguments.length == 1) {
         switch (numb) {
            case 6: {return 'Совершенное число!'; break;}
            case 28: {return 'Совершенное число!'; break;}
            case 496: {return 'Совершенное число!'; break;}
            case 8128: {return 'Совершенное число!'; break;}
            case 33550336: {return 'Совершенное число!'; break;}
            case 8589869056: {return 'Совершенное число!'; break;}
            case 137438691328: {return 'Совершенное число!'; break;}
            case 2305843008139952128: {return 'Совершенное число!'; break;}
            case 2658455991569831744654692615953842176: {return 'Совершенное число!'; break;}
            default: {return 'Не совершенное число!'; break;}
         }
     } else {
        alert('Вы ввели некорректные данные!');
     }
 }
// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function onlyPerfect(a,b) {
    let counter = 0;
    if (arguments.length == 2 && Number(a) && Number(b)) {
        for (let i = a; i <= b; i++) {
            if(perfectNumber(i) == 'Совершенное число!') {
                console.log(`${i} - ${perfectNumber(i)}`);
                counter++;
            }
        }
        if (counter == 0) {
            alert('В вашем диапазоне нет чисел!');
        }
    } else {
        alert('Вы ввели некорректные данные!');
     }
}

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».  Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function usersTime(a,b,c) {
    if (arguments.length == 3 && Number(a) >= 0 && Number(a) <= 23 && Number(b) >= 0 && Number(b) <= 59 && Number(c) >= 0 && Number(c) <= 59) {
        alert(`Время в формате чч:мм:сс: ${a}:${b}:${c}`);
    } else if (arguments.length == 2 && Number(a) >= 0 && Number(a) <= 23 && Number(b) >= 0 && Number(b) <= 59) {
           c = '00';
           alert(`Время в формате чч:мм:сс: ${a}:${b}:${c}`);
        } else if (arguments.length == 1 && Number(a) >= 0 && Number(a) <= 23) {
           b = '00';
           c = '00';
           alert(`Время в формате чч:мм:сс: ${a}:${b}:${c}`);
        }
}

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function timeInSec(a,b,c) {
    if (arguments.length == 3 && Number(a) >= 0 && Number(a) <= 23 && Number(b) >= 0 && Number(b) <= 59 && Number(c) >= 0 && Number(c) <= 59){
        return a*3600 + b*60 + c;
    } else {
        alert('Вы ввели некорректные данные!');
    }
}
// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function timeInSecond(a) {
    if (arguments.length == 1 && Number(a)) {
       if (Math.floor(a / 3600) > 23) {
        return `${Math.floor(a / 3600 % 3600 / 24)}:${Math.floor(a / 3600 % 24)}:${Math.floor(a / 60 % 60)}:${a % 3600 % 60}`;
       } else {
        return `${Math.floor(a / 3600)}:${Math.floor(a / 60 % 60)}:${a % 3600 % 60}`;  
       }
    } else {
        alert('Вы ввели некорректные данные!');
    }
}
// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».

function diffDate(a, b, c, d ,e, f) {
    if (arguments.length == 6 ) {
       return timeInSecond(timeInSec(a,b,c) - timeInSec(d,e,f));
    }
}