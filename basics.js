/**
 * Created by usercom on 12.05.2016.
 */

/**
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

Используя оператор '?'
Используя оператор ||
 */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge2(age) {
     return (age > 18) ?  true:  confirm('Родители разрешили?');
}

function checkAge3(age) {
     return (age > 18) || confirm('Родители разрешили?');
}




/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b. */
function min(a,b){
    if(a > b){
        return b;
    }
    else if(a < b){
        return a;
    }
    else{
    return a,b;
    }
}

alert(min(4,8));


/*Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 */
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Введите x?", '');
var n = prompt("Введите n?", '');

alert( pow(x, n) );


