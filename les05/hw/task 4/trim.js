/*Метод trim() удаляет пробельные символы с начала и конца строки.
 Пробельными символами в этом контексте считаются все собственно пробельные 
 символы (пробел, табуляция, неразрывный пробел и прочие)
 и все символы конца строки (LF, CR и прочие).
*/
  function mytrim (str ='') {
    let arr1 = ['\t','\n','\v','\f', '\r',' '];
    let answ = '';
      
      for (let i=0; i<= str.length;i++){
       
        if (str[i] == ' ') {//console.log(i);

            answ = str.substring( i + 1 );
            console.log('=',answ);
        } else break;
        

        /*for (let i=answ.length; i >= answ.length;i--){
       
            if (str[i] == ' ') {
                answ = str.substring( 0, answ.length - 1);
            } else break;


        if (str=str[i] != arr1.forEach( function (elm){return elm})) {

           console.log (i);

           answ = str.substring( i + 1, str.length );
           console.log(answ);
        }
            else break;
     }*/
        }
       
       
       return answ;
      }
      
 
console.log ('=',mytrim ("   Hello  World  \f 233  ") + '=');
