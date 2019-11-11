function reverse(old) {
    const count = Math.floor((old.length - 1) / 2);
    const len = old.length - 1;

    // for (let i = 0, j = old.length - 1;
    //     j > 0;
    //     j-- , i++) {
    //     newArr[i] = old[j];
    // }

    // old = newArr;

    for (let i = 0; i < count; i++) {
        [old[i], old[len - i]] = [old[len - i], old[i]];
    }
}


let arr = [1, 3, 5, 7, 9];

console.log('old ', arr);
reverse(arr);
console.log('new ', arr);