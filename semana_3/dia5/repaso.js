
// quiero un arreglo de 10 personas
const personas1 = [
    "Jose",
    "Maria",
    "Juan",
    "Luis",
    "Pedro",
    "Julia",
    "Erick",
    "Julian",
    "Rosa",
    "Mario",
  ];
  
  let personas2 = [
    "juan",
    "Maria",
    "Pedro",
    "Luis",
    "alberto",
    "juana",
    "Mario",
    "Pedrito",
    "Luisa",
    "alberta",
  ];
  
  const personas3 = [
    "carlos",
    "jose",
    "maria",
    "lisbet",
    "roberto",
    "liseth",
    "alexa",
    "anderson",
    "linder",
  ];
  
  let personas4 = [
    "Erick",
    "Karina",
    "Patricia",
    "kjaris",
    "Bruno",
    "Pepe",
    "Juanito",
    "pepito",
    "Pedro",
    "Carlos",
  ];
  
  // como compruebo cuanto elementos tiene un arreglo?
  console.log("Personas1", personas1.length);
  console.log("Personas2", personas2.length);
  console.log("Personas3", personas3.length);
  console.log("Personas4", personas4.length);


// si quiero modificar de personas1 el indice 6 y llamor junanito
personas1[6] = "Juanito";

// let valores = [10, 10.5, true, "Hola", 0.5];
// const valores = [true, "hola", 100, 3.69, "false"];
const tipo = [100, "Pepe", true, 50.1, "5"];
const lista = ["juan", true, 10.5, "hola mundo", 5];
const valores = [1];

// quiero una funcion que me retorne el segundo de un arreglo
function obtenerSegundoValor(listaDeproblemas) {
  // nos falto validar si la posicion existe
  // una forma seria ver si valores [1] === undefined entonces retorna un error
  return listaDeproblemas[1] === undefined 
  ? "Error: posicion no encontrata"
  : listaDeproblemas[1];
  }
console.log(obtenerSegundoValor(valores));
console.log(obtenerSegundoValor(tipo));
console.log(obtenerSegundoValor(lista));



 // undefined: Hace referencia a una variable vacia
 // cuando declaramos una variable y no asignamos, esta por default es undefined
 // esta variable al no tener un valor, js no puede saber que tipo es, como no sabe
 // que tipo le dice que es undefined
 
 let nombre;

 // recuerden que en Js se sabe el tipo en base al valor

console.log("nombre", nombre);

//new Array
// lo array vacion son variables las cuales empiezan vacias y en base a algo se pueden

//esto es la declaracion de un array vacion
let carros = new Array ();

//la nueva forma es la siguiente
let carrosnuevos = [];

//quiero llenar un array desde una funcion
//vamos a crear una funcion la cual se encargue de llenar el array carrosnuevos
const llenarcarrosnuevos = (nuevoValor) =>{
    //**existe una funcion de Js llamada push(parametro) la cual recibe */
    //**un valor y lo coloca al final de arreglo */

    //**esto le añade el nuevo al array carrosnuevos */
    //**el push solo funciona si la variable es un arreglo */
    carrosnuevos.push(nuevoValor);
};

llenarcarrosnuevos("Mercedez bens");
llenarcarrosnuevos("Mitsubishi");
llenarcarrosnuevos("Tesla");
llenarcarrosnuevos("BMW");

llenarcarrosnuevos(["tiko", "ford", "toyota"]);

console.log(carros nuevos);


const valor1 = 8;
const valorParImpar = (valor1) => 
(valor1%2===0) ? `Es par` : `Es impar`;
console.log(valorParImpar (valor1))