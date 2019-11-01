function plus1(arr, i) {
    arr[i]++;
}
function plus1_(el) {
    el++;
}

const aa = [1, 2, 3, 4, 5];
let bb = 3;
console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);
plus1(aa, 0);
plus1_(bb);
console.log(`aa = ${aa}`);
console.log(`bb = ${bb}`);