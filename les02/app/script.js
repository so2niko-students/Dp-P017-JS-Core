// if(/* условие срабатывания*/){
//     //Если да
// }else{
//     //Если нет
// }

// if(/** fdasfds*/)
//     // ----------

// if(false)
//     console.log('Медведь');
//     console.log('Лиса');

const money = 33;
const price = 10;

count = money > price ? money / price : 0;

// if(money > price){
//     count = money / price;
// }else{
//     count = 0;
// }

console.log(count);

//Логические операторы
/**
 * И ->    &&
 *
 */

console.log(undefined || 3);

//Циклы
while (3 > 4) {
  /****** */
}

do {
  //***** */
} while (3 > 4);

for (let i = 0; i < 10; i++) {
  let j = 3;
}

// console.log(j);
// for (let j = 10; j--; ) {}

// let conCount = 0;
// while (true) {
//   ++conCount;
//   if (conCount % 3 == 0) {
//     continue;
//   }
//   let answ = prompt(`${conCount}: Do you want to continue?(y/n)`, "y");
//   if (answ == "n") {
//     break;
//   }
// }

//switch
const h = Number.parseInt(prompt("Enter a hour", "12"));
let dialog = "";
// if (h < 4 || h > 21) {
//   dialog = "Доброй ночи";
// } else {
//   if (h < 11) {
//     dialog = "Доброе утро";
//   } else {
//     dialog = "Добрый день";
//   }
// }

// switch (h) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 22:
//   case 23:
//   case 24: {
//     dialog = "Доброй ночи";
//     break;
//   }
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10: {
//     dialog = "Доброе утро";
//     break;
//   }
//   default: {
//     dialog = "Добрый день";
//   }
// }

switch (true) {
  case h < 4 || h > 21: {
    dialog = "Доброй ночи";
    break;
  }
  case h < 11: {
    dialog = "Доброе утро";
    break;
  }
  default: {
    dialog = "Добрый день";
  }
}

alert(dialog);
