// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let usersAge = prompt('Введите Ваш возраст?');
if ( usersAge >= 0 && usersAge < 12 ) {
    alert('Вы являетесь ребенком');
} else if (usersAge >= 12 && usersAge < 18 ) {
    alert('Вы являетесь подростком');
}  else if (usersAge >= 18 && usersAge <= 60 ) {
    alert('Вы являетесь взрослым');
} else if (usersAge > 60 && usersAge <= 130 ) {}
    alert('Вы являетесь пенсионером');
}
 else {
   alert('Вы ввели некорректные данные!');
}

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let usersMessege = parseInt(prompt('Введите Ваш число от 0 до 9: '));
switch (usersMessege){
    case  0:
        usersMessege = ')';
        break;
    case 1:
        usersMessege = '!';
        break;  
    case 2:
        usersMessege = '@';
        break; 
    case 3:
        usersMessege = '#';
        break;  
    case 4:
        usersMessege = '$';
        break;  
    case 5:
        usersMessege = '%';
        break;  
    case 6:
        usersMessege = '^';
        break;  
    case 7:
        usersMessege = '&';
        break;
    case 8:
        usersMessege = '*';
        break;
    case 9:
        usersMessege = '(';
        break;
    default: 
    usersMessege = 'отсутствует. Вы ввели некорректные данные!';
        break;
}
alert(`Символ Вашего числа - ${usersMessege}`);

// 3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
let usersNumber = parseInt(prompt('Введите Ваше число от 100 до 999:'));
if (usersNumber != '' && usersNumber >= 100 && usersNumber <= 999) {
    usersNumb1 =  Math.floor(usersNumber / 100);
    usersNumb2 = Math.floor(usersNumber / 10 % 10);
    usersNumb3 =  Math.floor(usersNumber % 10);
    if (usersNumb1 == usersNumb2 || usersNumb1 == usersNumb3 || usersNumb2 == usersNumb3) {
        alert(`В Вашем ${usersNumber} есть одинаковые цифры!`);
    } else {
        alert(`${usersNumber} не имеет одинаковых цифр!`)
    }
} else {
    alert(`${usersNumber} - содержит некорректные данные`);
}

// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let inputYear = parseInt(prompt('Введите год, который желаете проверить на высокосность:'));
if (inputYear != '' && inputYear >= 0) {
    if(inputYear % 4 == 0) {
    alert(`${inputYear} - высокосный год!`);
    } else {
    alert(`${inputYear} - не высокосный год!`);
    }
} else {
    alert(`${inputYear} - содержит некорректные данные`);
}

// 5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.
let userNumber = parseInt(prompt('Введите Ваше 5-ти значное число (от 10,000 до 99,999'));
if (userNumber != '' && userNumber >= 10000 && userNumber <= 99999) {
    let a = Math.floor(userNumber / 10000);
    let b = Math.floor(userNumber / 1000 % 10);
    let c = Math.floor(userNumber % 100 / 10);
    let d = Math.floor(userNumber % 10);
    if (a == d && b == c) {
        alert(`${userNumber} - полиндром!`)
    } else {
        alert(`${userNumber} - не полиндром!`)
    }
} else {
    alert(`${userNumber} - содержит некорректные данные`);
}

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let countUsd = parseInt(prompt('Введите сумму в USD:'));
const EUR = countUsd / 1.11;
const UAH = countUsd / 0.040;
const AZN = countUsd / 0.59;
if (countUsd != '' && countUsd >= 0) {
    let exchange = parseInt(prompt('Введите валюту, в которую хотели бы провести конвертацию: \n1 - EUR \n2 - UAH \n3 - AZN'));
    if (exchange != '' && exchange >= 1 && exchange <= 3) {
        switch (exchange) {
            case 1:
                 alert(`Сумма в EUR ${EUR.toFixed(2)}`);
                console.log(countUsd);
            break;
            case 2:
                alert(`Сумма в UAH ${UAH.toFixed(2)}`);
                console.log(countUsd);
            break;
            case 3:
                alert(`Сумма в AZN ${AZN.toFixed(2)}`);
                console.log(countUsd);
            break;
    }} else {
        alert('Выбор валюты для конвертации в диапазоне от 1 до 3!');
    }

} else {
    alert('Некорректный тип данных!');
}

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let shopValue = parseInt(prompt('Введите сумму Вашей покупки:'));
if (shopValue != '' && shopValue > 0) {
    if (shopValue >=200 && shopValue <300 ) {
        shopValue = shopValue * 0.97;
        alert(`Сумма Вашей покупки с учетом скидки 3%: ${shopValue} грн`);
    } else if (shopValue >=300 && shopValue < 500 ) {
        shopValue = shopValue * 0.95;
        alert(`Сумма Вашей покупки с учетом скидки 5%: ${shopValue} грн`);
    } else if (shopValue >= 500 ) {
        shopValue = shopValue * 0.93;
        alert(`Сумма Вашей покупки с учетом скидки 7%: ${shopValue} грн`);
    } else {
        alert(`Сумма Вашей покупки ${shopValue} грн`);
    }
} else {
    alert('Некорректные данные. Введите сумму Вашей покупки снова!');
}
  
//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 

let lenghtCircle = parseInt(prompt('Введите длину окружности'));
let perimSquare = parseInt(prompt('Введите периметр квадрата'));
if (lenghtCircle !='' && lenghtCircle > 0 && perimSquare != '' && perimSquare > 0) {
    let lenghtSquare = perimSquare / 4;
    let radCircle  =  Math.round(lenghtCircle / (2 * Math.PI));
    if (radCircle == lenghtSquare / 2) {
        alert('Такая окружность может поместиться в квадрат!');
    } else {
        alert('Такая окружность не может поместиться в квадрат!');
    }
} else {
    alert('Не корректный ввод данных!')
}

9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За  каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let counter = 0;
let firstQuest = prompt('Выберите правильный вариант ответа. Первый ворпрос: 3 + 3 = ? \n Варианты ответа: \nа) 3 \nb) 6 \nс) 9');
if (firstQuest == 'a' || firstQuest == 'b' || firstQuest == 'c') {
    switch (firstQuest) {
        case 'a':
            alert('Неправильный ответ!');
            break;
        case 'b':
            alert('Правильный ответ! +2 балла!');
            counter = counter + 2;
            break;
        case 'c':
            alert('Неправильный ответ!');
            break;
    }
} else {
    alert('Некорректный ввод данных');
}
let secondQuest = prompt('Второй ворпрос: 3 * 3 = ? \n Варианты ответа: \nа) 3 \nb) 6 \nс) 9');
if (secondQuest == 'a' || secondQuest == 'b' || secondQuest == 'c') {
    switch (secondQuest) {
        case 'a':
            alert('Неправильный ответ!');
            break;
        case 'b':
            alert('Неправильный ответ!');
            break;
        case 'c':
                alert('Правильный ответ! +2 балла!');
            counter = counter + 2;
            break;
    }
} else {
    alert('Некорректный ввод данных');
}
let thirdQuest = prompt('Третий вопрос: 3 / 3 = ? \n Варианты ответа: \nа) 1 \nb) 6 \nс) 9');
if (thirdQuest == 'a' || thirdQuest == 'b' || thirdQuest == 'c') {
    switch (thirdQuest) {
        case 'a':
            alert('Правильный ответ! +2 балла!');
            counter = counter + 2;
            break;
        case 'b':
            alert('Неправильный ответ!');
            break;
        case 'c':
            alert('Неправильный ответ!');
            break;
    }
} else {
    alert('Некорректный ввод данных');
}
alert(`У вас ${counter} баллов!`);

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год

let inputDay = parseInt(prompt('Введите день: '));
let inputMonth  = parseInt(prompt('Введите месяц:'));
let inputYear = parseInt(prompt('Введите год: '));
if (inputDay !='' && inputDay >=1 && inputDay <= 31 && inputMonth !='' && inputMonth >=1 && inputMonth <=12 && inputYear != '' && inputYear >=1) {
    let maxDay = 0;
    switch (inputMonth) {
        case 1: { maxDay = 31; 
        } break;
        case 2: {
            inputYear % 4 == 0 ? maxDay = 29 : maxDay = 28;
        } break;
        case 3: { maxDay = 31; } break;
        case 4: { maxDay = 30; } break;
        case 5: { maxDay = 31; } break;
        case 6: { maxDay = 30; } break;
        case 7: { maxDay = 31; } break;
        case 8: { maxDay = 31; } break;
        case 9: { maxDay = 30; } break;
        case 10: { maxDay = 31; } break;
        case 11: { maxDay = 30; } break;
        case 12: { maxDay = 31; } break;

    }
    if (inputDay < maxDay) {
        inputDay++;
    } else if (inputDay == maxDay) {
        inputDay = 1;
        if (inputMonth == 12) {
            inputMonth = 1;
            inputYear++;
            } else if (inputMonth < 12) {
                inputMonth++;
            }
        } 
    alert(`${inputDay}.${inputMonth}.${inputYear}`);
} else {
    alert('Некорректный ввод данных');
}

