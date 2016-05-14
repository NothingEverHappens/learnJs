/**
 * Created by usercom on 12.05.2016.
 */
///Переписать if'ы в switch

/**
 var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/
var a = +prompt('a?', '');
switch(a){
    case 0:alert(0);
        break;
    case 1:alert(1);
        break;
    case 2:
    case 3:alert( '2,3' );
        break;

}

//Напишите if..else, соответствующий следующему switch:
/*
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

 */
var browser;

if (browser == 'IE'){
    alert( 'О, да у вас IE!' );
}

else if(browser == 'Chrome'|| browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    alert( 'Да, и эти браузеры мы поддерживаем' );
}

else{
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );

}