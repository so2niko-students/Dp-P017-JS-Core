//str.repeat() - Метод repeat() конструирует и возвращает новую строку, 
//содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.
   function myrepeat (str = '' , num =1) {
    answ = '';
    
      if (num !== num) num = 0;
      num = Math.floor(num);
      if (num < 0) num = 0;
      if (str.length == 0 || num == 0) {
        return answ;
      } 
      if (num > 100) num = 99;


      let i=1;
      while( i <= num){
        answ += str;
        i++;
      }

    

    return answ;
   }

   console.log (myrepeat('123asda ', 565));