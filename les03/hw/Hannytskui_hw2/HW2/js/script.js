/*// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let userAge = parseInt(prompt("Сколько вам лет?"));
if(userAge != '' && userAge > 0 && userAge <= 140) {
    if(userAge >= 0 && userAge < 12) {
        userAge = "Ребенок";
    } else if (userAge >= 12 && userAge < 18 ) {
        userAge = "Подросток";
    } else if (userAge >= 18 && userAge < 60) {
        userAge = "Взрослый";
    } else {
        userAge = "Пенсионер";
    }
    alert(`Вы ${userAge}.`);
} else {
    alert("Вы ввели некорректные данные");
}

*/

/*// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let inputUser = parseInt(prompt('Введите число от 0 до 9'));
switch (inputUser) {
    case 1: { inputUser = '!'; } break;
    case 2: { inputUser = '@'; } break;
    case 3: { inputUser = '#'; } break;
    case 4: { inputUser = '$'; } break;
    case 5: { inputUser = '%'; } break;
    case 6: { inputUser = '^'; } break;
    case 7: { inputUser = '&'; } break;
    case 8: { inputUser = '*'; } break;
    case 9: { inputUser = '('; } break;
    case 0: { inputUser = ')'; } break;
    default: {
        inputUser = 'некорректные данные';
    }
    break;
}
alert(`Вы ввели ${inputUser}`);

*/

/*// 3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.

let inputUser = parseInt(prompt('Введите трехзначное число'));
if(inputUser != '' && inputUser >= 100 && inputUser <= 999) {
    let a = Math.floor(inputUser / 100);
    let b = Math.floor(inputUser / 10 % 10);
    let c = Math.floor(inputUser % 10);
    if(a == b || a == c || b == c) {
        alert("В вашем числе есть одинаковые числа.")
    } else {
        alert("В вашем числе нет одинаковые чисел.")
    }
} else {
    alert("Вы ввели некорректные данные.");
}

*/

/*// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let inputUser = parseInt(prompt('Введите год для проверки на высокосность'));
if(inputUser != '' && inputUser >= 0) {
    if(inputUser % 4 == 0) {
        alert(`${inputUser} - высокосный год`)
    } else {
        alert(`${inputUser} - невысокосный год`)
    }
} else {
    alert('Вы ввели некорректные данные.')
}

*/

/*// 5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.

let inputUser = parseInt(prompt("Введите 5-разрядное число"));
if(inputUser != '' && inputUser >= 10000 & inputUser <= 99999) {
    let a = Math.floor(inputUser / 10000);
    let b = Math.floor(inputUser / 1000 % 10);
    let c = Math.floor(inputUser / 10 % 10);
    let d = Math.floor(inputUser % 10);
    if(a == d && b == c) {
        alert(`${inputUser} - полиндром.`);
    } else {
        alert(`${inputUser} - не полиндром.`);
    }
} else {
    alert("Вы ввели некорректные данные.");
}

*/

/*// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const EUR_TO_USD = 1.11;
const UAH_TO_USD = 0.040;
const AZN_TO_USD = 0.59;
let inputUser = parseInt(prompt('Введите количество USD'));
if(inputUser != '' && inputUser >= 0) {
    let choice = parseInt(prompt('В какую валюту хотите перевести?\n1: - в EUR\n2: - в UAH\n3: - в AZN'));
    if(choice != '' && choice >= 1 && choice <= 3) {
        switch (choice) {
            case 1: { alert(`За ${inputUser}$ вы получите ${(inputUser / EUR_TO_USD).toFixed(2)} евро. `) } break;
            case 2: { alert(`За ${inputUser}$ вы получите ${(inputUser / UAH_TO_USD).toFixed(2)} грн. `) } break;
            case 3: { alert(`За ${inputUser}$ вы получите ${(inputUser / AZN_TO_USD).toFixed(2)} манат. `) } break;
        }
    } else {
        alert("Такого варианта выбора нет.");
    }
} else {
    alert("Вы ввели некорректные данные.");
}

*/

/*// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let inputUser = parseInt(prompt('Введите сумму покупки'));
if(inputUser != '' && inputUser > 0) {
    if(inputUser >= 200 && inputUser < 300) {
        inputUser *= 0.97;
    } else if(inputUser >= 300 && inputUser < 500) {
        inputUser *= 0.95;
    } else if(inputUser >= 500) {
        inputUser *= 0.93;
    } else {
        alert(`Cумма к оплате ${inputUser} грн.`)
    }
} else {
    alert("Вы ввели некорректные данные.");
}

*/

/*// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 

let pSquare = parseInt(prompt('Введите периметр квадрата'));
let lCircle = parseInt(prompt('Введите длину окружности'));
if(pSquare != '' && lCircle != '' && pSquare > 0 && lCircle > 0) {
    let lenghtSquare = pSquare / 4;
    let radiusCircle = Math.round(lCircle / (Math.PI * 2));
    if( radiusCircle == (lenghtSquare /2)) {
        alert('Данная окружность может поместиться в указанный квадрат');
    } else {
        alert('Данная окружность не может поместиться в указанный квадрат');
    }
} else {
    alert("Вы ввели некорректные данные.");
}

*/

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let counter = 0;
for (let i = 0; i < 3; i++) {
    let operator = "+";
    let answ = 'Не правильный ответ!';
    if (i > 0) {
        operator = i == 1 ? "*" : "/";
    }
    let quest = parseInt(prompt(`Выберите вариант ответа на вопрос:\n 3 ${operator} 3 = ? \n 1: 6 , 2: 9, 3: 1`));
    if (i == 0 && quest == i + 1) {
        answ = 'Правильный ответ!';
        counter += 2;
    }
    if (i == 1 && quest == i + 1) {
        counter += 2;
        answ = 'Правильный ответ!';
    }
    if (i == 2 && quest == i + 1) {
        counter += 2;
        answ = 'Правильный ответ!';
    }

    alert(answ);
}
alert(`Вы набрали ${counter} баллов!`);



// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год

let day = parseInt(prompt('Введите день'));
let month = parseInt(prompt('Введите месяц'));
let year = parseInt(prompt('Введите год'));
if (day != '' && day >= 1 && day <= 31 && month != '' && month >= 1 && month <= 12 && year != '' && year >= 1) {
    let maxDay = 0;
    switch (month) {
        case 1: { maxDay = 31; break; }
        case 2: { maxDay = year % 4 == 0 ? 29 : 28; break; }
        case 3: { maxDay = 31; break; }
        case 4: { maxDay = 30; break; }
        case 5: { maxDay = 31; break; }
        case 6: { maxDay = 30; break; }
        case 7: { maxDay = 31; break; }
        case 8: { maxDay = 31; break; }
        case 9: { maxDay = 30; break; }
        case 10: { maxDay = 31; break; }
        case 11: { maxDay = 30; break; }
        case 12: { maxDay = 31; break; }
    }
    day++;
    if (day > maxDay) {
        month++;
        day = 1;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    alert(`${day}/${month}/${year}`);
} else {
    alert("Вы ввели некорректные данные.");
}