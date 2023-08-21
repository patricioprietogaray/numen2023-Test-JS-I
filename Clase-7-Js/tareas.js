// Asincronia y Stack

// ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADORS
// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? 
//Piensa primero cual será el resultado y escribelo. 
//Luego prueba ver la respuesta usando la siguiente pagina: 
//https://jsconsole.com/  y presioná enter, asi obtendras el resultado automaticamente)

function imprimir() {
    console.log(1);
    setTimeout (function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log (4);
}

imprimir();

//esta es la secuencia que a mi entender se mostraría en pantalla
//1 console.log(1) directo
//4 console.log(4) directo acá es por orden
//3 setTimeout(function() {console.log(3); }, 0); espera cero segundos pero entra con setTimeout
//2 setTimeout (function() {console.log(2); }, 1000); espera un segundo