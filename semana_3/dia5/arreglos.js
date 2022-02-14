//cuantos datos contiene una variable?
// una variable contiene 1 dato a lavez

// ** Un arreglo es un conjunto de datos
// ** la forma en que declaramos un arreglo es pare3cida la de una variable
// ** sin embargo debemos colocar [] despues del igual, ejemplo

// !! esto es un arreglo vacio, para poder llenarlo y o debe colocar los datos separado por comas

// !! :eye: siempre emepzar a contar los indices desde el 0
const alumnos = ["erick", "karina", "maria", "bruno"];
console.log("alumnos", alumnos);

//** puede contener datos de distintos tipos */
const variosTipo = [100, "maria", true, 100.5]

//**como acceder a un dato en especifico? */
console.log(alumnos[1]);
console.log(alumnos[3]);

//**se podra alterar un dato del array? */
//! voy a reasignar el valor de indice 0
alumnos[0] = "pepe";
console.log("alumno reasignado", alumnos)

//!! asi como se puede reasignar una dato en especifico, tambien podemos crear datos
//**alumnos[4] es el ultimo dato del array */

alumnos[5]= "erick";
console.log("creando un nuevo elemento", alumnos);


alumnos[10]="jose";
console.log("creando un nuevo elemento", alumnos);

//**como puedo saber cuantos elementos contiene un array? */
//**los array tienen una funcion llamada LENGTH la cual nos permite saber cuantos elementos tiene el array */
console.log("cantidad de elementos", alumnos.length)

//!!quiero agregar un elemento en la ultima posicion de array

//esto en que posicion añade a juan?
alumnos[alumnos.length] = "juan";
console.log("creando un nuevo elemento", alumnos);

//**y si quiero obtener el ultimo elemento de mi array */
//**.length retorna un number */
console.log("ultimo elemento", alumnos[alumnos.length-1]);



