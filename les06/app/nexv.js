/*3. Next Version
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

nextVersion("1.2.3") === "1.2.4";

nextVersion("0.9.9") === "1.0.0";

nextVersion("1") === "2";

nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";

nextVersion("9.9") === "10.0";

Rules

All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.

__________________________________________________

Format: url to github-pages*/

function nextVersion(str = '') {

    let arr = str.split('.');
    let a = arr[0];

    //   arr = arr.map (  function ( item ) {return (item > 9) ?  0: item});
    arr = arr.map((item, i) => item > 9 ? 0 : item);
    arr[0] = a;
    nextVersion1(arr);

    return arr.join('.');
}


function nextVersion1(arr, i = 1) {

    if ((arr.length - i) == 0) return arr[0] = 1 + +arr[0];

    if (arr[arr.length - i] < 9) {
        arr[arr.length - i] = 1 + +arr[arr.length - i];
        return arr;
    }

    if (arr[arr.length - i] >= 9) {

        arr[arr.length - i - 1] = 1 + +arr[arr.length - i - 1];

        arr[arr.length - i] = 0;

        if ((arr.length - i) > 0 && arr[arr.length - i - 1] >= 9) {

            nextVersion1(arr, ++i);

        }
        return arr;
    }

    return arr;
}

let str = '7.567.55.9.9';



console.log(nextVersion('0.9.9') + ' / 0.9.9 = 1.0.0');
console.log(nextVersion('4.9.9') + ' / 4.9.9 = 5.0.0');
console.log(nextVersion('0.9.555.3443.6.8') + ' /  0.9.555.3443.6.8 = 0.9.0.0.6.9');
console.log(nextVersion('1') + ' / 1 = 2');
console.log(nextVersion('1.2.3.4.5.6.7.8') + ' / 1.2.3.4.5.6.7.8 = 1.2.3.4.5.6.7.9');
console.log(nextVersion('1.2.3') + ' / 1.2.3 = 1.2.4');
console.log(nextVersion('9.9'));