//Function for getting the right input value
function getNumericValue(promptPhrase) {
    let number;
    do {
        number = prompt(promptPhrase);
    } while (isNaN(Number(number)) || number == null || number == '');
    return number.trim();
}

//First task: determine if the user is a child or teenager ...
(() => {
    const age = getNumericValue('How old are you?');
    switch (true) {
        case age >= 0 && age < 12:
            alert('You are a child.');
            break;
        case age >= 12 && age < 18:
            alert('You are a teenager.');
            break;
        case age >= 18 && age < 60:
            alert('You are an adult.');
            break;
        case age >= 60:
            alert('You are a pensioner.');
            break;
        default:
            alert('You have entered the wrong data.');
            break;
    }
})();

//Second task: ask user for a number from 0 - 9. Show the symbol related to it.
(() => {
    const num = getNumericValue('Please enter the number from 0 to 9.');
    switch (num) {
        case '1':
            alert('Special symbol for 1 - !');
            break;
        case '2':
            alert('Special symbol for 2 - @');
            break;
        case '3':
            alert('Special symbol for 3 - #');
            break;
        case '4':
            alert('Special symbol for 4 - $');
            break;
        case '5':
            alert('Special symbol for 5 - %');
            break;
        case '6':
            alert('Special symbol for 6 - ^');
            break;

        case '7':
            alert('Special symbol for 7 - &');
            break;
        case '8':
            alert('Special symbol for 8 - *');
            break;
        case '9':
            alert('Special symbol for 9 - (');
            break;
        default:
            alert('Your number is out of range (0-9).');
            break;
    }
})();

//Third task: ask user for a number and check if this number has same digits.
(() => {
    const num = getNumericValue('Please enter your number to check for equal digits in it.');
    for (char of num) {
        for (let i = num.indexOf(char) + 1; i < num.length; i++) {
            if (char == num[i]) {
                alert('You number contains repeating digits.');
                return;
            }
        }
    }
    alert('You number contains only unique digits.');
})();

//Fourth task: ask user for some year and check if this is s leap year.
(() => {
    const year = getNumericValue('Please enter the year to check if it is a leap year or not.');
    ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) ?
        alert(`${year} - it is a leap year`) :
        alert(`${year} - it is not a leap year`);
})();

//Fifth task: ask user for a numeber. Chech if this number is palindrome?

(() => {
    const num = getNumericValue('Please enter a number to check if it is a palindrome.');
    const reverseStr = num.split('').reverse().join('');
    num == reverseStr ?
        alert(`The number you entered is a palindrome\nDirect order: ${num}\nReverse order: ${reverseStr}`) :
        alert(`The number you entered is not a palindrome\n Direct order: ${num}\nReverse order: ${reverseStr}`);
})();

//Sixth task: converter. Initial value - USD, convert to EUR, UAH or AZN.
(() => {
    const amounInUSD = getNumericValue('Please enter the amount of money you want to convert.(USD)');
    const selection = getNumericValue('Convert to (enter a number):\n1.UAH\n2.AZN\n3.EUR');
    const currencyRate = {
        USDtoUAH: 25.23,
        USDtoAZN: 1.7,
        USDtoEUR: 0.9
    };
    switch (selection) {
        case '1':
            alert(`${amounInUSD} USD = ${amounInUSD * currencyRate['USDtoUAH']} UAH`);
            break;
        case '2':
            alert(`${amounInUSD} USD = ${amounInUSD * currencyRate['USDtoAZN']} AZN`);
            break;
        case '3':
            alert(`${amounInUSD} USD = ${amounInUSD * currencyRate['USDtoEUR']} EUR`);
            break;
        default:
            alert('Invalid selection');
            break;
    }
})();

//Seventh task: ask user for purchase amount and calc total with different discounts

(() => {
    const purchaseAmount = getNumericValue('What is the total purchase amount?');
    switch (true) {
        case purchaseAmount > 200 && purchaseAmount <= 300:
            alert(`The whole amount - ${purchaseAmount}\nWith discount - ${purchaseAmount * 0.97}`);
            break;
        case purchaseAmount > 300 && purchaseAmount <= 500:
            alert(`The whole amount - ${purchaseAmount}\nWith discount - ${purchaseAmount * 0.95}`);
            break;
        case purchaseAmount > 500:
            alert(`The whole amount - ${purchaseAmount}\nWith discount - ${purchaseAmount * 0.93}`);
            break;

        default:
            alert(`Total amount - ${purchaseAmount}\n`);
            break;
    }
})();

//Eighth task: prompt the user for the circumference and for the squre perimeter
//Check if a circle can fit in a square
(() => {
    const circumference = getNumericValue('Please enter the lenth of the circle.');
    const perimeter = getNumericValue('Enter the square perimeter.');
    const radius = circumference / (2 * Math.PI);
    const squareSide = perimeter / 4;
    if (radius <= squareSide / 2) {
        alert('Circle fit in a square');
    } else {
        alert('Circle is too big to fit in a square');
    }
})();

//Ninth task: 3 questions, 3 answer for each of them. Right answer - 2 points.Show the result at the end.
(() => {
    const questions = {
        balls: 'Imagine that you have 8 metal balls and they are almost identical.\nOne of these balls weighs a little bit more than the rest.\nYou can use balance scale to find it.\nSo the question is:\nHow many measures you need to do to find it?(minimum)',
        capital: 'What is the capital of Luxembourg?',
        js: 'Which name from the following was initial for javascript?'
    };

    const answers = {
        balls: '1. 3 measures\n2. 2 measures\n3. 4 measures',
        capital: '1. Oslo\n2. Stockholm\n3. Luxembourg',
        js: '1. ECMAScript\n2. LiveScript\n3. CoffeeScript'
    };
    let res = 0;
    for (key in questions) {
        let answer = getNumericValue(`Question:\n${questions[key]}\n${answers[key]}`);
        switch (true) {
            case key == 'balls' && answer == '2':
                res += 2;
                break;
            case key == 'capital' && answer == '3':
                res += 2;
                break;
            case key == 'js' && answer == '2':
                res += 2;
                break;
            default:
                break;
        }
    }
    alert(`Your result - ${res} scores`);
})();

//Tenth task: request date(year,month anf day) - show the next one, remember about leap years and days count in each month

(() => {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const year = getNumericValue('Enter a year');
    let month, day;
    do {
        month = getNumericValue('Enter a month');
    } while (month < 1 || month > 12);
    do {
        day = getNumericValue('Enter a day');
    } while (day > monthDays[month - 1]);
    // alert('Hello');
    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            (++day > 31) ?
                (++month > 12) ? alert('Next date is 01/01/' + (Number(year) + 1)) : alert(`Next date is ${month}/01/${year}`)
                : alert(`Next date is ${month}/${day}/${year}`);
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            ++day > 30 ? alert(`Next date is ${++month}/01/${year}`) : alert(`Next date is ${month}/${day}/${year}`);
            break;
        case '2':
            ++day > 28 ?
                ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) ? alert(`Next date is ${month}/${day}/${year}`) : alert(`Next date is ${++month}/01/${year}`)
                : alert(`Next date is ${month}/${day}/${year}`);
            break;

        default:
            alert(`Something goes wrong`);
            break;
    }
})();