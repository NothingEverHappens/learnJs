/**
 * Created by usercom on 12.05.2016.
 */

//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
function factorialsumTo(n) { /*... ваш код ... */
    if(n!==1){
        return n + sumTo(n - 1);
    }
    else {
        return n;
    }
}

alert( sumTo(100) ); // 5050


/*

Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n!

Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.

 */
function factorial(n) {
    if(n!==1){
        return n * factorial(n - 1);
    }
    else {
        return n;
    }


}

alert( factorial(5) ); // 5050
