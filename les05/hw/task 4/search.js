//1) функция   аналог search(str0,str1) - возвращает позицию первого
// совпадения с str1 в строке str0 или -1, если совпадения нет.

function mysearch(str0 = '', str1 = ' ') {
    
  let position = str0.length - str1.length;

    for (let i = 0; i <= position ; i++) {  
      if (str0[i]===str1[0]){
        answ = '';
        for (let j = 0; j < str1.length; j++ ){
            
          if (str1[j] === str0 [j+i]) {
                  
             answ += str1[j] ;
            } else break;

          } 
          if (answ === str1) return i;
      }
           
    }
     return -1;

         }


         console.log (mysearch ('qw1a4344y', '344'));
 

