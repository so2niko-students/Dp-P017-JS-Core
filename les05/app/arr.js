const arr = [];
const arr2 = new Array();

let a = [1, 2, 3];
let b = ['hello', 'world', '!', 'ahahha'];

let c = 33;
let d = 66;

c = d;
a = b;

a[0] = 66;
d = 55;

arr.push(22);
// console.log(arr);
console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);