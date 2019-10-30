//First task: compare numbers
function compareNumbers(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else {
        return num1 > num2 ? 1 : -1;
    }
}

//Second task: factorial
function factorial(num) {
    if (num < 0) {
        return -1;
    } else {
        return num > 0 ? num * factorial(num - 1) : 1;
    }
}

//Third task: take three digits and return one number 1 2 3 => 123
// return 0 if no arguments
// NaN if arguments have string
// otherwise return a number
function numFromDigits() {
    return Number(Array.from(arguments).join(''));
}

//Fourth task: rectangle and square area
function rectangleArea(width, length = width) {
    return length * width;
}

//Fifth task: perfect number check
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum == num ? true : false;
}

//Sixth task: function take two numbers get range and check if this range contains perfect numbers
function containPerfectNumbers(start, end) {
    let res = [];
    for (let i = start; i < end; i++) {
        isPerfectNumber(i) ? res.push(i) : null;
    }
    return res;
}

//Seventh task: take time hours, minutes, seconds and return formatted string
function showTime(hours, minutes = 0, seconds = 0) {
    return (hours >= 0 && hours < 24 &&
        minutes >= 0 && minutes < 60 &&
        seconds >= 0 && seconds < 60) ?
        hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0') : 'invalid input';
}

//Eighth task: time convert to seconds
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

//Ninth task: seconds into hh:mm:ss
function getTimeFromSeconds(sec) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor(sec / 60 % 60);
    let seconds = Math.floor(sec - hours * 3600 - minutes * 60);
    return (hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0'));
}

//Tenth task: difference between dates
function timeDifference(hours1,min1,sec1,hours2,min2,sec2){
    let firstTime = timeToSeconds(hours1,min1,sec1);
    let secondTime = timeToSeconds(hours2,min2,sec2);
    return getTimeFromSeconds(Math.abs(firstTime-secondTime));
}