function concat() {
    let answ = '';
    for (let i = 0; i < arguments.length; i++) {
        answ += arguments[i];
    }
    return answ;
}

console.log(concat('Hello', ' ', 'World', ', ', 'Ahaha') === 'Hello World, Ahaha', "'Hello World, Ahaha'");
console.log(concat() === '', "''");
console.log(concat('jojo') === 'jojo', "'jojo'");
console.log(concat(12) === '12', "'12'");
console.log(concat(true) === 'true', "'true'");
console.log(concat([]) === '', "''");
console.log(concat({}) === '[object Object]', "'[object Object]'");
console.log(concat(undefined) === 'undefined', "'undefined'");
console.log(concat(null) === 'null', "'null'");

function toUpperCase(str = '') {
    const len = str.length;
    let answ = "";
    for (let i = 0; i < len; i++) {
        if (str[i].charCodeAt() > 96) {
            answ += "\\u00" + (str.codePointAt(i) - 32).toString(16);
        } else {
            answ += str[i];
        }
    }

    return answ;
}

console.log(toUpperCase('hellO'));