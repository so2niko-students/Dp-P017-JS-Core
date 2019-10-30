

//1я функция сравнивает 2 числа

function compareTwoNumbers (a,b) {
    let result = 0 ;
    if (a > b)  
        {result = 1}
    else if  (a < b)
        { result = -1}
        
    return result;
}

 //2я функция вычисляет факториал числа.


function factorialN (n) {
    return (n != 1) ? n * factorialN(n - 1) : 1;
}

//3я функция 3 отдельные цифры превращает в одно число.


function returnNum(a,b,c) {
     
    return + (a+b+c);

}



//4я функция выводит площадь прямоугольника или квадрата.

    function square (a,b) {
    
        let result = 'Некорректный ввод';
   
            if  ( ! isNaN (a) && ! isNaN (b) ) {
    
                if ( a !=0 && b !=0 ) { result = 'Площадь прямоугольника =' + a * b;}
      
                if ( a > 0 && b <= 0 ) { result = 'Площадь квадрата со стороной ' + a + '=' + a ** 2;}
       
                if ( a <= 0 && b > 0 ) { result = 'Площадь квадрата со стороной ' + b + '=' + b ** 2;}; 
        }
       return result ;
   
    
           
    }
      
    function squareNan (a,b) {
        
        let result = 'Вводите цифры!!!' ;
       
       if ( ! isNaN (a) && ! isNaN (b) ) { result = 'Площадь прямоугольника =' + a * b;}
      
       if ( ! isNaN (a) && isNaN (b) ) { result = 'Площадь квадрата со стороной ' + a + '=' + a ** 2;}
       
       if ( isNaN (a) && ! isNaN (b) ) { result = 'Площадь квадрата со стороной ' + b + '=' + b ** 2;}
             
           

             return result ;
       
           
    }


//5я функция  Проверяем число на совершенство.

    function perfectN(n) {
        
        let sum = 0;
        let result ;
        
        for (let  i = 1 ; i < n  / 2 + 1 ; i++) {

            if (n % i == 0) { sum += i;}
           
            
        }

        sum == n ? result = true : result = false ;
        
        return result ;

    }

//6я функция  Задаем диапозон и ищем в нем  совершенные числа.

    function perfectRange (a,b){
           let  result = ' ';
             if ( a > b ) {let c = a; a = b; b=c;}

                while (a <= b ) {


                     if ( a % 2 == 0 && perfectN(a)) {result += a + ' ' ;}

                        a++;
               
                    }

              // if (result == ' ') {result = "Нет таковых в заданном диапазоне.";}

                return result;

    }

//7я функция принимаем время и дату

    function ShowTime (my_hour, my_minuts, my_seconds) {

        let date = new Date(2019,10,29,my_hour,my_minuts,my_seconds);

        
        let result = '«' + date.getHours() + ':';
         
        date.getMinutes() == 0 ? 
            result +=   '00:' :
            result += date.getMinutes() + ':';

        date.getSeconds() == 0 ? 
            result +=   '00:' :
            result += date.getSeconds() + '»';
            

        return result;

    }

//8я функция переводит в секунды

        function convertToSeconds (my_hour, my_minuts, my_seconds) {

                return my_hour * 3600 + my_minuts * 60 + my_seconds ;

        }

//9я функция переводит  секунды в формат 'чч:мм:cc'

        function convertToHours (my_seconds) {
            
            let date = new Date (2019,10,29,0,0,my_seconds);
                
                                      
            return '«' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '»';
                  
        }


//10я функция разница меж временем.

        function differenceInTime (my_hour, my_minuts, my_seconds, my_hour1, my_minuts1, my_seconds1) {

           
            let seconds1 = + convertToSeconds(my_hour, my_minuts, my_seconds);
            let seconds2 = + convertToSeconds(my_hour1, my_minuts1, my_seconds1);
            
            
           return convertToHours (seconds1 - seconds2);

   

        }


/*
alert (compareTwoNumbers (prompt('Введите 1е число:'),prompt('Введите 2е число:')));

alert ('Факториал числа  равен ' + factorialN ( + prompt('Введите число:')));

alert (returnNum(+ prompt('Введите 1 число:'), + prompt('Введите 2 число:'), + prompt('Введите 3 число:')));


//alert ( parseInt (prompt('Введите 1 число:')));

let firstN =  + ( prompt('Введите 1 число:'));
let secondN =  + ( prompt('Введите 2 число:'));

alert (square ( firstN, secondN));


alert ( perfectN ( + prompt ('Введите  число:')));


alert ( perfectRange ( + prompt ('Введите 1е число диапазона:'), + prompt ('Введите 2е число диапазона:')));

   
alert (ShowTime(+ prompt ('Введите часы:'),+ prompt ('Введите минуты:'), + prompt ('Введите секунды:')));

   */
  //alert (convertToSeconds(+ prompt ('Введите часы:'),+ prompt ('Введите минуты:'), + prompt ('Введите секунды:')));
  
  // alert ( convertToHours (+ prompt ('Введите колличество секунд:')));


alert (differenceInTime(+ prompt ('Введите часы :'),+ prompt ('Введите минуты:'), + prompt ('Введите секунды:'),
                       + prompt ('Введите часы 1 :'),+ prompt ('Введите минуты 1:'), + prompt ('Введите секунды 1:')));