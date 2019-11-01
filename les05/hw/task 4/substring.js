/*Описание
Метод substring() извлекает символы, начиная с индекса indexA до, но не включая, 
индекс indexB. В частности:

Если аргумент indexA равен аргументу indexB, 
метод substring() вернёт пустую строку.
Если аргумент indexB опущен, 
метод substring() извлечёт символы до конца строки.
Если любой из аргументов меньше,
 либо равен нулю или равен NaN,
  он будет трактоваться как равный 0.
Если любой из аргументов больше, 
чем stringName.length, он будет трактоваться как равный stringName.length.
Если аргумент indexA будет больше аргумента indexB,
 то метод substring() сработает так, как если бы аргументы были поменяны местами;
  например, str.substring(1, 0) == str.substring(0, 1).
  */

  function mysubstring(str = '', indexA = 0, indexB = str.length){
    
    if (indexA > indexB) {[indexA, indexB] = [indexB, indexA]}

    if (indexA < 0 || indexB !== indexB) indexA = 0;
    
    if (indexB < 0 || indexB !== indexB) indexB = 0;
    
    if (indexA > str.length ) indexA = str.length;
    if (indexB > str.length ) indexB = str.length;

    indexA = parseInt(indexA);
    indexB = parseInt(indexB);

    let answ = '';
    for (let i = indexA; i < indexB; i++){
      answ += str[i];
    }


    return '"'+ answ + '"';
  }

  console.log (mysubstring('Метод substring()',1,4.56));