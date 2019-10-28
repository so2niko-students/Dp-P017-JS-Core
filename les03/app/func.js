//Декларативное объявление -- Function Declaration
function getNum/*имя функции*/(b, c, d = 11) {
    //тело 
    let a = 0;
    // console.log(d);
    // console.log(this);
    // console.log(arguments[4]);
    for (let i = 0; i < arguments.length; i++) {
        a += Number(arguments[i]);
    }
    return a;
    // return a / 3;
}

//Функциональный -- Function Expression
// var
// let
const getStr = function (/**arguments */) {
    let b = 4;
    return b ** 9;
}


console.log(getNum(6, 33, 22, -100));
// console.log(getStr());

// function () {
//     return 2;
// }

console.log((() => 2 * 2 * 6 * 6)());

// return 2 * 2;
