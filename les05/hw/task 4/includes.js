//Метод includes() проверяет,
// содержит ли строка заданную подстроку, и возвращает, соответственно true или false.

  function myincludes (str0 = '', str1 ='', pos = 0 ){

    if (pos < 0 || pos !== pos) return false;

    let position = str0.length - str1.length;
    
    for (let i = pos; i <= position ; i++) {  
      if (str0[i]===str1[0]){
        answ = '';
        for (let j = 0; j < str1.length; j++ ){
            
          if (str1[j] === str0 [j+i]) {
                  
             answ += str1[j] ;
            } else break;

          } 
        
            if (answ === str1) return true;
        }
             
      }


      
       return false;

  }
  
  console.log (myincludes ('asdasssda4rr','as3ss', 1));
