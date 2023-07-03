## Tarea sobre coerción de datos

#### ESTA TAREA NO TIENE TEST AUTOMATICOS INCORPORADOS

¿Cuál crees que será el resultado de la ejecución de estas operaciones? Piensa primero cual será el resultado y escribelo. 
Luego, prueba ver la respuesta usando la siguiente pagina: https://jsconsole.com/ (solamente debes copiar y pegar el cálculo sin el signo "=", 
ni la doble barra del comentario, ni tu respuesta). Después presionar enter, así obtendrás el resultado automaticamente.

```
6 / "3" = 2 transforma el 3 a numero
"2" * "3" = null? ES 6
4 + 5 + "px" = 45px PRIMERO SUMA Y LUEGO CONCATENA 9px
"$" + 4 + 5 = $45 CONCATENA QUEDA $45
"4" - 2 = 2
"4px" - 2 = nan
7 / 0 = nan / null ... INFINITY
parseInt("09") = 9

[3]+[3]-[10] =
[3]="3" + [3]="3" -> "3"+"3"="33" pero con la resta se transforma en numero y descuenta 10, como resultado es 23

3>2>1 = true  ES FALSO NO SE PUEDE COMPARAR TRES NUMEROS?? SI SE PUEDE LO QUE OCURRE ES LO SIGUIENTE
3>2>1
(3>2)>1
(TRUE)>1     true=1 y false=0
(1)>1 = false


[] == ![] = false ES TRUE ????
Boolean([])=true y con cualquier cosa dentro de
las llaves sigue siendo true, por lo tanto ![] es falso.
[]   == ! []
true == ! true
true == false
false


12 + ""  =  "12"
"15" * 2  = 30

"15" - "11" = ??

COMO EN EL CASO ANTERIOR [3]+[3]-[10], AL RESTAR
"15"-"11" SE TRANSFORMAN EN NUMEROS Y SE RESTA: 4. SI FUESE "15"+"11" = "1511" SE CONCATENA

undefined + 6 = nan ES NaN

"Hello" + null = "Hello"  CONCATENA 'Hellonull'
null + 25 =  25
true + true = ?? ES DOS TRUE=1 + TRUE=1 = 2
false + 10 = ?? ES DIEZ FALSE=0 + 10 = 10

&& and: solo si las dos expresiones son verdad

5 && 2 = 101 && 010 = 000 = 0
LO QUE SUCEDE REALMENTE SI ES DISTINTO A CERO
ES VERDADERO, ENTONCES PORQUE EL RESULTADO ES 2?
PRIMERO EVALUA 5 Y ES VERDADERO, LUEGO EVALUA 2 Y TAMBIEN ES VERDADERO, POR LO TANTO SE QUEDA CON
EL ULTIMO DATO VERDADERO, EN ESTE CASO EL DOS ES
EL RESULTADO.

2 && 5 = 010 && 101 = 000 = 0 CINCO

|| OR: SOLO SI AL MENOS UNA EXPRESION ES VERDAD, SU RESULTADO SERA VERDAD DE LO CONTRARIO ES FALSO.
5 || 0 = 101 || 000 = 101 = 5 TRUE||FALSE = TRUE
0 || 5 = 5 CINCO ES TRUE

true && false = false

false || !false =
false || true = true
!2 = 0      FALSE

"texto" || 0 = true
true || false = true
COMO TEXTO ES TRUE EL RESULTADO ES TEXTO
ES EL PRIMERO DE LA IZQUIERDA

2 || "prueba“ =  true

LOS DOS SON VERDADEROS, SI SEGUIMOS CON LA LOGICA
DEL DE LA IZQUIERDA, EL RESULTADO ES 2
```
