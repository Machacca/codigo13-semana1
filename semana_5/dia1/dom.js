
/**
 * * Existe dentro de JS el document, este atributo de JS me va a permitir
 * * obtener los elementos de HTML
 */

/**
 * * Obteniendo elementos en base a su tag
 * * tag = etiquetar
 * <h1></h1> tagname = h1
 * <input /> tagname = input
 * <form></form> tagname = form
 */

// ? como tengo 4 elementos con el tagname input esto sera un array de inputs
const inputs = document.getElementsByTagName("input");
//! Recordemos que input es un HTMLCollection, pero para poder ser iterado debe ser convertido aun array
//! normal vamos a usar Array.from para convertir este HTMLColletion a un array normal
const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("newinputs", newInputs);
// un map a inputs
newInputs.map((newInput) => {
  console.log("newInput", newInput);
});

const form = document.getElementsByTagName("form");

// accedan al boton
const button = document.getElementsByTagName("button");

const divContent = document.getElementsByTagName("div");
console.log("DivContent", divContent);
const newDivContent = Array.from(divContent);
console.log(newDivContent);
newDivContent.forEach((element) => {
  // aca solo quiero que imprima algo en consola
  console.log(element);
});

/**
 * * Otra forma de acceder a los elementos del DOM es utilizando el ID
 * TODO: Recuerden que podemos asignarle un id a cualquier elemento de nuestro HTML
 */
//* Esta variable solo sera dedicada para mi email
const inputEmail = document.getElementById("input_email");
console.log("===========================");
console.log(inputEmail);
console.log("===========================");

// de esta forma estoy accediendo al value de mi input
inputEmail.style.backgroundColor = "#f01";
console.log(inputEmail.value);
console.log("inputEmail", inputEmail);
// usando puedo acceder directamente a las propiedades de mi input

const inputPassword = document.getElementById("input_password");
inputPassword.style.backgroundColor = "#000";
inputPassword.style.color = "#fff";
console.log("password", inputPassword.value);

/**
 * * Vamos a obtener elemeos por su class
 * * en JS al class se traduce como className
 */

const inputsName = document.getElementsByClassName("input_name");

console.log(inputsName);
const newInputsName = Array.from(inputsName);
newInputsName.forEach((input) => {
  console.log(input.value);
});

const buttons = document.getElementsByClassName("btn_registro");

console.log(button);