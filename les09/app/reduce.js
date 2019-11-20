const arr = [3, 33, 55, -8, 101];

function sum(arr) {
    let summ = 0;
    arr.forEach(element => {
        summ += element;
    });
    return summ;
}

console.log(sum(arr));
console.log(arr.reduce((ac, el, index, array) => ac + el, 1000));