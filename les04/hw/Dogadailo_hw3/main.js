  /*1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.*/
  function twoNumber(a,b) {
      a = Number(prompt('Enter A'));
      b = Number(prompt('Enter B'));
      if (a < b) {
          return -1;
      }
      if (a > b) {
          return 1;
      }
      if (a == b) {
          return 0;a
      }
  }

  alert(twoNumber());

 /*2. Написать функцию, которая вычисляет факториал переданного ей числа.*/

  function factorial(numb) {
      numb = Number (prompt('Enter Value'));
      let promRez = 1;
    
  for (let i = numb; i > 1; i--){
      promRez *= i;
      }
      alert(`Факториал числа = ${promRez}`);
  }

  /*3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.*/

  function convertToOneNumb(a,b,c) {
      a = prompt ("Enter a");
      b = prompt ("Enter b");
      c = prompt ("Enter c");
      let oneNumb = Number ([a,b,c].join(''));
      return oneNumb;
  }
  alert (convertToOneNumb());

 /*4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.*/

  function Area () {
      if (arguments.length == 2) {
          let s = arguments[0] * arguments[1];
          msg = (`Вы ввели ${arguments.length} аргумента. Вычисляем площадь прямоугольника: ${s}`);
      }
      if (arguments.length == 1) {
          s = Math.pow(arguments[0] , 2);
          msg = (`Вы ввели ${arguments.length} аргумента. Вычисляем площадь КВАДРАТА: ${s}`)
      }
      alert (msg);
  }
  Area(3,2);

 /*5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.*/
  function checkPerfectNumb(numb) {
      numb = Number(prompt('Введите число'));
      let perfNumbArray = [6,
          28,
          496,
          8128,
          33550336,
          8589869056,
          137438691328,
          2305843008139952128,
          2658455991569831744654692615953842176];
          console.log(typeof perfNumbArray[0]);

      for (let i = 0; i < perfNumbArray.length; i++) {
          if (numb == perfNumbArray[i]) {
              alert (`число ${numb} является совершенным`);
              return numb;
            
          }
          else {
              alert(`число ${numb} Не является совершенным`);
          }
      }


  }
  checkPerfectNumb();

 /*7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».  Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00. */

  function getTime (hh, mm, ss) {
      hh = Number (prompt('Hours'));
      mm = Number (prompt('Minutes')) || 00;
      ss = Number (prompt('Seconds')) || 00;
      alert (`${hh}: ${mm}: ${ss}`);
  }
  getTime();

  function timeToSeconds (hh, mm, ss) {
      let rezult;
      hh = Number(prompt("введите часы"));
      mm = Number(prompt("введите минуты"));
      ss = Number(prompt("введите секунды"));
     if (hh != 0 && mm !=0){
          rezult = (hh * 3600) + (mm * 60) + (ss)
          return rezult;
      }
      alert(rezult);
  }
 timeToSeconds();

 /*Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».*/

  function secondToFullTime (sec) {
      sec = Number(prompt('ВВедите секунды'));
      let h = sec/3600 ^ 0;
      let m = (sec-h*3600)/60 ^ 0;
      let s = sec-h*3600-m*60 ;
      alert(`Часов ${h}, минут ${m}, секунд ${s}`) ;

  }
  secondToFullTime();

/*Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными.*/
function diapazonPerfectNum (min, max) {
    let perfNumbArray = [6,
        28,
        496,
        8128,
        33550336,
        8589869056,
        137438691328,
        2305843008139952128,
        2658455991569831744654692615953842176];


for (let i = 0; i < perfNumbArray.length; i++) {
    if (perfNumbArray[i] >= min && perfNumbArray[i] <= max) {
            console.log (perfNumbArray[i]);
        } else {
            alert('Нет в подходящем диапазоне');
        }
    }
}
diapazonPerfectNum(20,30);